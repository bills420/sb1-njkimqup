import React from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              John Doe
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#home" className="hover:text-purple-600 transition-colors">Home</a>
              <a href="#about" className="hover:text-purple-600 transition-colors">About</a>
              <a href="#services" className="hover:text-purple-600 transition-colors">Services</a>
              <a href="#contact" className="hover:text-purple-600 transition-colors">Contact</a>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#home" className="block px-3 py-2 hover:text-purple-600">Home</a>
            <a href="#about" className="block px-3 py-2 hover:text-purple-600">About</a>
            <a href="#services" className="block px-3 py-2 hover:text-purple-600">Services</a>
            <a href="#contact" className="block px-3 py-2 hover:text-purple-600">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;