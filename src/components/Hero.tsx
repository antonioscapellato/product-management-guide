import React from 'react';
import Image from 'next/image';

//HeroUI
import { Button } from "@heroui/react";

const Hero: React.FC = () => {
  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <h1 className="tracking-tight font-medium text-default-900 text-4xl md:text-6xl">
            <span className="block">Product Mastery</span>
            <span className="block font-light text-2xl md:text-3xl mt-2">Building Products People Love.</span>
          </h1>
          
          <p className="mt-6 max-w-2xl mx-auto text-xl text-default-500">
            From code to customer impact. A comprehensive guide for technical professionals 
            transitioning into product management.
          </p>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative bg-white p-6 rounded-lg border border-default-100 overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  src="/logo.png"
                  alt="Business icon"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative z-10">
                <h3 className="text-lg font-semibold text-default-900">Business</h3>
                <p className="mt-2 text-default-600">Master market analysis, business strategy, and metrics to drive product success and growth</p>
              </div>
            </div>
            <div className="relative bg-white p-6 rounded-lg border border-default-100 overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  src="/logo.png"
                  alt="Technology icon"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative z-10">
                <h3 className="text-lg font-semibold text-default-900">Tech</h3>
                <p className="mt-2 text-default-600">Bridge the gap between business and engineering with effective technical decision-making</p>
              </div>
            </div>
            <div className="relative bg-white p-6 rounded-lg border border-default-100 overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  src="/logo.png"
                  alt="Design icon"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative z-10">
                <h3 className="text-lg font-semibold text-default-900">Design</h3>
                <p className="mt-2 text-default-600">Create user-centered solutions through research, prototyping, and iterative design</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
