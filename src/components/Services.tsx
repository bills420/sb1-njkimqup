import React from 'react';
import { Code2, Palette, Rocket, Smartphone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Building responsive and performant web applications using modern technologies.'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user interfaces with great user experience.'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile-First',
      description: 'Ensuring your website looks and works great on all devices.'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Performance',
      description: 'Optimizing for speed and efficiency to provide the best user experience.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-purple-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;