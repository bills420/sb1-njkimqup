import React from 'react';
import { socialLinks } from '../../config/social';

export const SocialLinks: React.FC = () => {
  return (
    <div className="flex justify-center space-x-6">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          aria-label={link.label}
          className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all hover:scale-110"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};