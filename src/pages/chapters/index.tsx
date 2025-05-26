import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

// Components
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Import the chapter data from [slug].tsx
const chapterTitles = {
  '01-introduction-to-product-manager': 'Introduction to Product Management',
  '02-essential-marketing-concept': 'Essential Marketing Concepts for Product Managers',
  '03-customer-discovery': 'Customer Discovery and Research Methods',
  '04-product-vision-and-strategy': 'Product Vision and Strategy Development',
  '05-frameworks-and-decision-making': 'Prioritization Frameworks and Decision Making',
  '06-product-roadmap': 'Product Roadmapping and Planning',
  '07-agile-methodologies': 'Agile Methodologies and Product Development',
  '08-coss-functional-collaboration': 'Cross-Functional Collaboration and Communication',
  '09-metrics-analytics-data': 'Metrics, Analytics, and Data-Driven Decision Making',
  '10-growth-strategies': 'Growth Strategies and User Acquisition',
  '11-product-metrics': 'Product Metrics and Success Frameworks',
  '12-product-launch': 'Product Positioning and Launch Strategy',
  '13-communication-skills': 'Stakeholder Management and Communication Skills',
  '14-career-development': 'Career Development and Personal Branding',
  '15-product-design': 'Product Design and Technical Skills',
  '16-continuous-learning': 'Career Advancement and Continuous Learning'
};

export default function ChaptersIndex() {
  return (
    <>
      <Head>
        <title>Product Management Guide - All Chapters</title>
        <meta name="description" content="Complete guide to product management - Browse all chapters" />
      </Head>

      <Navbar />
      
      <main className="min-h-screen pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">Product Management Guide</h1>
          
          <div className="grid gap-6">
            {Object.entries(chapterTitles).map(([slug, title], index) => (
              <Link 
                href={`/chapters/${slug}`}
                key={slug}
                className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-start">
                  <span className="text-gray-500 font-medium mr-4">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">{title}</h2>
                    <p className="text-gray-600">Click to read this chapter</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        <Footer />
      </main>
    </>
  );
}
