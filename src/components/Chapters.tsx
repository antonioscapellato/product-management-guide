// HeroUI
import { Button, Link } from '@heroui/react';

const categories = [
  {
    title: "Foundations",
    chapters: [
      { 
        title: 'Introduction to Product Management', 
        slug: '01-introduction-to-product-manager',
        description: 'Learn the fundamentals of product management and the role of a product manager in modern organizations.'
      },
      { 
        title: 'Essential Marketing Concepts for Product Managers', 
        slug: '02-essential-marketing-concept',
        description: 'Master key marketing principles that every product manager needs to understand for successful product launches.'
      },
      { 
        title: 'Customer Discovery and Research Methods', 
        slug: '03-customer-discovery',
        description: 'Explore effective techniques for understanding customer needs and validating product ideas.'
      },
      { 
        title: 'Product Vision and Strategy Development', 
        slug: '04-product-vision-and-strategy',
        description: 'Develop compelling product visions and create strategies that align with business objectives.'
      }
    ]
  },
  {
    title: "Execution",
    chapters: [
      { 
        title: 'Prioritization Frameworks and Decision Making', 
        slug: '05-frameworks-and-decision-making',
        description: 'Learn proven frameworks for making data-driven decisions and prioritizing product features.'
      },
      { 
        title: 'Product Roadmapping and Planning', 
        slug: '06-product-roadmap',
        description: 'Create effective product roadmaps that balance short-term goals with long-term vision.'
      },
      { 
        title: 'Agile Methodologies and Product Development', 
        slug: '07-agile-methodologies',
        description: 'Understand agile principles and how to implement them in product development processes.'
      },
      { 
        title: 'Cross-Functional Collaboration and Communication', 
        slug: '08-coss-functional-collaboration',
        description: 'Develop skills to work effectively with different teams and stakeholders across the organization.'
      }
    ]
  },
  {
    title: "Growth & Analytics",
    chapters: [
      { 
        title: 'Metrics, Analytics, and Data-Driven Decision Making', 
        slug: '09-metrics-analytics-data',
        description: 'Learn to use data and analytics to measure product success and inform decision-making.'
      },
      { 
        title: 'Growth Strategies and User Acquisition', 
        slug: '10-growth-strategies',
        description: 'Explore effective strategies for growing your product and acquiring new users.'
      },
      { 
        title: 'Product Metrics and Success Frameworks', 
        slug: '11-product-metrics',
        description: 'Master key product metrics and frameworks to measure and drive product success.'
      },
      { 
        title: 'Product Positioning and Launch Strategy', 
        slug: '12-product-launch',
        description: 'Develop effective product positioning and create successful launch strategies.'
      }
    ]
  },
  {
    title: "Career Development",
    chapters: [
      { 
        title: 'Stakeholder Management and Communication Skills', 
        slug: '13-communication-skills',
        description: 'Enhance your ability to manage stakeholders and communicate effectively across all levels.'
      },
      { 
        title: 'Career Development and Personal Branding', 
        slug: '14-career-development',
        description: 'Build your personal brand and develop strategies for career growth in product management.'
      },
      { 
        title: 'Product Design and Technical Skills', 
        slug: '15-product-design',
        description: 'Gain essential technical knowledge and design principles for effective product development.'
      },
      { 
        title: 'Career Advancement and Continuous Learning', 
        slug: '16-continuous-learning',
        description: 'Develop strategies for continuous learning and advancement in your product management career.'
      }
    ]
  }
];

export default function Chapters() {
  return (
    <div className="px-4 max-w-7xl mx-auto pt-16 pb-12">
      <div className="mb-12">
        <div className="flex flex-wrap gap-4">
            <Button 
              key={"Product Mastery"} 
              className="px-8 bg-transparent border border-default-100 font-extralight text-lg text-default-600"
              radius={"full"}
            >
              Product Mastery
            </Button>
          {categories.map((category, index) => (
            <Button 
              key={category.title} 
              className="px-8 bg-transparent border border-default-100 font-extralight text-lg text-default-600"
              radius={"full"}
            >
              {category.title}
            </Button>
          ))}
        </div>
      </div>
      <div className="space-y-12">
        {categories.map((category, categoryIndex) => (
          <div 
            key={category.title} 
            className={`space-y-6 p-6 rounded-lg shadow-xl ${
              categoryIndex === 0 ? 'bg-gradient-to-br from-indigo-900 to-indigo-800 shadow-indigo-900/40' :
              categoryIndex === 1 ? 'bg-gradient-to-br from-indigo-800 to-indigo-700 shadow-indigo-800/40' :
              categoryIndex === 2 ? 'bg-gradient-to-br from-violet-700 to-violet-600 shadow-violet-700/40' : 
              'bg-gradient-to-br from-purple-600 to-purple-500 shadow-purple-600/40'
            }`}
          >
            <h3 className="text-2xl text-white pl-2">{category.title}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6">
              {category.chapters.map((chapter, index) => (
                <Button
                  as={Link}
                  key={chapter.slug}
                  href={`/chapters/${chapter.slug}`}
                  className="w-full h-96 md:h-64 bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-4 overflow-hidden text-left backdrop-blur-sm"
                >
                  <div className="w-full h-full flex flex-col items-start justify-start overflow-hidden">
                    <span className="text-4xl text-white/80 mb-3">
                      {String(categoryIndex * 4 + index + 1).padStart(2, '0')}
                    </span>
                    <div className="w-full flex-1 overflow-hidden flex flex-col">
                      <h3 className="text-lg font-light leading-6 break-words whitespace-normal w-full text-white">
                        {chapter.title}
                      </h3>
                      <p className="text-sm font-thin text-white/70 leading-5 break-words whitespace-normal w-full mt-2">
                        {chapter.description}
                      </p>
                    </div>
                  </div>
                </Button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
