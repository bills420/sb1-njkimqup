import React from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Container } from '../ui/Container';
import { GradientText } from '../ui/GradientText';
import { useDarkMode } from '../../hooks/useDarkMode';
import { companyInfo } from '../../config/company';
import { NavLinks } from '../ui/NavLinks';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isDark, setIsDark] = useDarkMode();

  return (
    <nav className="fixed w-full backdrop-blur-sm z-50 border-b border-gray-800/10 dark:border-white/10 bg-white/80 dark:bg-gray-900/80">
      <Container>
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <GradientText className="text-2xl font-black">
              {companyInfo.name}
            </GradientText>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 text-gray-800 dark:text-gray-200"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-800 dark:text-gray-200">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </Container>

      {isOpen && (
        <div className="md:hidden border-t border-gray-800/10 dark:border-white/10 bg-white dark:bg-gray-900">
          <Container>
            <div className="py-3 space-y-1">
              <NavLinks mobile />
            </div>
          </Container>
        </div>
      )}
    </nav>
  );
};