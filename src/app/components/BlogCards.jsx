// components/BlogCard.js
import Link from 'next/link';
import Image from 'next/image';

export default function BlogCard({ blog }) {
  return (
    <Link href={`/blogs/${blog.slug.current}`} className="group">
      <article className="overflow-hidden rounded-lg shadow-lg transition-transform duration-200 hover:shadow-xl hover:-translate-y-1">
        {blog.mainImage && (
          <div className="relative h-48 w-full">
            <Image
              src={blog.mainImage.asset.url}
              alt={blog.title}
              fill
              className="object-cover"
            />
          </div>
        )}
        
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600">
            {blog.title}
          </h2>
          
          {blog.subtitle && (
            <p className="text-gray-600 mb-2 line-clamp-2">
              {blog.subtitle}
            </p>
          )}
          
          {blog.category && (
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              {blog.category.title}
            </span>
          )}
        </div>
      </article>
    </Link>
  );
}