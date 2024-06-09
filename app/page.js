import Image from "next/image";
import Header from "./section/Header"
import Hero from "./section/Hero";
import Companies from "./section/Companies";
import Services from "./section/Services";
import Testimonials from "./section/Testimonials";
import CTA from "./section/CTA";
import Footer from "./section/Footer";

import Events from "./section/Events";
import About from "./section/About";
export default function Home() {
  return (
    <main>
     <Header/>
     <Hero/>
     <Companies/>
     <About/>
     <Services/>
     <Testimonials/>
     <Events/>
     <CTA/>
  <Footer/>

    </main>
  );
}
