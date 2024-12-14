import React from 'react';

export const FeaturedImage = () => (
  <div className="hidden lg:block">
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-green-600/30 rounded-2xl"></div>
      <img
        src="https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?auto=format&fit=crop&q=80"
        alt="Creative workspace"
        className="rounded-2xl w-full object-cover animate-float"
        style={{ height: '600px' }}
      />
    </div>
  </div>
);