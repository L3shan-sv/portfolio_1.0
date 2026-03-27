import React from 'react';
import Terminal from './Terminal';
import { useTypewriter } from '../hooks/useTypewriter';

const GithubIcon: React.FC<{ size?: number }> = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.21 11.39.6.11.82-.26.82-.57v-2.23c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0112 11c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.82.57C20.56 21.8 24 17.31 24 12 24 5.37 18.63 0 12 0z"/>
  </svg>
);

const Hero: React.FC = () => {
  const role = useTypewriter();

  return (
    <div id="hero" className="min-h-screen flex items-center pt-28 pb-16 px-10 max-w-[1080px] mx-auto gap-16">
      <div className="flex-1">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-border bg-bg2 px-3 py-1 rounded-full font-mono-dm text-[0.68rem] text-muted mb-5 tracking-wider">
          <span className="w-[7px] h-[7px] rounded-full bg-green shadow-[0_0_6px_#2A6B2E] animate-pulse" />
          Open to opportunities
        </div>

        {/* Name */}
        <h1 className="font-fraunces text-[clamp(3rem,6.5vw,5rem)] font-bold leading-[1.05] tracking-[-0.03em] mb-2">
          Hi, I'm<br />
          <em className="text-accent not-italic">Leshan</em>
        </h1>

        {/* Typewriter role */}
        <div className="font-mono-dm text-[0.9rem] text-muted mb-5 min-h-[1.4rem]">
          {role}
          <span className="inline-block w-0.5 h-[0.95em] bg-accent ml-0.5 align-middle animate-blink" />
        </div>

        <p className="text-muted text-[0.94rem] max-w-[460px] mb-6 leading-[1.8]">
          DevOps Engineer with hands-on experience building scalable AWS/Kubernetes infrastructure and automating CI/CD pipelines. Focused on reliability, automation, and measurable production impact.
        </p>

        {/* Contact links */}
        <div className="flex flex-wrap gap-3 mb-7">
          <a href="mailto:leshanfavor@gmail.com" className="inline-flex items-center gap-1.5 font-mono-dm text-[0.66rem] text-muted no-underline tracking-wider hover:text-accent transition-colors">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/></svg>
            leshanfavor@gmail.com
          </a>
          <a href="tel:+254717897100" className="inline-flex items-center gap-1.5 font-mono-dm text-[0.66rem] text-muted no-underline tracking-wider hover:text-accent transition-colors">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.72A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006.93 6.93l1.41-1.41a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            +254 717 897 100
          </a>
          <a href="https://github.com/l3shan-sv" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 font-mono-dm text-[0.66rem] text-muted no-underline tracking-wider hover:text-accent transition-colors">
            <GithubIcon size={12} />
            github.com/l3shan-sv
          </a>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 flex-wrap">
          <a href="#projects"
            className="inline-flex items-center gap-1.5 px-5 py-2 rounded-lg text-[0.82rem] font-medium bg-accent text-white border border-transparent transition-all duration-200 hover:bg-accent2 hover:-translate-y-px hover:shadow-[0_4px_18px_rgba(168,98,0,0.3)]">
            View my work
          </a>
          <a href="https://github.com/l3shan-sv" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-5 py-2 rounded-lg text-[0.82rem] font-medium border border-border2 text-text bg-bg2 transition-all duration-200 hover:border-accent hover:text-accent hover:-translate-y-px">
            <GithubIcon size={14} />
            GitHub
          </a>
        </div>
      </div>

      <Terminal />
    </div>
  );
};

export default Hero;
