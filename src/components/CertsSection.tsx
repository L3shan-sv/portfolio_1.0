import React, { useState } from 'react';
import { CERTS } from '../data/certs';
import type { Certification } from '../types';
import Reveal from './Reveal';
import CertModal from './CertModal';

interface CertCardProps {
  cert: Certification;
  delay: number;
  onClick: () => void;
}

const CertCard: React.FC<CertCardProps> = ({ cert, delay, onClick }) => (
  <Reveal delay={delay}>
    <div
      onClick={onClick}
      className="bg-card border border-border rounded-[10px] p-5 flex gap-3.5 items-start transition-all duration-200 cursor-pointer group hover:border-accent hover:-translate-y-[3px]"
      onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 20px rgba(0,0,0,.12), 0 12px 48px rgba(0,0,0,.10)'; }}
      onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = ''; }}
    >
      <span className="text-[1.6rem] leading-none flex-shrink-0 transition-transform duration-200 group-hover:scale-110">{cert.icon}</span>
      <div>
        <div className="font-fraunces text-[0.86rem] font-semibold leading-snug mb-0.5">{cert.title}</div>
        <div className="font-mono-dm text-[0.59rem] text-accent mb-1.5">{cert.org}</div>
        <div className="text-[0.73rem] text-muted leading-relaxed mb-2">{cert.what[0].split(' — ')[0]}</div>
        {cert.status === 'ongoing' ? (
          <div className="inline-flex items-center gap-1.5 font-mono-dm text-[0.55rem] px-2 py-0.5 rounded bg-[rgba(42,107,46,0.10)] border border-[rgba(42,107,46,0.25)] text-green">
            <span className="w-[5px] h-[5px] rounded-full bg-green shadow-[0_0_5px_#2A6B2E] animate-pulse" />
            In progress
          </div>
        ) : (
          <span className="inline-block font-mono-dm text-[0.55rem] px-1.5 py-0.5 rounded bg-[rgba(168,98,0,0.08)] border border-[rgba(168,98,0,0.15)] text-muted">{cert.year}</span>
        )}
      </div>
    </div>
  </Reveal>
);

const CertsSection: React.FC = () => {
  const [activeCert, setActiveCert] = useState<string | null>(null);

  return (
    <>
      <section className="max-w-[1080px] mx-auto px-10 py-20" id="certs">
        <Reveal>
          <div className="font-mono-dm text-[0.65rem] text-accent tracking-[0.2em] uppercase mb-1">// Certifications</div>
          <h2 className="font-fraunces text-[2rem] font-bold tracking-[-0.02em] mb-1 leading-tight">Credentials</h2>
          <p className="text-muted text-[0.86rem] mb-11">Formal training backing hands-on production experience.</p>
        </Reveal>

        <div className="grid grid-cols-2 gap-4">
          {Object.entries(CERTS).map(([id, cert], idx) => (
            <CertCard key={id} cert={cert} delay={idx * 65} onClick={() => setActiveCert(id)} />
          ))}
        </div>
      </section>

      {activeCert && (
        <CertModal cert={CERTS[activeCert]} onClose={() => setActiveCert(null)} />
      )}
    </>
  );
};

export default CertsSection;
