import React, { useEffect } from 'react';
import type { Certification } from '../types';

interface CertModalProps {
  cert: Certification;
  onClose: () => void;
}

const CertModal: React.FC<CertModalProps> = ({ cert, onClose }) => {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-[rgba(18,14,8,0.65)] backdrop-blur-[5px] z-[200] flex items-center justify-center p-6"
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-bg border border-border rounded-[14px] max-w-[680px] w-full max-h-[90vh] overflow-hidden flex flex-col"
        style={{ boxShadow: '0 4px 20px rgba(0,0,0,.12), 0 12px 48px rgba(0,0,0,.10)' }}>

        {/* Header */}
        <div className="px-6 pt-5 pb-4 border-b border-border flex justify-between items-start gap-4 flex-shrink-0">
          <div className="flex gap-4 items-start flex-1">
            <span className="text-[2rem] leading-none">{cert.icon}</span>
            <div>
              <div className="font-fraunces text-[1.08rem] font-semibold leading-snug mb-0.5">{cert.title}</div>
              <div className="font-mono-dm text-[0.6rem] text-accent">{cert.org}</div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="bg-bg2 border border-border text-muted w-[30px] h-[30px] rounded-md flex items-center justify-center text-[0.9rem] flex-shrink-0 hover:bg-bg3 hover:text-text transition-colors"
          >✕</button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto flex-1 modal-scroll p-6">
          <div className="mb-5">
            <h4 className="font-mono-dm text-[0.62rem] text-accent uppercase tracking-[0.13em] mb-2">Overview</h4>
            <p className="text-[0.83rem] text-muted leading-[1.78]">{cert.overview}</p>
          </div>

          <div className="mb-5">
            <h4 className="font-mono-dm text-[0.62rem] text-accent uppercase tracking-[0.13em] mb-2">What it covers</h4>
            <ul className="list-none flex flex-col gap-2">
              {cert.what.map((w, i) => (
                <li key={i} className="text-[0.81rem] text-muted pl-4 relative leading-relaxed before:content-['▸'] before:absolute before:left-0 before:text-accent before:text-[0.68rem]">{w}</li>
              ))}
            </ul>
          </div>

          <div className="mb-5">
            <h4 className="font-mono-dm text-[0.62rem] text-accent uppercase tracking-[0.13em] mb-2">Topics</h4>
            <div className="flex flex-wrap gap-1.5">
              {cert.topics.map((t, i) => (
                <span
                  key={t}
                  className="font-mono-dm text-[0.59rem] px-2 py-0.5 rounded-md bg-bg2 border border-border text-muted hover:border-accent hover:text-accent transition-all cursor-default"
                  style={{ opacity: 0, animation: `tagPop 0.35s ease ${i * 55}ms forwards` }}
                >{t}</span>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="font-mono-dm text-[0.65rem] text-faint">{cert.year}</div>
            {cert.status === 'ongoing' ? (
              <div className="inline-flex items-center gap-1.5 font-mono-dm text-[0.65rem] px-3 py-1 rounded-md bg-[rgba(42,107,46,0.08)] border border-[rgba(42,107,46,0.22)] text-green">
                <span className="w-1.5 h-1.5 rounded-full bg-green shadow-[0_0_6px_#2A6B2E] animate-pulse" />
                In progress
              </div>
            ) : (
              <div className="inline-flex items-center gap-1.5 font-mono-dm text-[0.65rem] px-3 py-1 rounded-md bg-[rgba(42,107,46,0.10)] border border-[rgba(42,107,46,0.22)] text-green">
                ✓ Completed
              </div>
            )}
          </div>
        </div>

        <div className="px-6 py-3.5 border-t border-border flex justify-end flex-shrink-0">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-border2 bg-bg2 text-text text-[0.77rem] font-medium transition-all hover:border-accent hover:text-accent cursor-pointer"
          >Close</button>
        </div>
      </div>
    </div>
  );
};

export default CertModal;
