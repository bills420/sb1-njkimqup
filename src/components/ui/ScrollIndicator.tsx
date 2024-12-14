import React from 'react';
import { ArrowDown } from 'lucide-react';
import { SocialLinks } from './SocialLinks';

export const ScrollIndicator = () => (
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
    <div className="flex flex-col items-center space-y-4">
      <SocialLinks />
      <ArrowDown className="w-6 h-6 text-white animate-bounce" />
    </div>
  </div>
);