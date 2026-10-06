import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-100 mb-8 border-l-4 border-cyan-500 pl-4">
          About Me
        </h2>

        <div className="max-w-3xl space-y-4 text-slate-300 leading-relaxed">
          <p>
            Software Engineering undergraduate specializing in full-stack application development and spatial GIS mapping platforms.
          </p>
          <p>
            I build web products using modern JavaScript/TypeScript ecosystems, state management architectures, and relational SQL backends.
          </p>
          <p>
            I am passionate about solving real-world problems through clean interfaces, scalable systems, and data-driven user experiences.
          </p>
        </div>
      </div>
    </section>
  );
};