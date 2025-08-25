import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import heroImage from '@/assets/hero-bg.jpg';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <section className={cn('relative min-h-screen flex items-center overflow-hidden', className)}>
      <div className="absolute inset-0 -z-10">
        <img 
          src={heroImage} 
          alt="Modern venture capital office" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/50"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-20 md:py-32 relative z-10 max-w-4xl">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn delay={200} scale={true}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-white leading-tight mb-6">
              Empowering Visionary Founders
            </h1>
          </FadeIn>
          
          <FadeIn delay={400} direction="up">
            <p className="text-xl md:text-2xl text-white/95 mb-6 font-light">
              We invest in exceptional founders who bring unique perspectives and domain expertise to transform industries.
            </p>
          </FadeIn>

          <FadeIn delay={600} direction="up">
            <p className="text-lg md:text-xl text-white/85 mb-8">
              Backing diverse teams, overlooked talent, and breakthrough innovations across the Baltics and beyond.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;
