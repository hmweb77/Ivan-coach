// pages/presentation.js
"use client"
import Image from 'next/image';
import { createClient } from 'next-sanity';
import Button from '@/app/components/Button';

const client = createClient({
  projectId: 'irzsh0dn', // Replace with your Sanity project ID
  dataset: 'production', // Replace with your Sanity dataset
  apiVersion: '2021-06-07',
  useCdn: true,
});

export async function getStaticProps() {
  

    console.log("landing")
  const presentation = await client.fetch(`
    *[_type == "presentation"][0]{
      name,
      "image": image.asset->url,
      description,
      details,
      buttonText
    }
  `);
  console.log("test",presentation)
  console.log("landing2")
  return {
    props: {
      presentation,
    },
    revalidate: 10, // Revalidate every 10 seconds
  };
}

export default function PresentationPage({presentation}) {
  const presentations = [
    { name: 'Presentation 1', hours: '2 hours' },
    { name: 'Presentation 2', hours: '1.5 hours' },
    { name: 'Presentation 3', hours: '3 hours' },
    { name: 'Presentation 4', hours: '2 hours' },
    { name: 'Presentation 5', hours: '1 hour' },
    { name: 'Presentation 6', hours: '2.5 hours' },
    { name: 'Presentation 7', hours: '1.5 hours' },
    { name: 'Presentation 8', hours: '2 hours' },
    { name: 'Presentation 9', hours: '3 hours' },
  ];
    console.log("Client-side presentation data:", presentation);
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Learning Section</h1>
        <p className="text-lg text-gray-600 mb-8">
          Discover our comprehensive collection of educational presentations designed 
          to enhance your knowledge and skills. Each session is carefully crafted 
          to provide maximum value and practical insights.
        </p>
       <Button>Book now</Button>
      </section>

      {/* Presentations Section */}
      <section>
        <h2 className="text-2xl font-bold mb-8">Presentations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {presentations.map((presentation, index) => (
            <div key={index} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <div className="p-4">
                <div className="bg-gray-200 w-full h-48 mb-4 rounded-lg flex items-center justify-center">
                  <img 
                    src="/api/placeholder/400/320" 
                    alt="presentation thumbnail" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="font-semibold mb-2">{presentation.name}</h3>
                <p className="text-gray-600">{presentation.hours}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-8">Get in touch</h2>
        <form className="max-w-lg">
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
