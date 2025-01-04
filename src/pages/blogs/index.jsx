// components/BlogList.js
"use client";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import BlogCard from "@/app/components/BlogCards";
import HeadingText from "@/app/components/HeadingText";
const BlogIndex = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.fetch(`
          *[_type == "blogPost"] {
            _id,
            title,
            slug,
            mainImage {
              asset-> {
                _id,
                url
              }
            },
            subtitle,
            description,
            category-> {
              title
            }
          } | order(_createdAt desc)
        `);
        setBlogs(data);
        setFilteredBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredBlogs(blogs);
    } else {
      const filtered = blogs.filter(
        (blog) => blog.category?.title === selectedCategory
      );
      setFilteredBlogs(filtered);
    }
  }, [selectedCategory, blogs]);

  // Get unique categories from blogs
  const categories = [
    "All",
    ...new Set(blogs.map((blog) => blog.category?.title).filter(Boolean)),
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <div className="text-center">
          <HeadingText>Welcome to Our Blogs</HeadingText>
        </div>

        {/* Category Filters */}
        <div className="flex mt-6 flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors duration-200 
                ${
                  selectedCategory === category
                    ? "bg-secondary text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </header>

      {/* Blog Grid */}
      {filteredBlogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl text-gray-600">
            No posts found in {selectedCategory} category.
          </h3>
        </div>
      )}
    </div>
  );
};

export default BlogIndex;
