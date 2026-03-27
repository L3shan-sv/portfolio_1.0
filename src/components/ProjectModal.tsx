import React, { useState, useEffect } from 'react';
import type { Project, ProjectImage } from '../types';

interface LightboxProps {
  images: ProjectImage[];
  startIdx: number;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ images, startIdx, onClose }) => {
  const [idx, setIdx] = useState(startIdx);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') setIdx(i => (i - 1 + images.length) % images.length);
      if (e.key === 'ArrowRight') setIdx(i => (i + 1) % images.length);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [images.length, onClose]);

  return (
    <div
      className="fixed inset-0 bg-black/93 z-[400] flex items-center justify-center"
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-6 bg-white/10 border border-white/20 text-white w-[34px] h-[34px] rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
      >✕</button>
      {images.length > 1 && (
        <span className="absolute top-6 left-1/2 -translate-x-1/2 font-mono-dm text-[0.63rem] text-white/35">
          {idx + 1} / {images.length}
        </span>
      )}
      {images.length > 1 && (
        <button
          onClick={() => setIdx(i => (i - 1 + images.length) % images.length)}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 border border-white/20 text-white w-10 h-10 rounded-lg flex items-center justify-center text-xl hover:bg-white/20 transition-colors"
        >‹</button>
      )}
      <div className="relative">
        <img
          src={images[idx].src}
          alt={images[idx].caption}
          className="max-w-[90vw] max-h-[85vh] object-contain rounded-md block"
        />
        {images[idx].caption && (
          <div className="absolute -bottom-7 left-0 right-0 text-center font-mono-dm text-[0.63rem] text-white/40">
            {images[idx].caption}
          </div>
        )}
      </div>
      {images.length > 1 && (
        <button
          onClick={() => setIdx(i => (i + 1) % images.length)}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 border border-white/20 text-white w-10 h-10 rounded-lg flex items-center justify-center text-xl hover:bg-white/20 transition-colors"
        >›</button>
      )}
    </div>
  );
};

type TabKey = 'desc' | 'docs' | 'imgs';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<TabKey>('desc');
  const [lbIdx, setLbIdx] = useState<number | null>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape' && lbIdx === null) onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose, lbIdx]);

  useEffect(() => { document.body.style.overflow = 'hidden'; return () => { document.body.style.overflow = ''; }; }, []);

  const tabs: { key: TabKey; label: string }[] = [
    { key: 'desc', label: 'Description' },
    { key: 'docs', label: 'Documentation' },
    { key: 'imgs', label: `Images${project.images.length ? ` (${project.images.length})` : ''}` },
  ];

  return (
    <>
      <div
        className="fixed inset-0 bg-[rgba(18,14,8,0.65)] backdrop-blur-[5px] z-[200] flex items-center justify-center p-6"
        onClick={e => { if (e.target === e.currentTarget) onClose(); }}
      >
        <div className="bg-bg border border-border rounded-[14px] max-w-[720px] w-full max-h-[90vh] overflow-hidden flex flex-col"
          style={{ boxShadow: '0 4px 20px rgba(0,0,0,.12), 0 12px 48px rgba(0,0,0,.10)' }}>

          {/* Header */}
          <div className="px-6 pt-5 pb-4 border-b border-border flex justify-between items-start gap-4 flex-shrink-0">
            <div className="flex gap-4 items-start flex-1">
              <span className="text-[2rem] leading-none">{project.icon}</span>
              <div>
                <div className="font-fraunces text-[1.08rem] font-semibold leading-snug mb-0.5">{project.title}</div>
                <div className="font-mono-dm text-[0.6rem] text-accent">{project.cat}</div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="bg-bg2 border border-border text-muted w-[30px] h-[30px] rounded-md flex items-center justify-center text-[0.9rem] flex-shrink-0 hover:bg-bg3 hover:text-text transition-colors"
            >✕</button>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-border px-6 flex-shrink-0 overflow-x-auto">
            {tabs.map(t => (
              <button
                key={t.key}
                onClick={() => setActiveTab(t.key)}
                className={`px-4 py-2.5 text-[0.78rem] font-medium border-b-2 -mb-px cursor-pointer transition-all whitespace-nowrap font-sans ${
                  activeTab === t.key
                    ? 'text-accent border-accent'
                    : 'text-muted border-transparent hover:text-text'
                }`}
              >{t.label}</button>
            ))}
          </div>

          {/* Content */}
          <div className="overflow-y-auto flex-1 modal-scroll">
            {/* Description tab */}
            {activeTab === 'desc' && (
              <div className="p-5">
                <Section title="Purpose"><p className="text-[0.83rem] text-muted leading-[1.78]">{project.purpose}</p></Section>
                <Section title="Overview"><p className="text-[0.83rem] text-muted leading-[1.78]">{project.desc}</p></Section>
                <Section title="What was built">
                  <ul className="list-none flex flex-col gap-2">
                    {project.features.map((f, i) => (
                      <li key={i} className="text-[0.81rem] text-muted pl-4 relative leading-relaxed before:content-['▸'] before:absolute before:left-0 before:text-accent before:text-[0.68rem]">{f}</li>
                    ))}
                  </ul>
                </Section>
                <Section title="Stack">
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((s, i) => (
                      <span
                        key={s}
                        className="font-mono-dm text-[0.59rem] px-2 py-0.5 rounded-md bg-bg2 border border-border text-muted hover:border-accent hover:text-accent hover:-translate-y-px transition-all cursor-default"
                        style={{ animationDelay: `${i * 60}ms` }}
                      >{s}</span>
                    ))}
                  </div>
                </Section>
              </div>
            )}

            {/* Docs tab */}
            {activeTab === 'docs' && (
              <div className="p-5">
                <div className="bg-bg2 border border-border rounded-lg p-4 mb-3">
                  <h5 className="font-mono-dm text-[0.65rem] text-accent uppercase tracking-widest mb-2">Architecture</h5>
                  <p className="text-[0.8rem] text-muted leading-[1.75]">{project.docs.arch}</p>
                </div>
                <div className="bg-bg2 border border-border rounded-lg p-4 mb-3">
                  <h5 className="font-mono-dm text-[0.65rem] text-accent uppercase tracking-widest mb-2">Setup & Deployment</h5>
                  <ul className="list-none flex flex-col gap-1.5">
                    {project.docs.setup.map((s, i) => (
                      <li key={i} className="text-[0.8rem] text-muted leading-[1.75] pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-accent before:text-[0.68rem]">{s}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[#0D1117] border border-[#30363D] rounded-lg p-3.5 overflow-x-auto">
                  <div className="font-mono-dm text-[0.6rem] text-[#8B949E] mb-2 tracking-widest">{project.docs.codeLabel}</div>
                  <pre
                    className="font-mono-dm text-[0.68rem] leading-[1.7] text-[#C9D1D9] whitespace-pre-wrap"
                    dangerouslySetInnerHTML={{ __html: project.docs.code }}
                  />
                </div>
              </div>
            )}

            {/* Images tab */}
            {activeTab === 'imgs' && (
              <div className="p-5">
                {project.images.length === 0 ? (
                  <div className="text-center py-10">
                    <span className="text-[1.8rem] block mb-2 opacity-30">🖼️</span>
                    <p className="text-[0.8rem] text-muted">No images added yet.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    {project.images.map((img, i) => (
                      <div key={i}>
                        <div
                          className="rounded-lg overflow-hidden border border-border aspect-video bg-bg2 cursor-zoom-in transition-all hover:border-accent hover:scale-[1.02]"
                          onClick={() => setLbIdx(i)}
                        >
                          <img src={img.src} alt={img.caption} className="w-full h-full object-cover block" />
                        </div>
                        {img.caption && (
                          <div className="font-mono-dm text-[0.59rem] text-muted text-center mt-1">{img.caption}</div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-6 py-3.5 border-t border-border flex justify-end flex-shrink-0">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-border2 bg-bg2 text-text text-[0.77rem] font-medium no-underline transition-all hover:border-accent hover:text-accent"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.21 11.39.6.11.82-.26.82-.57v-2.23c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0112 11c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.82.57C20.56 21.8 24 17.31 24 12 24 5.37 18.63 0 12 0z"/></svg>
              View on GitHub
            </a>
          </div>
        </div>
      </div>

      {lbIdx !== null && (
        <Lightbox images={project.images} startIdx={lbIdx} onClose={() => setLbIdx(null)} />
      )}
    </>
  );
};

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-5">
    <h4 className="font-mono-dm text-[0.62rem] text-accent uppercase tracking-[0.13em] mb-2">{title}</h4>
    {children}
  </div>
);

export default ProjectModal;
