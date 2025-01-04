
// pages/presentation/[slug].js
"use client"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import { client } from '@/sanity/lib/client';
import HeadingText from '@/app/components/HeadingText';
import Button from '@/app/components/Button';

export default function PresentationDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const [presentation, setPresentation] = useState(null);
  const [relatedPresentations, setRelatedPresentations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!slug) return;

      try {
        // Fetch current presentation
        const presentationData = await client.fetch(`
          *[_type == "presentation" && slug.current == $slug][0] {
            _id,
            name,
            duration,
            description,
            details,
            images[] {
              asset-> {
                url
              },
              alt,
              caption
            },
            buttonText,
            buttonLink
          }
        `, { slug });
        
        // Fetch other presentations for the related section
        const otherPresentations = await client.fetch(`
          *[_type == "presentation" && slug.current != $slug] {
            _id,
            name,
            slug,
            duration,
            description,
            "imageUrl": images[0].asset->url
          }
        `, { slug });

        // Randomly select 3 presentations
        const shuffled = otherPresentations.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 3);

        setPresentation(presentationData);
        setRelatedPresentations(selected);
      } catch (error) {
        console.error("Error fetching presentation:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!presentation) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Presentation not found</h1>
      </div>
    );
  }

  const components = {
    types: {
      image: ({ value }) => (
        <div className="my-8">
          <div className="relative w-full h-96">
            <Image
              src={value.asset.url}
              alt={value.alt || 'Presentation image'}
              fill
              className="object-contain"
            />
          </div>
          {value.caption && (
            <p className="text-center text-gray-600 mt-2">{value.caption}</p>
          )}
        </div>
      ),
    },
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8">
        <div className="text-center">
          <HeadingText>{presentation.name}</HeadingText>
        </div>
        <div className="flex items-center space-x-4 mb-4">
          <span className="text-gray-600">Duration: {presentation.duration} hours</span>
        </div>
        <p className="text-lg text-gray-600">{presentation.description}</p>
      </header>

      {/* Image Gallery */}
      {presentation.images && presentation.images.length > 0 && (
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {presentation.images.map((image, index) => (
              <div key={index} className="relative h-64">
                <Image
                  src={image.asset.url}
                  alt={image.alt || `${presentation.name} image ${index + 1}`}
                  fill
                  className="object-cover rounded-lg"
                />
                {image.caption && (
                  <p className="text-sm text-gray-600 mt-2">{image.caption}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Detailed Content */}
      <div className="prose max-w-none">
        <PortableText value={presentation.details} components={components} />
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        {presentation.buttonLink ? (
          <a href={presentation.buttonLink} target="_blank" rel="noopener noreferrer">
            <Button>{presentation.buttonText || 'Book Now'}</Button>
          </a>
        ) : (
          <Button>{presentation.buttonText || 'Book Now'}</Button>
        )}
      </div>

      {/* Related Presentations */}
      {relatedPresentations.length > 0 && (
        <section className="mt-16">
          <div className="text-center mb-8">
            <HeadingText>Other Presentations You Might Like</HeadingText>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPresentations.map((related) => (
              <Link 
                href={`/presentation/${related.slug.current}`}
                key={related._id}
                className="block group"
              >
                <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                  <div className="p-4">
                    <div className="bg-gray-200 w-full h-48 mb-4 rounded-lg overflow-hidden">
                      {related.imageUrl ? (
                        <Image 
                          src={related.imageUrl}
                          alt={related.name}
                          width={400}
                          height={300}
                          className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-200">
                          <span className="text-gray-400">No image available</span>
                        </div>
                      )}
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-blue-600">
                      {related.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Duration: {related.duration} hours
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}