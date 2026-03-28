import React from 'react';
import Reveal from './Reveal';

const Pill: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-block bg-[rgba(168,98,0,0.10)] border border-[rgba(168,98,0,0.20)] rounded px-1.5 py-0.5 font-mono-dm text-[0.58rem] text-accent ml-0.5">{children}</span>
);

const STag: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="font-mono-dm text-[0.57rem] px-1.5 py-0.5 rounded bg-bg3 border border-border text-muted">{children}</span>
);

const ColTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="font-mono-dm text-[0.63rem] font-semibold text-accent uppercase tracking-[0.15em] mb-5 flex items-center gap-2">
    {children}
    <span className="flex-1 h-px bg-border" />
  </div>
);

const ResumeSection: React.FC = () => (
  <section className="max-w-[1080px] mx-auto px-10 py-20" id="resume">
    <Reveal>
      <div className="font-mono-dm text-[0.65rem] text-accent tracking-[0.2em] uppercase mb-1">// Resume</div>
      <h2 className="font-fraunces text-[2rem] font-bold tracking-[-0.02em] mb-1 leading-tight">Experience & Education</h2>
      <p className="text-muted text-[0.86rem] mb-10">Built on real production impact.</p>
    </Reveal>

    <div className="grid grid-cols-[1.1fr_0.9fr] gap-14">
      {/* Left — Experience */}
      <Reveal>
        <ColTitle>Experience</ColTitle>

        {/* Role 1 */}
        <div className="pb-5 mb-5 border-b border-border">
          <div className="flex justify-between items-start gap-2 mb-0.5">
            <div className="font-fraunces text-[0.88rem] font-semibold leading-snug">DevOps Engineer</div>
            <div className="font-mono-dm text-[0.57rem] text-muted whitespace-nowrap flex-shrink-0 pt-0.5">Aug 2025 – Present</div>
          </div>
          <div className="text-[0.75rem] text-accent font-medium mb-1.5">Annance Kenya Limited · Full-time</div>
          <ul className="list-none flex flex-col gap-1.5">
            {[
              <>Multi-AZ AWS infra (EKS, EC2, VPC, RDS, S3) via Terraform for 5+ clients — <Pill>99.92% uptime</Pill> across 25+ microservices</>,
              <>Jenkins & GitHub Actions CI/CD — deploy cycles cut by <Pill>85%</Pill> (3 days → 6 hrs), 20+ zero-downtime releases/week</>,
              <>ArgoCD GitOps across 8+ environments — manual intervention down <Pill>88%</Pill></>,
              <>Prometheus/Grafana + 25+ runbooks — MTTR dropped to <Pill>10 min</Pill> from 65 min</>,
              <>AWS cost optimisation <Pill>38% ($6.5K+/mo)</Pill> via right-sizing, spot, S3 lifecycle & cleanup</>,
              <>80% of ops automated via Python/Bash — saves <Pill>25+ hrs/week</Pill></>,
              <>24/7 on-call &lt;12 min P1/P2 SLA — incidents down <Pill>67% QoQ</Pill></>,
            ].map((item, i) => (
              <li key={i} className="text-[0.75rem] text-muted pl-4 relative leading-[1.6] before:content-['·'] before:absolute before:left-0 before:text-accent before:font-bold">{item}</li>
            ))}
          </ul>
        </div>

        {/* Role 2 */}
        <div>
          <div className="flex justify-between items-start gap-2 mb-0.5">
            <div className="font-fraunces text-[0.88rem] font-semibold leading-snug">Backend Engineer</div>
            <div className="font-mono-dm text-[0.57rem] text-muted whitespace-nowrap flex-shrink-0 pt-0.5">Feb 2025 – Jul 2025</div>
          </div>
          <div className="text-[0.75rem] text-accent font-medium mb-1.5">Flex Trade Finance · Full-time</div>
          <ul className="list-none flex flex-col gap-1.5">
            {[
              <>RESTful APIs with Python/Flask/Django — JWT auth, rate limiting, Swagger docs</>,
              <>CI/CD with pytest/unittest coverage — production bugs down <Pill>45%</Pill></>,
              <>PostgreSQL & MongoDB optimised with Redis caching</>,
            ].map((item, i) => (
              <li key={i} className="text-[0.75rem] text-muted pl-4 relative leading-[1.6] before:content-['·'] before:absolute before:left-0 before:text-accent before:font-bold">{item}</li>
            ))}
          </ul>
        </div>
      </Reveal>

      {/* Right — Education + Skills */}
      <Reveal delay={130}>
        <ColTitle>Education</ColTitle>
        <div className="pb-5 mb-6 border-b border-border">
          <div className="flex justify-between items-start gap-2 mb-0.5">
            <div className="font-fraunces text-[0.88rem] font-semibold leading-snug">BSc Information Technology</div>
            <div className="font-mono-dm text-[0.57rem] text-muted whitespace-nowrap flex-shrink-0 pt-0.5">In Progress</div>
          </div>
          <div className="text-[0.75rem] text-accent font-medium mb-1.5">Africa International University</div>
          <div className="text-[0.76rem] text-muted leading-[1.7]">Data Structures & Algorithms · System Design · Network Security · Cloud Computing · Database Systems · OOP</div>
        </div>

        <ColTitle>Core Competencies</ColTitle>
        {[
          { label: 'Cloud Architecture', tags: ['Multi-AZ Design', 'Cost Optimisation', 'HA Systems'] },
          { label: 'Infrastructure as Code', tags: ['Terraform', 'Ansible', 'CloudFormation'] },
          { label: 'Container Orchestration', tags: ['Kubernetes', 'Helm', 'EKS', 'Docker'] },
          { label: 'SRE & Reliability', tags: ['SLIs/SLOs', 'Incident Mgmt', 'Chaos Eng.'] },
          { label: 'Automation', tags: ['Python', 'Bash', 'GitOps'] },
        ].map(({ label, tags }) => (
          <div key={label} className="mb-3.5">
            <div className="text-[0.75rem] font-medium mb-1.5">{label}</div>
            <div className="flex flex-wrap gap-1.5">
              {tags.map(t => <STag key={t}>{t}</STag>)}
            </div>
          </div>
        ))}
      </Reveal>
    </div>

    {/* Download CV */}
    <Reveal>
      <div className="mt-10 flex justify-center">
        <a
          href="https://drive.google.com/uc?export=download&id=1hFp1sjYNQDZQ00E-OrI1s57wQ9f59ZPx"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-5 py-2 rounded-lg border border-border2 bg-bg2 text-text text-[0.82rem] font-medium no-underline transition-all hover:border-accent hover:text-accent hover:-translate-y-px"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
          </svg>
          Download CV
        </a>
      </div>
    </Reveal>
  </section>
);

export default ResumeSection;