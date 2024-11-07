import {ArrowLeft} from 'lucide-react';
import Link from 'next/link';


export default function StudioNavbar() {
  return (
    <div>
        <div className="flex items-center bg-black justify-between p-5">
          <Link href="/" className="text-primary flex items-center">
            <ArrowLeft className="h-6 w6 text-primary m-2"/>
            Go To Website
          </Link>
        </div>
      
    </div>
  )
}