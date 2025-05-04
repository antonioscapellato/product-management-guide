import { useRouter } from 'next/router';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import React, { Suspense, useState, useEffect } from 'react';

// Components
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Define the type for our chapter map
interface ChapterMap {
  [key: string]: string;
}

const chapterComponents: ChapterMap = {
  'introduction': '/content/introduction.md',
  'product-manager-role': '/content/product-manager-role.md',
  'code-to-customer': '/content/code-to-customer.md',
  'product-toolkit': '/content/product-toolkit.md',
  'product-workflow': '/content/product-workflow.md',
  'building-product': '/content/building-product.md',
  'building-team': '/content/building-team.md',
  'conclusion': '/content/conclusion.md'
};

const chapterTitles = {
  'introduction': 'Introduction to Product Management',
  'product-manager-role': 'The Product Manager Role',
  'code-to-customer': 'From Code to Customer',
  'product-toolkit': 'The Product Manager\'s Toolkit',
  'product-workflow': 'The Product Manager\'s Workflow',
  'building-product': 'Building a Product',
  'building-team': 'Building a Product Team',
  'conclusion': 'Conclusion'
};

export default function Chapter() {
  const router = useRouter();
  const { slug } = router.query;
  
  const chapterPath = chapterComponents[slug as keyof typeof chapterComponents];
  const title = chapterTitles[slug as keyof typeof chapterTitles];

  if (!chapterPath) {
    return <div>Chapter not found</div>;
  }

  return (
    <>
      <Head>
        <title>{title} - Product Management Guide</title>
        <meta name="description" content={`${title} - Product Management Guide`} />
      </Head>

      <Navbar />
      
      <main className="min-h-screen pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">{title}</h1>
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
      </main>

      <Footer />
    </>
  );
}

interface DynamicImportProps {
  path: string;
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
