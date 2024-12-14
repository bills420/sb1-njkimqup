import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80"
              alt="Workspace"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-gray-600 mb-6">
              I'm a passionate developer with a keen eye for design and a love for creating
              beautiful, functional websites. With years of experience in web development,
              I specialize in building modern web applications that deliver exceptional
              user experiences.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Skills</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>React.js</li>
                  <li>TypeScript</li>
                  <li>Node.js</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Interests</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>UI/UX Design</li>
                  <li>Web Animation</li>
                  <li>Performance</li>
                  <li>Accessibility</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;