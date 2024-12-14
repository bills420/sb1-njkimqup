import { Code2, Music2, Mic2, Radio, Globe2, Palette, Laptop, HeadphonesIcon } from 'lucide-react';
import { Service } from '../types';

export const services: Service[] = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: 'Web Development',
    description: 'Building modern, responsive web applications with cutting-edge technologies.'
  },
  {
    icon: <Music2 className="w-8 h-8" />,
    title: 'Music Production',
    description: 'Creating professional-grade music productions with industry-standard tools.'
  },
  {
    icon: <Mic2 className="w-8 h-8" />,
    title: 'Audio Engineering',
    description: 'Professional mixing and mastering services for pristine sound quality.'
  },
  {
    icon: <Globe2 className="w-8 h-8" />,
    title: 'Full-Stack Development',
    description: 'End-to-end web solutions from backend architecture to frontend design.'
  },
  {
    icon: <Radio className="w-8 h-8" />,
    title: 'Beat Making',
    description: 'Crafting unique beats and instrumentals across various genres.'
  },
  {
    icon: <HeadphonesIcon className="w-8 h-8" />,
    title: 'Sound Design',
    description: 'Creating custom sound effects and audio experiences for digital media.'
  }
];