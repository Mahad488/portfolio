import React from 'react';
import { projectsData } from '../data/projects';
import { ExternalLink, GitBranch } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-100 mb-12 border-l-4 border-cyan-500 pl-4">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-up flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 group hover:border-cyan-500/40 transition-all duration-300"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="relative h-48 overflow-hidden bg-slate-800">
                <div className="absolute inset-0 bg-linear-to-tr from-cyan-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800';
                  }}
                />
              </div>

              <div className="flex flex-1 flex-col justify-between space-y-4 p-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-100">{project.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-400">{project.description}</p>
                </div>

                <div>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="rounded-md bg-slate-800 px-2 py-1 text-xs text-slate-300 transition-colors duration-200 hover:bg-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 border-t border-slate-800 pt-2">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs text-slate-400 transition-colors duration-200 hover:text-cyan-400">
                        <GitBranch size={14} /> Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs text-slate-400 transition-colors duration-200 hover:text-cyan-400">
                        <ExternalLink size={14} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};