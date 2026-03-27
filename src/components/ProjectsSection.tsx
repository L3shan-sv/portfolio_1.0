import React, { useState } from 'react';
import { PROJECTS } from '../data/projects';
import type { Project } from '../types';
import Reveal from './Reveal';
import ProjectModal from './ProjectModal';

const ProjectCard: React.FC<{ id: string; project: Project; delay: number; onClick: () => void }> = ({ project, delay, onClick }) => (
  <Reveal delay={delay}>
    <div
      onClick={onClick}
      className="bg-card border border-border rounded-[10px] cursor-pointer transition-all duration-200 relative overflow-hidden group hover:border-accent hover:-translate-y-1 card-accent"
      style={{ boxShadow: 'none' }}
      onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 20px rgba(0,0,0,.12), 0 12px 48px rgba(0,0,0,.10)'; }}
      onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'; }}
    >
      {/* Thumbnail */}
      <div className="w-full h-[130px] overflow-hidden bg-bg3 relative">
        <img
          src={project.images[0]?.src ?? 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&q=80'}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(13,8,2,0.7)] pointer-events-none" />
      </div>

      {/* Body */}
      <div className="p-4 pb-5">
        <div className="flex justify-between items-start mb-2.5">
          <span className="text-[1.4rem] leading-none">{project.icon}</span>
          <span className="font-mono-dm text-[0.57rem] px-2 py-0.5 rounded-full bg-[rgba(168,98,0,0.12)] border border-[rgba(168,98,0,0.22)] text-accent">{project.cat}</span>
        </div>
        <div className="font-fraunces text-[0.92rem] font-semibold mb-1.5 leading-snug">{project.title}</div>
        <div className="text-[0.77rem] text-muted leading-[1.65] mb-3">{project.desc}</div>
        <div className="flex flex-wrap gap-1">
          {project.stack.slice(0, 5).map(t => (
            <span key={t} className="font-mono-dm text-[0.56rem] px-1.5 py-0.5 rounded bg-bg3 border border-border text-muted">{t}</span>
          ))}
        </div>
      </div>
    </div>
  </Reveal>
);

const ProjectsSection: React.FC = () => {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  return (
    <>
      <section className="max-w-[1080px] mx-auto px-10 py-20" id="projects">
        <Reveal>
          <div className="font-mono-dm text-[0.65rem] text-accent tracking-[0.2em] uppercase mb-1">// Projects</div>
          <h2 className="font-fraunces text-[2rem] font-bold tracking-[-0.02em] mb-1 leading-tight">Featured Work</h2>
          <p className="text-muted text-[0.86rem] mb-11">Click any card — explore description, documentation, and images.</p>
        </Reveal>

        <div className="grid grid-cols-3 gap-4">
          {Object.entries(PROJECTS).map(([id, project], idx) => (
            <ProjectCard
              key={id}
              id={id}
              project={project}
              delay={idx * 65}
              onClick={() => setActiveProject(id)}
            />
          ))}
        </div>
      </section>

      {activeProject && (
        <ProjectModal
          project={PROJECTS[activeProject]}
          onClose={() => setActiveProject(null)}
        />
      )}
    </>
  );
};

export default ProjectsSection;
