"use client"

import "../app/globals.css";
import Head from "next/head";
import Header from "@/app/section/Header";
import Footer from "@/app/section/Footer";


function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head> 
        <title>ivanmoreira</title>
        <meta name="description" content="Leadership coach" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

export default MyApp;