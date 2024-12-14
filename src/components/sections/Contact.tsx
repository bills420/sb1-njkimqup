import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Container } from '../ui/Container';
import { contactInfo } from '../../config/contact';

export const Contact = () => {
  const { location, email, ccEmail, phone } = contactInfo;
  
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form 
              className="space-y-6" 
              action={`mailto:${email}?cc=${ccEmail}`} 
              method="post" 
              encType="text/plain"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-800 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-800 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-800 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-2 px-4 rounded-md hover:from-blue-600 hover:to-green-600 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-teal-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold dark:text-white">Location</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {location.street}, {location.city}, {location.zipCode}
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-teal-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold dark:text-white">Email</h3>
                <p className="text-gray-600 dark:text-gray-400">{email}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-teal-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold dark:text-white">Phone</h3>
                <p className="text-gray-600 dark:text-gray-400">{phone}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};