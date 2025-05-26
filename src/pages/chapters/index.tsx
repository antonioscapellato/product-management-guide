import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

// Components
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Chapters from '@/components/Chapters';
import Hero from '@/components/Hero';

const seoData = {
  title: "All Chapters - Product Mastery Guide",
  description: "Browse all chapters of the Product Mastery guide. Learn product management from foundations to advanced topics including strategy, execution, growth, and career development.",
  keywords: "product management chapters, product management guide, product management topics, product management learning, product management curriculum, product management course, product management education",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  canonical: "https://productmastery.com/chapters",
  ogTitle: "All Chapters - Product Mastery Guide",
  ogDescription: "Browse all chapters of the Product Mastery guide. Learn product management from foundations to advanced topics including strategy, execution, growth, and career development.",
  ogType: "website",
  ogUrl: "https://productmastery.com/chapters",
  ogImage: "https://productmastery.com/og-image.jpg",
  ogSiteName: "Product Mastery",
  ogLocale: "en_US",
  twitterCard: "summary_large_image",
  twitterTitle: "All Chapters - Product Mastery Guide",
  twitterDescription: "Browse all chapters of the Product Mastery guide. Learn product management from foundations to advanced topics including strategy, execution, growth, and career development.",
  twitterImage: "https://productmastery.com/twitter-image.jpg",
  twitterCreator: "@productmastery"
};

export default function ChaptersIndex() {
  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <meta name="viewport" content={seoData.viewport} />
        <meta name="robots" content={seoData.robots} />
        
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
      </Head>

      <Navbar />
      
      <main className="w-full flex flex-col items-center align-center justify-center min-h-screen pt-24 pb-16">
        
        <div className={"flex flex-col w-full max-w-7xl pl-4 space-y-2"}>
          <h1 className={"text-6xl text-default-900"}>Chapters</h1>
          <h2 className={"text-xl text-default-600 font-light"}>
            Product Mastery by <Link href="https://scapellato.dev" className="text-blue-400">Antonio Scapellato</Link>
          </h2>
        </div>

        <Chapters />

        <Hero />

        <Footer />

      </main>
    </>
  );
}
