import React from 'react';
import { Container } from '../ui/Container';
import { GradientText } from '../ui/GradientText';
import { SocialLinks } from '../ui/SocialLinks';
import { BackgroundText } from '../ui/BackgroundText';
import { ServiceTags } from '../ui/ServiceTags';
import { CallToAction } from '../ui/CallToAction';
import { FeaturedImage } from '../ui/FeaturedImage';
import { ScrollIndicator } from '../ui/ScrollIndicator';
import { companyInfo } from '../../config/company';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-500">
      <BackgroundText />
      
      <Container className="py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none">
              LABOUR
              <br />
              <GradientText>BEAUTIFICATION</GradientText>
              <br />
              WEB
            </h1>
            
            <p className="text-xl text-gray-400 max-w-2xl">
              {companyInfo.description}
            </p>
            
            <ServiceTags />
            <CallToAction />
          </div>

          <FeaturedImage />
        </div>

        <ScrollIndicator />
      </Container>
    </section>
  );
};