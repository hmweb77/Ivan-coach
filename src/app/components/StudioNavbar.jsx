"use client"
import {ArrowLeft} from 'lucide-react';
import Link from 'next/link';


export default function StudioNavbar() {
  return (
    <div>
        <div className="flex items-center my-6 bg-white justify-between p-5">
          <Link href="/" className="text-red-700 flex items-center">
        
            <ArrowLeft className="h-6 w6 text-pink-500 m-2"/>
            Go To Website
          </Link>
        </div>
      
    </div>
  )
}