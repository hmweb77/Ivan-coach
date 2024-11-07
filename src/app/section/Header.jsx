"use client";

import Button from "../components/Button";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import Image from "next/image";
import logo from "../assets/Colorful Modern Infinity Technology Free Logo.png";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const [show, setShow] = useState(false);
  const router = useRouter();

  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About Us",
      href: "#about",
    },
    {
      name: "Services",
      href: "#services",
    },
    {
      name: "Blogs",
      href: "/blogs",
    },
  ];

  const handleNavigation = (link) => {
    if (link.href.startsWith("#") || link.href === "/") {
      const hash = link.href.replace("#", "");

      if (router.pathname !== "/") {
        router.push(`/#${hash}`);
      } else {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else {
          router.push(`/#${hash}`);
        }
      }
    } else {
      router.push(link.href);
    }
    setShow(false); // Close the mobile menu after navigation
  };

  return (
    <header
      className={`${show ? "h-screen fixed inset-0 z-30" : "h-auto"} bg-neutral font-publicSans font-medium`}
    >
      <div
        className={`${
          show ? "h-full" : "h-[120px] overflow-hidden"
        } flex gap-10 w-11/12 mx-auto lg:items-center py-10 flex-col lg:flex-row overflow-hidden`}
      >
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-semibold w-36"
        >
          <Image
            src={logo}
            alt="logo"
            className="flex items-center gap-2 text-xl font-semibold"
          />
        </Link>

        <nav
          className={`${
            show ? "h-auto" : "h-0 w-0 overflow-hidden"
          } flex gap-4 justify-between flex-1 flex-col lg:h-auto lg:items-center lg:flex-row transition-all`}
        >
          <ul className="flex gap-4 flex-col lg:flex-row">
            {navLinks.map((link, index) => (
              <li key={index}>
                <button
                  onClick={() => handleNavigation(link)}
                  className="inline-block px-5 py-3 hover:bg-primary/20 w-full rounded-md text-left lg:text-center"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
          <Button>
            <Link href="https://calendly.com/ivanmoreira/30min">
              Contact Us
            </Link>
          </Button>
        </nav>
        <button onClick={() => setShow(!show)} className="lg:hidden block">
          <FaBars className="text-4xl fill-primary border border-primary/50 rounded-md cursor-pointer p-1 absolute top-[6%] right-[5%] hover:scale-105 active:scale-100 hover:bg-primary/10" />
        </button>
      </div>
    </header>
  );
};

export default Header;
