import React from 'react';
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Chapters from "../components/Chapters";
import Hero from "../components/Hero";
import About from "../components/About";

const seoData = {
  title: "Product Mastery - Product Zero to Hero a Product Management Guide for Technical People",
  description: "A comprehensive guide for product management best practices and methodologies. Learn product management from scratch, technical product management, agile methodologies, and product development strategies.",
  keywords: "product management, technical product management, product development, agile methodology, product strategy, product roadmap, product lifecycle, product metrics, product analytics, product leadership, product planning, product execution, product optimization, product innovation, product market fit, product discovery, product delivery, product launch, product scaling, product management guide, product management for technical people, product management best practices",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  canonical: "https://pm.scapellato.dev.com/",
  ogTitle: "Product Mastery - Product Zero to Hero a Product Management Guide for Technical People",
  ogDescription: "A comprehensive guide for product management best practices and methodologies. Learn product management from scratch, technical product management, agile methodologies, and product development strategies.",
  ogType: "website",
  ogUrl: "https://pm.scapellato.dev.com/",
  ogImage: "https://pm.scapellato.dev.com/product.png",
  ogSiteName: "Product Mastery",
  ogLocale: "en_US",
  twitterCard: "summary_large_image",
  twitterTitle: "Product Mastery - Product Zero to Hero a Product Management Guide for Technical People",
  twitterDescription: "A comprehensive guide for product management best practices and methodologies. Learn product management from scratch, technical product management, agile methodologies, and product development strategies.",
  twitterImage: "https://pm.scapellato.dev.com/product.png",
  twitterCreator: "@productmastery",
  favicon: "/favicon.ico",
  author: "Product Mastery Team",
  language: "en",
  themeColor: "#ffffff",
  appleTouchIcon: "/apple-touch-icon.png",
  manifest: "/site.webmanifest"
};

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <meta name="viewport" content={seoData.viewport} />
        <meta name="robots" content={seoData.robots} />
        <meta name="author" content={seoData.author} />
        <meta name="language" content={seoData.language} />
        <meta name="theme-color" content={seoData.themeColor} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={seoData.canonical} />
        
        {/* Open Graph */}
        <meta property="og:title" content={seoData.ogTitle} />
        <meta property="og:description" content={seoData.ogDescription} />
        <meta property="og:type" content={seoData.ogType} />
        <meta property="og:url" content={seoData.ogUrl} />
        <meta property="og:image" content={seoData.ogImage} />
        <meta property="og:site_name" content={seoData.ogSiteName} />
        <meta property="og:locale" content={seoData.ogLocale} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content={seoData.twitterCard} />
        <meta name="twitter:title" content={seoData.twitterTitle} />
        <meta name="twitter:description" content={seoData.twitterDescription} />
        <meta name="twitter:image" content={seoData.twitterImage} />
        <meta name="twitter:creator" content={seoData.twitterCreator} />
        
        {/* Favicon and App Icons */}
        <link rel="icon" href={seoData.favicon} />
        <link rel="apple-touch-icon" href={seoData.appleTouchIcon} />
        <link rel="manifest" href={seoData.manifest} />
      </Head>

      <Navbar />
      
      <main className="min-h-screen">
        <Hero />
        <Chapters />
        <About />
      </main>

      <Footer />
    </>
  );
};

export default Home;
