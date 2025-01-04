 // pages/presentation/index.js
 "use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';

import Button from '@/app/components/Button';
import HeadingText from '@/app/components/HeadingText';

export default function PresentationPage() {
  const [presentations, setPresentations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPresentations = async () => {
      try {
        const data = await client.fetch(`
          *[_type == "presentation"] {
            _id,
            name,
            slug,
            duration,
            description,
            "imageUrl": images[0].asset->url,
            buttonText,
            buttonLink
          }
        `);
        setPresentations(data);
      } catch (error) {
        console.error("Error fetching presentations:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPresentations();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-12">
      <div className="text-center my-6">
          <HeadingText>Welcome to Our Learning Section</HeadingText>
        </div>
      
        <p className="text-lg text-gray-600 mb-8">
          Discover our comprehensive collection of educational presentations designed 
          to enhance your knowledge and skills. Each session is carefully crafted 
          to provide maximum value and practical insights.
        </p>
        <Button>
          <Link href="https://calendly.com/ivanmoreira/30min?month=2025-01" target="blank">
          
          Book a free call now
          </Link>
           </Button>
      </section>

      {/* Presentations Section */}
      <section>
      <HeadingText>Presentations</HeadingText>
      
        <div className="grid grid-cols-1 md:grid-cols-2 mt-6 lg:grid-cols-3 gap-6">
          {presentations.map((presentation) => (
            <Link 
              href={`/presentation/${presentation.slug.current}`}
              key={presentation._id}
              className="block"
            >
              <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <div className="p-4">
                  <div className="bg-gray-200 w-full h-48 mb-4 rounded-lg overflow-hidden">
                    {presentation.imageUrl ? (
                      <Image 
                        src={presentation.imageUrl}
                        alt={presentation.name}
                        width={400}
                        height={320}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-200">
                        <span className="text-gray-400">No image available</span>
                      </div>
                    )}
                  </div>
                  <h3 className="font-semibold mb-2">{presentation.name}</h3>
                  <p className="text-gray-600 mb-2">{presentation.duration} hours</p>
                  <p className="text-gray-600 text-sm line-clamp-2">{presentation.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="mt-16">
        <HeadingText>Get in touch</HeadingText>
     
        <form className="max-w-lg mt-6" onSubmit={(e) => e.preventDefault()}>
          <div className="mb-6">
            <input
              type="text"
              placeholder="Your name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <textarea
              placeholder="Description"
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <Button>Submit</Button>
        </form>
      </section>
    </div>
  );
}