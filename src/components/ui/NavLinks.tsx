import React from 'react';
import { navigationLinks } from '../../config/navigation';

interface NavLinksProps {
  mobile?: boolean;
}

export const NavLinks: React.FC<NavLinksProps> = ({ mobile = false }) => {
  const baseStyles = "text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors";
  const mobileStyles = "block py-2";
  const className = mobile ? `${baseStyles} ${mobileStyles}` : baseStyles;

  return (
    <>
      {navigationLinks.map((link, index) => (
        <a key={index} href={link.href} className={className}>
          {link.label}
        </a>
      ))}
    </>
  );
};