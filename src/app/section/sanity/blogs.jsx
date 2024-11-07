// components/BlogList.js
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(`
        *[_type == "blogPost"]{
          _id,
          title,
          mainImage{
            asset->{
              _id,
              url
            }
          },
          subtitle,
          description,
          "category": category->title
        }
      `);
      setBlogs(data);
      setFilteredBlogs(data); // Initialize with all blogs
    };

    fetchData();
  }, []);

  const handleFilterChange = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredBlogs(blogs);
    } else {
      const filtered = blogs.filter(blog => blog.category === category);
      setFilteredBlogs(filtered);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Posts</h1>
      
      {/* Category Filters */}
      <div className="flex space-x-4 mb-6">
        {['All', 'Event', 'Presentation', 'Blog'].map((category) => (
          <button
            key={category}
            onClick={() => handleFilterChange(category)}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === category
                ? 'bg-secondary text-white'
                : 'bg-gray-200 text-gray-700'
            } transition-colors duration-200 ease-in-out`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <div key={blog._id} className="bg-white shadow-md rounded-lg p-4">
              {blog.mainImage && (
                <Image
                  src={blog.mainImage.asset.url}
                  alt={blog.title}
                  width={400}
                  height={250}
                  className="rounded-lg aspect-square"
                />
              )}
              <h2 className="text-2xl font-semibold mt-4">{blog.title}</h2>
              <p className="text-lg text-gray-600 mt-2">{blog.subtitle}</p>
             <span className="text-sm text-white mt-2 inline-block bg-PrimaryTextColor px-3 py-2 rounded-full">
               {blog.category}
              </span>
              
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No posts found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default BlogList;
