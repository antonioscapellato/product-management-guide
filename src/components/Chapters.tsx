import Link from 'next/link';

const chapters = [
  { title: 'Introduction to Product Management', slug: '01-introduction-to-product-manager' },
  { title: 'Essential Marketing Concepts for Product Managers', slug: '02-essential-marketing-concept' },
  { title: 'Customer Discovery and Research Methods', slug: '03-customer-discovery' },
  { title: 'Product Vision and Strategy Development', slug: '04-product-vision-and-strategy' },
  { title: 'Prioritization Frameworks and Decision Making', slug: '05-frameworks-and-decision-making' },
  { title: 'Product Roadmapping and Planning', slug: '06-product-roadmap' },
  { title: 'Agile Methodologies and Product Development', slug: '07-agile-methodologies' },
  { title: 'Cross-Functional Collaboration and Communication', slug: '08-coss-functional-collaboration' },
  { title: 'Metrics, Analytics, and Data-Driven Decision Making', slug: '09-metrics-analytics-data' },
  { title: 'Growth Strategies and User Acquisition', slug: '10-growth-strategies' },
  { title: 'Product Metrics and Success Frameworks', slug: '11-product-metrics' },
  { title: 'Product Positioning and Launch Strategy', slug: '12-product-launch' },
  { title: 'Stakeholder Management and Communication Skills', slug: '13-communication-skills' },
  { title: 'Career Development and Personal Branding', slug: '14-career-development' },
  { title: 'Product Design and Technical Skills', slug: '15-product-design' },
  { title: 'Career Advancement and Continuous Learning', slug: '16-continuous-learning' }
];

export default function Chapters() {
  return (
    <div className="px-4 max-w-2xl mx-auto py-12">
      <h2 className="text-2xl font-bold mb-8">Chapters</h2>
      <div className="space-y-4">
        {chapters.map((chapter, index) => (
          <Link
            key={chapter.slug}
            href={`/chapters/${chapter.slug}`}
            className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center">
              <span className="text-gray-500 mr-4">{String(index + 1).padStart(2, '0')}</span>
              <span className="font-medium">{chapter.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
