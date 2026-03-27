import React, { useEffect, useRef, useState } from 'react';
import { TOOL_GROUPS } from '../data/tools';
import { getToolIcon } from '../data/toolIcons';
import Reveal from './Reveal';

interface ChipProps {
  label: string;
  visible: boolean;
  delay: number;
}

const Chip: React.FC<ChipProps> = ({ label, visible, delay }) => {
  const icon = getToolIcon(label);
  return (
    <div
      className="chip-shimmer flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-bg2 text-[0.73rem] text-muted cursor-default select-none relative overflow-hidden transition-all duration-200 hover:border-accent hover:text-text hover:bg-card hover:-translate-y-[3px]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(10px) scale(0.94)',
        transition: `opacity 0.4s ease ${delay}ms, transform 0.4s ease ${delay}ms, border-color 0.22s, color 0.22s, background 0.22s, box-shadow 0.22s`,
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          '0 6px 20px rgba(168,98,0,.16), 0 0 0 1px rgba(168,98,0,.08)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = '';
      }}
    >
      {icon && (
        <span className="flex-shrink-0 w-4 h-4 flex items-center justify-center">
          {icon}
        </span>
      )}
      {label}
    </div>
  );
};

const ToolGroupRow: React.FC<{ label: string; tools: string[] }> = ({ label, tools }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="mb-8">
      <div className="font-mono-dm text-[0.63rem] text-muted uppercase tracking-[0.16em] mb-3.5 flex items-center gap-3">
        {label}
        <span className="flex-1 h-px bg-border" />
      </div>
      <div className="flex flex-wrap gap-2">
        {tools.map((tool, i) => (
          <Chip key={tool} label={tool} visible={visible} delay={i * 55} />
        ))}
      </div>
    </div>
  );
};

const ToolsSection: React.FC = () => (
  <section className="max-w-[1080px] mx-auto px-10 py-20" id="tools">
    <Reveal>
      <div className="font-mono-dm text-[0.65rem] text-accent tracking-[0.2em] uppercase mb-1">// Tools</div>
      <h2 className="font-fraunces text-[2rem] font-bold tracking-[-0.02em] mb-1 leading-tight">Tech Stack</h2>
      <p className="text-muted text-[0.86rem] mb-9">The full arsenal — hover to explore.</p>
    </Reveal>

    {TOOL_GROUPS.map(group => (
      <ToolGroupRow key={group.label} label={group.label} tools={group.tools} />
    ))}
  </section>
);

export default ToolsSection;
