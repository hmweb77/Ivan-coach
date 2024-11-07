

import Hero from "@/app/section/Hero";
import Stats from "@/app/section/Companies";
import Services from "@/app/section/Services";
import Testimonials from "@/app/section/Testimonials";
import CTA from "@/app/section/CTA";


import About from "@/app/section/About";
import Events from "@/app/section/Events";
export default function Home() {
  return (
    <main>
        
   
     <Hero/>
     <Stats/>
     <About/>
     <Services/>
     <Testimonials/>
  <Events/>
     <CTA/>


    </main>
  );
}
