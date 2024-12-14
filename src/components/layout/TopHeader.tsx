import React from 'react';
import { Mail } from 'lucide-react';
import { Container } from '../ui/Container';
import { contactInfo } from '../../config/contact';

export const TopHeader = () => {
  return (
    <div className="bg-dark-600 py-2 text-gray-400 text-sm border-b border-gray-800/10">
      <Container>
        <div className="flex justify-end items-center">
          <a 
            href={`mailto:${contactInfo.email}`}
            className="flex items-center space-x-2 hover:text-teal-400 transition-colors"
          >
            <Mail size={14} />
            <span>{contactInfo.email}</span>
          </a>
        </div>
      </Container>
    </div>
  );
};