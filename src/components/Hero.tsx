import React from 'react';


//HeroUI
import { Button, Image } from "@heroui/react";

const Hero: React.FC = () => {
  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">

            <div className={"mb-6 w-full flex items-center slign-center justify-center"}>
                <Image
                    src={"/logo.png"}
                    className={"h-24 w-24"}
                    radius={"lg"}
                />
            </div>

            <h1 className="tracking-tight font-medium text-default-900 text-4xl md:text-6xl">
                <span className="block">Product Mastery</span>
                <span className="block font-light text-2xl md:text-3xl mt-2">Building Products People Love.</span>
            </h1>
            
            <p className="mt-6 max-w-2xl mx-auto text-xl text-default-500">
                From code to customer impact. A comprehensive guide for technical professionals 
                transitioning into product management.
            </p>

            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                
                <div className="h-96 relative p-6 rounded-lg border border-default-100 overflow-hidden flex flex-col justify-end">
                    <div className="absolute inset-0">
                        <Image
                            src="/business.png"
                            alt="Business icon"
                            className="object-cover"
                        />
                    </div>
                    <div className="relative z-10 bg-black/50 p-4 rounded-lg">
                        <h3 className="text-left text-2xl font-semibold text-white">Business</h3>
                        <p className="text-left mt-2 text-white/90">Master market analysis, business strategy, and metrics to drive product success and growth</p>
                    </div>
                </div>
                <div className="h-96 relative p-6 rounded-lg border border-default-100 overflow-hidden flex flex-col justify-end">
                <div className="absolute inset-0">
                    <Image
                        src="/technology.png"
                        alt="Technology icon"
                        className="object-cover"
                    />
                </div>
                <div className="relative z-10 bg-black/50 p-4 rounded-lg">
                    <h3 className="text-left text-2xl font-semibold text-white">Tech</h3>
                    <p className="text-left mt-2 text-white/90">Bridge the gap between business and engineering with effective technical decision-making</p>
                </div>
                </div>
                <div className="h-96 relative p-6 rounded-lg border border-default-100 overflow-hidden flex flex-col justify-end">
                <div className="absolute inset-0">
                    <Image
                        src="/design.png"
                        alt="Design icon"
                        className="object-cover"
                    />
                </div>
                <div className="relative z-10 bg-black/50 p-4 rounded-lg">
                    <h3 className="text-left text-2xl font-semibold text-white">Design</h3>
                    <p className="text-left mt-2 text-white/90">Create user-centered solutions through research, prototyping, and iterative design</p>
                </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
