import { useRouter } from 'next/router';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const chapters = {
  'introduction': {
    title: 'Introduction to Product Management',
    content: (
      <>
        <p className="mb-6">
          Product management is the bridge between technical excellence and business success. It's the art of turning complex problems into simple solutions that delight users and drive growth. This guide is designed for technical professionals who are ready to take the next step in their career - from building features to building products.
        </p>
        
        <h2 className="text-3xl font-bold mb-4">Why Product Management?</h2>
        <p className="mb-6">
          As a technical professional, you've mastered the art of solving problems with code. But as you grow in your career, you start to ask bigger questions: What problems should we build? Why does it matter? These are the questions that product managers grapple with every day.
        </p>

        <h2 className="text-3xl font-bold mb-4">What You'll Learn</h2>
        <ul className="list-disc list-inside mb-6">
          <li>How to think like a product manager while maintaining your technical edge</li>
          <li>Strategies for balancing technical excellence with business value</li>
          <li>Techniques for effective user research and validation</li>
          <li>Methods for prioritizing features and managing trade-offs</li>
          <li>Best practices for cross-functional collaboration</li>
        </ul>

        <h2 className="text-3xl font-bold mb-4">How to Use This Guide</h2>
        <p className="mb-6">
          Each chapter builds upon the previous one, starting with foundational concepts and gradually moving into more advanced topics. You can read through sequentially or jump to specific topics that interest you most. The guide includes practical examples, real-world case studies, and actionable frameworks that you can start applying immediately.
        </p>
      </>
    )
  },
  'product-manager-role': {
    title: 'The Product Manager Role',
    content: (
      <>
        <p className="mb-6">
          The product manager role is often misunderstood. It's not just about making decisions or writing requirements. It's a multifaceted role that requires a unique blend of technical, business, and people skills.
        </p>

        <h2 className="text-3xl font-bold mb-4">Key Responsibilities</h2>
        <ul className="list-disc list-inside mb-6">
          <li>Defining and prioritizing product vision and strategy</li>
          <li>Conducting market and user research</li>
          <li>Creating and maintaining product roadmaps</li>
          <li>Working with engineering teams to define technical requirements</li>
          <li>Collaborating with design teams on user experience</li>
          <li>Managing stakeholder relationships and expectations</li>
          <li>Measuring and analyzing product performance</li>
        </ul>

        <h2 className="text-3xl font-bold mb-4">Technical PM vs. General PM</h2>
        <p className="mb-6">
          As a technical professional transitioning to product management, you have a unique advantage. You understand the technical constraints and possibilities better than most. This gives you the ability to:</p>
        <ul className="list-disc list-inside mb-6">
          <li>Make more informed technical trade-offs</li>
          <li>Communicate effectively with engineering teams</li>
          <li>Understand architectural implications of product decisions</li>
          <li>Identify technical opportunities that others might miss</li>
        </ul>

        <h2 className="text-3xl font-bold mb-4">Common Misconceptions</h2>
        <ul className="list-disc list-inside mb-6">
          <li>"Product managers just tell engineers what to build"</li>
          <li>"Product management is easy because you don't write code"</li>
          <li>"Product managers don't need to understand technical details"</li>
        </ul>
      </>
    )
  },
  'code-to-customer': {
    title: 'From Code to Customer',
    content: (
      <>
        <p className="mb-6">
          Transitioning from a technical role to product management means shifting your focus from solving technical problems to solving customer problems. This chapter will help you make that transition smoothly.
        </p>

        <h2 className="text-3xl font-bold mb-4">The Customer-Centric Mindset</h2>
        <p className="mb-6">
          As a technical professional, you're used to thinking in terms of features, bugs, and technical debt. In product management, you need to think in terms of customer needs, business value, and user experience.
        </p>

        <h2 className="text-3xl font-bold mb-4">Key Skills to Develop</h2>
        <ul className="list-disc list-inside mb-6">
          <li>Empathy for different user personas</li>
          <li>User research and validation techniques</li>
          <li>Customer interview skills</li>
          <li>User journey mapping</li>
          <li>Identifying customer pain points</li>
        </ul>

        <h2 className="text-3xl font-bold mb-4">Technical vs. Customer Problems</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">Technical Problems</h3>
            <ul className="list-disc list-inside">
              <li>Performance optimization</li>
              <li>Security vulnerabilities</li>
              <li>Technical debt</li>
              <li>Code maintainability</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Customer Problems</h3>
            <ul className="list-disc list-inside">
              <li>User onboarding friction</li>
              <li>Payment processing issues</li>
              <li>Feature discoverability</li>
              <li>Customer support challenges</li>
            </ul>
          </div>
        </div>
      </>
    )
  },
  'product-toolkit': {
    title: 'The Product Manager\'s Toolkit',
    content: (
      <>
        <p className="mb-6">
          A product manager needs a variety of tools and frameworks to be effective. This chapter introduces the essential tools you'll need in your product management toolkit.
        </p>

        <h2 className="text-3xl font-bold mb-4">Core Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-bold mb-2">User Research</h3>
            <ul className="list-disc list-inside">
              <li>Interview guides</li>
              <li>Survey templates</li>
              <li>User journey maps</li>
              <li>Persona templates</li>
            </ul>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-bold mb-2">Product Planning</h3>
            <ul className="list-disc list-inside">
              <li>Roadmap templates</li>
              <li>Feature prioritization frameworks</li>
              <li>MoSCoW method</li>
              <li>Kano model</li>
            </ul>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-bold mb-2">Metrics & Analytics</h3>
            <ul className="list-disc list-inside">
              <li>Key metrics dashboard</li>
              <li>A/B testing framework</li>
              <li>Funnel analysis</li>
              <li>Retention analysis</li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-4">Technical Tools</h2>
        <p className="mb-6">
          As a technical PM, you'll need to be familiar with both product management tools and technical tools:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">Product Management Tools</h3>
            <ul className="list-disc list-inside">
              <li>Jira/Asana/Trello</li>
              <li>Figma/Miro</li>
              <li>Google Analytics</li>
              <li>Hotjar</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Technical Tools</h3>
            <ul className="list-disc list-inside">
              <li>Github/Gitlab</li>
              <li>Docker/Kubernetes</li>
              <li>Cloud platforms (AWS/GCP/Azure)</li>
              <li>API documentation tools</li>
            </ul>
          </div>
        </div>
      </>
    )
  },
  'product-workflow': {
    title: 'The Product Manager\'s Workflow',
    content: (
      <>
        <p className="mb-6">
          Understanding the product management workflow is crucial for effective product development. This chapter breaks down the end-to-end process.
        </p>

        <h2 className="text-3xl font-bold mb-4">The Product Development Cycle</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-bold mb-2">Discovery Phase</h3>
            <ul className="list-disc list-inside">
              <li>Market research</li>
              <li>User interviews</li>
              <li>Competitive analysis</li>
              <li>Problem definition</li>
            </ul>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-bold mb-2">Planning Phase</h3>
            <ul className="list-disc list-inside">
              <li>Roadmap creation</li>
              <li>Feature prioritization</li>
              <li>Technical scoping</li>
              <li>Resource allocation</li>
            </ul>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-bold mb-2">Execution Phase</h3>
            <ul className="list-disc list-inside">
              <li>Sprint planning</li>
              <li>Daily standups</li>
              <li>Feature development</li>
              <li>Quality assurance</li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-4">Technical Considerations</h2>
        <p className="mb-6">
          As a technical PM, you need to be involved in technical discussions throughout the workflow:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">Architecture Decisions</h3>
            <ul className="list-disc list-inside">
              <li>System design</li>
              <li>Scalability considerations</li>
              <li>Security implications</li>
              <li>Data architecture</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Technical Debt Management</h3>
            <ul className="list-disc list-inside">
              <li>Debt identification</li>
              <li>Priority assessment</li>
              <li>Payment strategy</li>
              <li>Prevention measures</li>
            </ul>
          </div>
        </div>
      </>
    )
  },
  'building-product': {
    title: 'Building a Product',
    content: (
      <>
        <p className="mb-6">
          Building a successful product requires more than just good features. It requires a deep understanding of your users, your market, and your technical capabilities.
        </p>

        <h2 className="text-3xl font-bold mb-4">Product Development Process</h2>
        <ol className="list-decimal list-inside mb-8">
          <li>
            <h3 className="font-bold">Problem Validation</h3>
            <p className="ml-4">Ensure you're solving a real problem for real users</p>
          </li>
          <li>
            <h3 className="font-bold">Solution Design</h3>
            <p className="ml-4">Create a minimum viable product (MVP) that delivers value</p>
          </li>
          <li>
            <h3 className="font-bold">Technical Implementation</h3>
            <p className="ml-4">Build with scalability and maintainability in mind</p>
          </li>
          <li>
            <h3 className="font-bold">Launch and Iterate</h3>
            <p className="ml-4">Gather feedback and make continuous improvements</p>
          </li>
        </ol>

        <h2 className="text-3xl font-bold mb-4">Key Considerations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">Technical Architecture</h3>
            <ul className="list-disc list-inside">
              <li>Scalability planning</li>
              <li>Security architecture</li>
              <li>Data management</li>
              <li>API design</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">User Experience</h3>
            <ul className="list-disc list-inside">
              <li>Intuitive interfaces</li>
              <li>Performance optimization</li>
              <li>Accessibility considerations</li>
              <li>Mobile responsiveness</li>
            </ul>
          </div>
        </div>
      </>
    )
  },
  'building-team': {
    title: 'Building a Product Team',
    content: (
      <>
        <p className="mb-6">
          A great product requires a great team. This chapter covers how to build and lead a high-performing product team.
        </p>

        <h2 className="text-3xl font-bold mb-4">Team Structure</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-bold mb-2">Core Roles</h3>
            <ul className="list-disc list-inside">
              <li>Product Manager</li>
              <li>Engineering Lead</li>
              <li>Design Lead</li>
              <li>QA Lead</li>
            </ul>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-bold mb-2">Technical Roles</h3>
            <ul className="list-disc list-inside">
              <li>Backend Engineers</li>
              <li>Frontend Engineers</li>
              <li>DevOps Engineers</li>
              <li>QA Engineers</li>
            </ul>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-bold mb-2">Support Roles</h3>
            <ul className="list-disc list-inside">
              <li>Data Engineers</li>
              <li>Security Engineers</li>
              <li>Site Reliability Engineers</li>
              <li>Infrastructure Engineers</li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-4">Team Dynamics</h2>
        <p className="mb-6">
          As a technical PM, you play a crucial role in team dynamics:
        </p>
        <ul className="list-disc list-inside mb-8">
          <li>Bridge between technical and non-technical team members</li>
          <li>Facilitate technical discussions</li>
          <li>Help resolve technical disagreements</li>
          <li>Ensure technical feasibility of product decisions</li>
        </ul>
      </>
    )
  },
  'building-teams': {
    title: 'Building Product Teams',
    content: (
      <>
        <p className="mb-6">
          Scaling your product organization requires careful planning and execution. This chapter covers how to build multiple product teams that work effectively together.
        </p>

        <h2 className="text-3xl font-bold mb-4">Team Organization Models</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">Feature Teams</h3>
            <ul className="list-disc list-inside">
              <li>Organized around product features</li>
              <li>Full-stack ownership</li>
              <li>Independent deployment</li>
              <li>Clear ownership boundaries</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Component Teams</h3>
            <ul className="list-disc list-inside">
              <li>Organized around technical components</li>
              <li>Shared ownership</li>
              <li>API-based integration</li>
              <li>Technical expertise focus</li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-4">Technical Considerations</h2>
        <p className="mb-6">
          When building multiple teams, consider these technical aspects:
        </p>
        <ul className="list-disc list-inside mb-8">
          <li>API contract management</li>
          <li>Shared infrastructure services</li>
          <li>Consistent deployment practices</li>
          <li>Centralized monitoring and logging</li>
        </ul>
      </>
    )
  },
  'conclusion': {
    title: 'Conclusion',
    content: (
      <>
        <p className="mb-6">
          Congratulations on completing this guide! You now have a solid foundation in product management, with a particular focus on the technical aspects that make you uniquely qualified as a technical product manager.
        </p>

        <h2 className="text-3xl font-bold mb-4">Key Takeaways</h2>
        <ul className="list-disc list-inside mb-8">
          <li>Product management is about solving customer problems, not just building features</li>
          <li>Your technical background gives you a unique advantage in product decisions</li>
          <li>Effective communication is key to bridging technical and non-technical worlds</li>
          <li>Continuous learning is essential in both technical and product domains</li>
          <li>Success comes from balancing technical excellence with business value</li>
        </ul>

        <h2 className="text-3xl font-bold mb-4">Next Steps</h2>
        <p className="mb-6">
          Now that you've completed this guide, here's what you can do next:</p>
        <ul className="list-disc list-inside mb-8">
          <li>Start practicing product management in your current role</li>
          <li>Seek out opportunities to lead small product initiatives</li>
          <li>Join product management communities and networks</li>
          <li>Continue learning about both technical and product topics</li>
          <li>Build your own product management portfolio</li>
        </ul>

        <p className="mb-6">
          Remember, product management is a journey, not a destination. Keep learning, keep growing, and most importantly, keep building products that make a difference.
        </p>
      </>
    )
  }
};

export default function Chapter() {
  const router = useRouter();
  const { slug } = router.query;
  
  const chapter = chapters[slug as keyof typeof chapters];

  if (!chapter) {
    return <div>Chapter not found</div>;
  }

  return (
    <>
      <Head>
        <title>{chapter.title} - Product Management Guide</title>
        <meta name="description" content={`${chapter.title} - Product Management Guide`} />
      </Head>

      <Navbar />
      
      <main className="min-h-screen pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">{chapter.title}</h1>
          <div className="prose max-w-none">
            {chapter.content}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: Object.keys(chapters).map((slug) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  return {
    props: {},
  };
}
