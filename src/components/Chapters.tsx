import Link from 'next/link';

const chapters = [
  { title: 'Introduction to Product Management', slug: 'introduction' },
  { title: 'The Product Manager Role', slug: 'product-manager-role' },
  { title: 'From Code to Customer', slug: 'code-to-customer' },
  { title: 'The Product Manager\'s Toolkit', slug: 'product-toolkit' },
  { title: 'The Product Manager\'s Workflow', slug: 'product-workflow' },
  { title: 'Building a Product', slug: 'building-product' },
  { title: 'Building a Product Team', slug: 'building-team' },
  { title: 'Conclusion & Resources', slug: 'conclusion' }
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
