import React from 'react';
import { TopHeader } from './components/layout/TopHeader';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { Work } from './components/sections/Work';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <TopHeader />
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <Contact />
    </div>
  );
}

export default App;