import { useRouter } from 'next/router';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { Components } from 'react-markdown';

import React, { Suspense, useState, useEffect } from 'react';

// Components
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Chapters from '@/components/Chapters';
import Hero from '@/components/Hero';

// Define the type for our chapter map
interface ChapterMap {
  [key: string]: string;
}

const chapterComponents: ChapterMap = {
  '01-introduction-to-product-manager': '/content/01-introduction-to-product-manager.md',
  '02-essential-marketing-concept': '/content/02-essential-marketing-concept.md',
  '03-customer-discovery': '/content/03-customer-discovery.md',
  '04-product-vision-and-strategy': '/content/04-product-vision-and-strategy.md',
  '05-frameworks-and-decision-making': '/content/05-frameworks-and-decision-making.md',
  '06-product-roadmap': '/content/06-product-roadmap.md',
  '07-agile-methodologies': '/content/07-agile-methodologies.md',
  '08-coss-functional-collaboration': '/content/08-coss-functional-collaboration.md',
  '09-metrics-analytics-data': '/content/09-metrics-analytics-data.md',
  '10-growth-strategies': '/content/10-growth-strategies.md',
  '11-product-metrics': '/content/11-product-metrics.md',
  '12-product-launch': '/content/12-product-launch.md',
  '13-communication-skills': '/content/13-communication-skills.md',
  '14-career-development': '/content/14-career-development.md',
  '15-product-design': '/content/15-product-design.md',
  '16-continuous-learning': '/content/16-continuous-learning.md'
};

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

const chapterCategories = {
  '01-introduction-to-product-manager': 'Foundations',
  '02-essential-marketing-concept': 'Foundations',
  '03-customer-discovery': 'Foundations',
  '04-product-vision-and-strategy': 'Foundations',
  '05-frameworks-and-decision-making': 'Execution',
  '06-product-roadmap': 'Execution',
  '07-agile-methodologies': 'Execution',
  '08-coss-functional-collaboration': 'Execution',
  '09-metrics-analytics-data': 'Growth & Analytics',
  '10-growth-strategies': 'Growth & Analytics',
  '11-product-metrics': 'Growth & Analytics',
  '12-product-launch': 'Growth & Analytics',
  '13-communication-skills': 'Career Development',
  '14-career-development': 'Career Development',
  '15-product-design': 'Career Development',
  '16-continuous-learning': 'Career Development'
};

interface CodeProps {
  inline?: boolean;
  className?: string;
  children: React.ReactNode;
}

// Custom components for markdown rendering
const markdownComponents: Components = {
  h1: ({ children, ...props }) => (
    <h1 className="text-4xl font-semibold mt-12 mb-4" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2 className="text-3xl font-medium mt-8 mb-3" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 className="text-2xl font-medium mt-6 mb-2" {...props}>
      {children}
    </h3>
  ),
  p: ({ children, ...props }) => (
    <p className="my-4 leading-relaxed" {...props}>
      {children}
    </p>
  ),
  ul: ({ children, ...props }) => (
    <ul className="list-disc font-light pl-6 my-4" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol className="list-decimal font-light pl-6 my-4" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li className="mb-2 font-light" {...props}>
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote className="rounded-lg bg-default-50 text-default-600 py-2 px-4 italic my-4" {...props}>
      {children}
    </blockquote>
  ),
  code: ({ node, inline, className, children, ...props }: any) => {
    const match = /language-(\w+)/.exec(className || '');
    return !inline ? (
      <pre className="bg-default-100 p-4 rounded-lg overflow-x-auto my-4">
        <code className={match ? `language-${match[1]}` : ''} {...props}>
          {children}
        </code>
      </pre>
    ) : (
      <code className="bg-default-100 px-2 py-1 rounded" {...props}>
        {children}
      </code>
    );
  },
  a: ({ children, ...props }) => (
    <a className="text-blue-600 hover:text-blue-800 underline" {...props}>
      {children}
    </a>
  ),
  img: ({ ...props }) => (
    <img className="max-w-full h-auto rounded-lg my-4" {...props} />
  ),
  table: ({ children, ...props }) => (
    <div className="overflow-x-auto my-4">
      <table className="min-w-full divide-y divide-default-200" {...props}>
        {children}
      </table>
    </div>
  ),
  th: ({ children, ...props }) => (
    <th className="px-6 py-3 bg-default-50 text-left text-xs font-light text-default-900 uppercase tracking-wider" {...props}>
      {children}
    </th>
  ),
  td: ({ children, ...props }) => (
    <td className="px-6 py-4 whitespace-nowrap text-sm text-default-500" {...props}>
      {children}
    </td>
  ),
};

export default function Chapter() {
  const router = useRouter();
  const { slug } = router.query;
  
  const chapterPath = chapterComponents[slug as keyof typeof chapterComponents];
  const title = chapterTitles[slug as keyof typeof chapterTitles];
  const category = chapterCategories[slug as keyof typeof chapterCategories];

  if (!chapterPath) {
    return <div>Chapter not found</div>;
  }

  const seoData = {
    title: `${title} - Product Mastery`,
    description: `Learn about ${title.toLowerCase()} in this comprehensive chapter of the Product Mastery guide. Essential knowledge for product managers and technical professionals.`,
    keywords: `product management, ${title.toLowerCase()}, product strategy, product development, ${category.toLowerCase()}, product management guide`,
    viewport: "width=device-width, initial-scale=1",
    robots: "index, follow",
    canonical: `https://productmastery.com/chapters/${slug}`,
    ogTitle: `${title} - Product Mastery`,
    ogDescription: `Learn about ${title.toLowerCase()} in this comprehensive chapter of the Product Mastery guide. Essential knowledge for product managers and technical professionals.`,
    ogType: "article",
    ogUrl: `https://pm.scapellato.dev/chapters/${slug}`,
    ogImage: "https://pm.scapellato.dev/logo.png",
    ogSiteName: "Product Mastery",
    ogLocale: "en_US",
    twitterCard: "summary_large_image",
    twitterTitle: `${title} - Product Mastery`,
    twitterDescription: `Learn about ${title.toLowerCase()} in this comprehensive chapter of the Product Mastery guide. Essential knowledge for product managers and technical professionals.`,
    twitterImage: "https://pm.scapellato.dev/logo.png",
    twitterCreator: "@productmastery"
  };

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
      
      <main className="min-h-screen pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {category && (
            <div className={`mb-8 p-4 rounded-lg dark:shadow-xl ${
              category === 'Foundations' ? 'bg-gradient-to-r from-indigo-700 to-indigo-600 dark:shadow-indigo-900/40' :
              category === 'Execution' ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 dark:shadow-indigo-600/40' :
              category === 'Growth & Analytics' ? 'bg-gradient-to-r from-violet-700 to-violet-600 dark:shadow-violet-900/40' : 'bg-gradient-to-r from-purple-600 to-purple-500 dark:shadow-violet-600/40'
            }`}>
              <h2 className="text-2xl text-white font-light">{category}</h2>
            </div>
          )}
          <div className="prose max-w-none">
            <Suspense fallback={
              <div className="flex justify-center items-center min-h-[200px]">
                <div>Loading...</div>
              </div>
            }>
              <Component path={chapterPath} />
            </Suspense>
          </div>
        </div>
        
        <Chapters />

        <Hero />
        
        <Footer />
      </main>
    </>
  );
}

const Component = ({ path }: { path: string }) => {
  const [content, setContent] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(path)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to load content');
        }
        return res.text();
      })
      .then((text) => {
        setContent(text);
      })
      .catch((err) => {
        console.error('Failed to load markdown:', err);
        setError('Failed to load content');
      });
  }, [path]);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!content) return null;

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={markdownComponents}
    >
      {content}
    </ReactMarkdown>
  );
};

export async function getStaticPaths() {
  const paths = Object.keys(chapterComponents).map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const chapterPath = chapterComponents[slug as keyof typeof chapterComponents];

  if (!chapterPath) {
    return {
      notFound: true,
    };
  }

  return {
    props: {},
  };
}
