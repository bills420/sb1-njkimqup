import React from 'react';
import { Code2, Music2 } from 'lucide-react';

export const ServiceTags = () => (
  <div className="flex flex-wrap gap-4">
    <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10">
      <Code2 className="w-5 h-5 text-teal-400" />
      <span className="text-white">Web Development</span>
    </div>
    <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10">
      <Music2 className="w-5 h-5 text-teal-400" />
      <span className="text-white">Music Production</span>
    </div>
  </div>
);