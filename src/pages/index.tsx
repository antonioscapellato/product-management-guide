//NextJS
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Product Management Guide</title>
        <meta name="description" content="A comprehensive guide for product management best practices and methodologies" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Product Management Guide" />
        <meta property="og:description" content="A comprehensive guide for product management best practices and methodologies" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <div className="mt-36 mb-36 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Product Management Guide</h1>
        <h2 className="mt-2 text-2xl">A Technical Guide for Technical People Switching to Product</h2>
        <p className="mt-12 text-lg font-light max-w-2xl">
          You’ve been deep in the code. Scaling systems, shipping features, solving tough problems with clean logic. But now you’re looking up and asking bigger questions:
          <br/>
          What should we build next? 
          <br/>
          Why does it matter? 
          <br/><br/>

          That’s where product management comes in. 
          <br/><br/>

          This guide is for engineers, designers, data people — anyone technical — who’s starting to feel the pull toward product. Not because you’re done with tech, but because you want to be part of what gets built, not just how it gets built.
          <br/><br/>

          Product is messy. It’s less about clean solutions and more about customer problems, business tradeoffs, and figuring out what will actually move the needle. You’ll go from debugging code to debugging user behavior. From writing specs to shaping stories. From thinking in systems to thinking in outcomes.
          <br/><br/>
          Here’s what you’ll get in this guide:
          <br/><br/>
          How to shift your mindset from output to impact
          <br/><br/>
          Ways to talk to users and actually hear what they need
          <br/><br/>
          How to work with non-technical teams without sounding like a robot
          <br/><br/>
          Making tradeoffs between value, complexity, and speed
          <br/><br/>
          Writing roadmaps and specs that don’t get ignored
          <br/><br/>
          You’ve already got the hardest part: the builder’s brain. Now it’s about learning how to apply it differently — to real users, real problems, and real outcomes.
          <br/><br/>
          This is your jumpstart into product, minus the fluff.
          <br/><br/>
          Let’s dive in.        
        </p>
        </div>
      </main>
    </>
  );
}
