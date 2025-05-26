import React from 'react';
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Chapters from '@/components/Chapters';
import Hero from '@/components/Hero';
import { Avatar, Button, Link } from '@heroui/react';

const seoData = {
  title: "About Product Mastery - Our Mission and Team",
  description: "Learn about Product Mastery's mission to empower technical professionals with product management expertise. Discover our team's commitment to excellence in product education.",
  keywords: "about product mastery, product management education, technical product management, product management team, product management mission",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  canonical: "https://productmastery.com/about",
  ogTitle: "About Product Mastery - Our Mission and Team",
  ogDescription: "Learn about Product Mastery's mission to empower technical professionals with product management expertise. Discover our team's commitment to excellence in product education.",
  ogType: "website",
  ogUrl: "https://productmastery.com/about",
  ogImage: "https://productmastery.com/og-image.jpg",
  ogSiteName: "Product Mastery",
  ogLocale: "en_US",
  twitterCard: "summary_large_image",
  twitterTitle: "About Product Mastery - Our Mission and Team",
  twitterDescription: "Learn about Product Mastery's mission to empower technical professionals with product management expertise. Discover our team's commitment to excellence in product education.",
  twitterImage: "https://productmastery.com/twitter-image.jpg",
  twitterCreator: "@productmastery",
};

const AboutPage: React.FC = () => {
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
      
      <main className="min-h-screen">

        {/* Hero Section */}
        <section className="pt-20 pb-8">
          <div className="container mx-auto px-4">
            <h1 className="text-6xl md:text-8xl font-medium text-default-900 mb-6 text-center">
                Meet Product Mastery
            </h1>
            <p className="text-xl font-thin md:text-4xl text-default-600 max-w-3xl mx-auto text-center mb-12">
                Helping techies rock the product world            
            </p>
            
            <div className="relative w-full h-[500px] max-w-6xl mx-auto rounded-2xl overflow-hidden">
              <Image
                src="/product.png"
                alt="About Product Mastery"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-center text-3xl font-light text-default-900 mb-8">
                    Our Mission
                </h2>
                <p className="text-center text-lg font-light text-default-600 mb-6">
                    At Product Mastery, we believe that technical professionals have a unique advantage in product management. 
                    Our mission is to bridge the gap between technical expertise and product leadership, creating a new generation 
                    of product managers who can effectively translate technical capabilities into successful products.
                </p>
                <p className="text-center text-lg font-light text-default-600 mb-6">
                    We're committed to providing comprehensive, practical, and actionable guidance that helps technical 
                    professionals navigate the complex world of product management with confidence and competence.
                </p>
            </div>
          </div>
        </section>


        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col items-center gap-6">
                <Avatar 
                  src="https://www.scapellato.dev/avatars/antonscap_avatar.png"
                  className="w-32 h-32"
                />
                <div className="text-center">
                    <h3 className="text-2xl font-light text-default-900 mb-2">
                        Antonio Scapellato
                    </h3>
                    <p className="text-lg font-thin text-default-700">
                        From Engineer to Entrepreneur. <br />
                        Building the future with Creativity & AI.                  
                    </p>
                    <div className="mt-4 flex gap-4 justify-center">
                        <Button
                            as={Link}
                            href="https://scapellato.dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-default-50 text-default-900"
                        >
                            Website
                        </Button>
                        <Button
                            as={Link}
                            href="https://github.com/antonioscapellato"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-default-50 text-default-900"
                        >
                            GitHub
                        </Button>
                        <Button
                            as={Link}
                            href="https://linkedin.com/in/antonio-scapellato"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-default-50 text-default-900"
                        >
                            LinkedIn
                        </Button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Chapters />

        <Hero />

        <Footer />
      </main>
    </>
  );
};

export default AboutPage;
