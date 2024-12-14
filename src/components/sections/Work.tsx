import React from 'react';
import { Container } from '../ui/Container';
import { Music, Code } from 'lucide-react';

export const Work = () => {
  return (
    <section id="work" className="py-20 bg-white dark:bg-gray-900">
      <Container>
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">Featured Work</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          A showcase of my latest projects in both development and music production.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Development Projects */}
          <div className="space-y-8">
            <div className="flex items-center space-x-2 mb-6">
              <Code className="w-6 h-6 text-purple-600" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Development</h3>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">E-Commerce Platform</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Full-stack e-commerce solution with React and Node.js</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-full text-sm">MongoDB</span>
              </div>
            </div>
          </div>

          {/* Music Projects */}
          <div className="space-y-8">
            <div className="flex items-center space-x-2 mb-6">
              <Music className="w-6 h-6 text-purple-600" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Music</h3>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Summer Vibes EP</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Electronic/Pop production featuring live instruments</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-full text-sm">Production</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-full text-sm">Mixing</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-full text-sm">Mastering</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};