// pages/blogs/[slug].js
"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogPost() {
      if (!slug) return;

      try {
        const post = await client.fetch(`
          *[_type == "blogPost" && slug.current == $slug][0]{
            _id,
            title,
            mainImage{
              asset->{
                _id,
                url
              }
            },
            subtitle,
            details,
            category->{
              title
            }
          }
        `, { slug });

        setPost(post);
      } catch (error) {
        console.error('Error fetching blog post:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchBlogPost();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Blog post not found</h1>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        {post.subtitle && (
          <p className="text-xl text-gray-600 mb-4">{post.subtitle}</p>
        )}
        {post.category && (
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            {post.category.title}
          </span>
        )}
      </header>

      {post.mainImage && (
        <div className="relative w-full h-96 mb-8">
          <Image
            src={post.mainImage.asset.url}
            alt={post.title}
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
      )}

      <div className="prose max-w-none">
        <PortableText value={post.details} />
      </div>
    </article>
  );
}