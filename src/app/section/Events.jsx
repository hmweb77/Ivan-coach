"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import axios from "axios";

import HeadingText from "../components/HeadingText";
import backgroundOverlay from "../assets/Background-overlay.png";



const Events = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSetName = (e) => setName(e.target.value);
  const handleSetEmail = (e) => setEmail(e.target.value);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatusMessage("Processing your subscription...");
    try {
      const response = await axios.post("api/subscribe", { email, name });
      setIsSubmitting(true);
      setStatusMessage("Thank you for subscribing!");
      setName("");
      setEmail("");
    } catch (error) {
      console.error("Error submitting form:", error.message);
      setStatusMessage("Failed to subscribe. Please try again later.");
    }
  };

  return (
    <section id="newsletter" className="bg-neutral">
      <div className="flex flex-col lg:flex-row   mx-auto px-10 relative py-24 "> 
        <Image
          src={backgroundOverlay}
          alt="image"
          className="absolute inset-0 z-0 invisible lg:visible"
        />
        <div className="flex justify-between gap-10  flex-col z-10 bg-transparent">
          <HeadingText>
            {" "}
            Stay Ahead With Expert Tips - Join Our Newsletter
          </HeadingText>
          <form  onSubmit={handleSubmit} className="">
            <input
               onChange={handleSetEmail}
               value={email}
              type="email"
              placeholder="Your Email Address"
              className="px-5 py-3   w-full  md:w-3/4 outline-none focus:ring-1 focus:ring-primary mb-3 md:mb-0"
            />
            <button
              type="submit"
              className="text-gray-100 bg-primary px-5 py-3  hover:scale-105 active:scale-100 cursor-pointer  w-full  md:w-1/4"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Events;
