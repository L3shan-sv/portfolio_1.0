// Brand-accurate inline SVG icons for every tool chip
import React from 'react';

const icons: Record<string, React.ReactNode> = {

  // ─── Cloud & Infrastructure ─────────────────────────────────────────────

  'AWS': (
    <svg viewBox="0 0 80 50" className="w-6 h-4 flex-shrink-0">
      <path d="M22.4 21.3c0 .9.1 1.6.3 2.1.2.5.5.9.9 1.3.1.1.2.3.2.4 0 .2-.1.3-.3.5l-1 .7c-.1.1-.3.2-.4.2-.2 0-.3-.1-.5-.2-.2-.2-.4-.5-.6-.8-.2-.3-.4-.6-.5-.9-1.3 1.5-2.9 2.3-4.8 2.3-1.4 0-2.5-.4-3.3-1.2-.8-.8-1.2-1.9-1.2-3.2 0-1.4.5-2.5 1.5-3.4 1-.9 2.3-1.3 4-1.3.6 0 1.1 0 1.7.1.6.1 1.2.2 1.8.4v-1.1c0-1.2-.2-2-.7-2.5-.5-.5-1.3-.7-2.4-.7-.5 0-1.1.1-1.6.2-.6.1-1.1.3-1.6.5-.2.1-.4.2-.5.2-.2.1-.3.1-.4.1-.3 0-.4-.2-.4-.6v-.9c0-.3 0-.5.1-.7.1-.1.3-.3.6-.4.5-.2 1.1-.4 1.8-.6.7-.2 1.4-.2 2.2-.2 1.7 0 2.9.4 3.7 1.2.8.8 1.2 2 1.2 3.6v4.8h.1zm-6.6 2.5c.5 0 1.1-.1 1.7-.3.6-.2 1.1-.6 1.5-1.1.3-.3.4-.6.5-1 .1-.4.2-.9.2-1.4v-.7c-.5-.1-1-.2-1.5-.3-.5-.1-1-.1-1.5-.1-1.1 0-1.9.2-2.4.6-.5.4-.8 1-.8 1.8 0 .7.2 1.2.6 1.6.3.5.9.9 1.7.9zm13.1 1.8c-.3 0-.5-.1-.7-.2-.2-.1-.3-.3-.4-.6l-4.4-14.5c-.1-.3-.2-.5-.2-.7 0-.3.1-.4.4-.4h1.6c.3 0 .6.1.7.2.2.1.3.3.4.6l3.1 12.3 2.9-12.3c.1-.3.2-.5.4-.6.2-.1.4-.2.7-.2h1.3c.3 0 .5.1.7.2.2.1.3.3.4.6l3 12.4 3.2-12.4c.1-.3.2-.5.4-.6.2-.1.4-.2.7-.2h1.5c.3 0 .4.1.4.4 0 .1 0 .2-.1.4l-.1.3-4.5 14.5c-.1.3-.2.5-.4.6-.2.1-.4.2-.7.2h-1.4c-.3 0-.5-.1-.7-.2-.2-.1-.3-.3-.4-.7l-2.9-12-2.9 12c-.1.3-.2.5-.4.7-.2.1-.4.2-.7.2h-1.4zm23.8.5c-.8 0-1.7-.1-2.5-.3-.8-.2-1.4-.4-1.8-.6-.3-.2-.4-.4-.5-.6-.1-.2-.1-.4-.1-.6v-.9c0-.4.1-.6.4-.6.1 0 .2 0 .4.1.1.1.3.1.5.2.7.3 1.4.5 2.1.7.7.2 1.4.2 2.1.2 1.1 0 2-.2 2.6-.6.6-.4.9-.9.9-1.6 0-.5-.1-.9-.4-1.2-.3-.3-.9-.6-1.8-.9l-2.6-.8c-1.3-.4-2.3-1-2.9-1.8-.6-.8-.9-1.6-.9-2.6 0-.8.2-1.5.5-2.1.3-.6.8-1.1 1.3-1.5.5-.4 1.2-.7 1.9-.9.7-.2 1.5-.3 2.3-.3.4 0 .8 0 1.2.1.4.1.8.1 1.2.2.4.1.7.2 1 .3.3.1.5.2.7.3.2.1.4.3.5.5.1.2.1.4.1.7v.8c0 .4-.1.6-.4.6-.1 0-.4-.1-.7-.2-.9-.4-1.9-.6-3-.6-1 0-1.8.2-2.4.5-.6.3-.8.8-.8 1.5 0 .5.2.9.5 1.2.3.3 1 .7 2 1l2.5.8c1.3.4 2.2 1 2.8 1.7.6.7.8 1.5.8 2.5 0 .8-.2 1.5-.5 2.1-.3.6-.8 1.1-1.4 1.5-.6.4-1.3.7-2.1.9-.8.2-1.7.3-2.6.3z" fill="#252F3E"/>
      <path d="M59.7 32.6c-7.2 5.3-17.7 8.1-26.7 8.1-12.6 0-24-4.7-32.6-12.5-.7-.6-.1-1.4.7-1 9.3 5.4 20.8 8.6 32.7 8.6 8 0 16.8-1.7 24.9-5.1 1.2-.5 2.2.8 1 1.9zm2.9-3.3c-.9-1.2-6.2-.6-8.6-.3-.7.1-.8-.5-.2-.9 4.2-3 11.1-2.1 11.9-1.1.8 1-.2 7.9-4.1 11.2-.6.5-1.2.2-.9-.4.9-2.2 2.8-7.3 1.9-8.5z" fill="#FF9900"/>
    </svg>
  ),

  'EKS': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#FF9900"/>
      <path d="M16 7l1.4 3.8M16 7l-1.4 3.8M22 10.5l-3.6 1.7M22 10.5l-1.7 3.6M24 17.5l-4-1.4M24 17.5l-3.6 1.8M19 24l-1.4-4M19 24l-2.8-2.8M13 24l1.4-4M13 24l2.8-2.8M8 17.5l3.8 1.3M8 17.5l3.6 1.8M10 10.5l3.6 1.7M10 10.5l1.7 3.6" stroke="white" strokeWidth="1.3" strokeLinecap="round" fill="none"/>
      <circle cx="16" cy="16" r="2.8" fill="white"/>
    </svg>
  ),

  'EC2': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#FF9900"/>
      <rect x="8" y="8" width="16" height="16" rx="2" stroke="white" strokeWidth="1.4" fill="none"/>
      <path d="M12 8v-2M16 8v-2M20 8v-2M12 26v-2M16 26v-2M20 26v-2M8 12h-2M8 16h-2M8 20h-2M26 12h-2M26 16h-2M26 20h-2" stroke="white" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
    </svg>
  ),

  'VPC': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#8C4FFF"/>
      <rect x="7" y="9" width="18" height="14" rx="2" stroke="white" strokeWidth="1.3" fill="none"/>
      <rect x="10" y="13" width="5" height="4" rx="1" stroke="white" strokeWidth="1.1" fill="none"/>
      <rect x="17" y="13" width="5" height="4" rx="1" stroke="white" strokeWidth="1.1" fill="none"/>
      <path d="M10 21h5M17 21h5" stroke="white" strokeWidth="1.1" strokeLinecap="round"/>
    </svg>
  ),

  'S3': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#3F8624"/>
      <path d="M16 8l7 3.5v9L16 24l-7-3.5v-9z" stroke="white" strokeWidth="1.4" fill="none"/>
      <path d="M9 11.5l7 3.5 7-3.5M16 15v9" stroke="white" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
    </svg>
  ),

  'Route 53': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#8C4FFF"/>
      <circle cx="16" cy="14" r="5.5" stroke="white" strokeWidth="1.3" fill="none"/>
      <path d="M16 8.5c-2 2-3 3.5-3 5.5s1 3.5 3 5.5M16 8.5c2 2 3 3.5 3 5.5s-1 3.5-3 5.5M10.5 14h11M9 22h14" stroke="white" strokeWidth="1.1" strokeLinecap="round" fill="none"/>
    </svg>
  ),

  'IAM': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#DD344C"/>
      <path d="M16 8l7 3.5v5c0 4.5-3 7-7 8.5-4-1.5-7-4-7-8.5v-5z" stroke="white" strokeWidth="1.3" fill="none"/>
      <path d="M13 16l2 2 4-4" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  ),

  'RDS': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#2E73B8"/>
      <ellipse cx="16" cy="10" rx="7" ry="2.5" stroke="white" strokeWidth="1.3" fill="none"/>
      <path d="M9 10v12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V10M9 16c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5" stroke="white" strokeWidth="1.3" fill="none"/>
    </svg>
  ),

  'Lambda': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#FF9900"/>
      <path d="M10 23l4-7.5L11 9h3l2.5 4.5L21 9h3l-9 14h-5z" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  ),

  'CloudFormation': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#E7157B"/>
      <path d="M16 8c-4.4 0-8 2.7-8 6 0 2 1.3 3.8 3.3 4.9L10 23h12l-1.3-4.1C22.7 17.8 24 16 24 14c0-3.3-3.6-6-8-6z" stroke="white" strokeWidth="1.3" fill="none"/>
      <path d="M13 23v1.5a1 1 0 001 1h4a1 1 0 001-1V23" stroke="white" strokeWidth="1.2" fill="none"/>
    </svg>
  ),

  'ALB/NLB': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#FF9900"/>
      <path d="M7 16h18M16 9l-4 7h8l-4 7" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  ),

  'CloudFront': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#8C4FFF"/>
      <circle cx="16" cy="16" r="8" stroke="white" strokeWidth="1.3" fill="none"/>
      <path d="M16 8c-2.5 2.5-4 5-4 8s1.5 5.5 4 8M16 8c2.5 2.5 4 5 4 8s-1.5 5.5-4 8M8 13h16M8 19h16" stroke="white" strokeWidth="1.1" fill="none"/>
    </svg>
  ),

  'KMS': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#FF4F8B"/>
      <path d="M16 8a4 4 0 100 8 4 4 0 000-8z" stroke="white" strokeWidth="1.3" fill="none"/>
      <circle cx="16" cy="12" r="1.5" fill="white"/>
      <path d="M16 16v2M14 18h5M14 20h3" stroke="white" strokeWidth="1.3" strokeLinecap="round" fill="none"/>
    </svg>
  ),

  'Transit Gateway': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#FF9900"/>
      <circle cx="16" cy="16" r="4" stroke="white" strokeWidth="1.3" fill="none"/>
      <path d="M16 8v4M16 20v4M8 16h4M20 16h4" stroke="white" strokeWidth="1.3" strokeLinecap="round" fill="none"/>
      <circle cx="16" cy="8" r="2" fill="white"/>
      <circle cx="16" cy="24" r="2" fill="white"/>
      <circle cx="8" cy="16" r="2" fill="white"/>
      <circle cx="24" cy="16" r="2" fill="white"/>
    </svg>
  ),

  'MSK': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#231F20"/>
      <rect x="9" y="9" width="14" height="4" rx="1" stroke="white" strokeWidth="1.2" fill="none"/>
      <rect x="9" y="15" width="14" height="4" rx="1" stroke="white" strokeWidth="1.2" fill="none"/>
      <rect x="9" y="21" width="14" height="2" rx="1" fill="white" opacity="0.3"/>
      <circle cx="21" cy="11" r="1.2" fill="#FF4500"/>
      <circle cx="21" cy="17" r="1.2" fill="#FF4500"/>
    </svg>
  ),

  'Terraform': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#7B42BC"/>
      <path d="M13 9.5v8l7-4v-8l-7 4zM6 13.5v8l7-4v-8l-7 4zM20 17.5v8l6-3.5v-8l-6 3.5z" fill="white" opacity="0.9"/>
    </svg>
  ),

  'Ansible': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <circle cx="16" cy="16" r="14" fill="#1A1A1A"/>
      <path d="M11 22l7-13 2 5-5-2 4 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  ),

  'Kubernetes': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <circle cx="16" cy="16" r="15" fill="#326CE5"/>
      <path d="M16 6.5l1.5 4.2M16 6.5l-1.5 4.2M22.8 10.5l-4 1.9M22.8 10.5l-1.9 4M25 18.8l-4.2-1.4M25 18.8l-3.8 2M19.5 25.2l-1.4-4.2M19.5 25.2l-3-3M12.5 25.2l1.4-4.2M12.5 25.2l3-3M7 18.8l4.2 1.5M7 18.8l3.8 2M9.2 10.5l4 1.9M9.2 10.5l1.9 4" stroke="white" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
      <circle cx="16" cy="16" r="3" fill="white"/>
    </svg>
  ),

  'Docker': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#2496ED"/>
      <rect x="7" y="14" width="3" height="3" rx="0.5" stroke="white" strokeWidth="1.1" fill="none"/>
      <rect x="11" y="14" width="3" height="3" rx="0.5" stroke="white" strokeWidth="1.1" fill="none"/>
      <rect x="15" y="14" width="3" height="3" rx="0.5" stroke="white" strokeWidth="1.1" fill="none"/>
      <rect x="15" y="10" width="3" height="3" rx="0.5" stroke="white" strokeWidth="1.1" fill="none"/>
      <rect x="19" y="10" width="3" height="3" rx="0.5" stroke="white" strokeWidth="1.1" fill="none"/>
      <rect x="19" y="14" width="3" height="3" rx="0.5" stroke="white" strokeWidth="1.1" fill="none"/>
      <path d="M6 19.5c.5-2 2-3 4.5-2.5h.5M25.5 14.5c-.5-1-2-1.5-3.5-1-.3-2-1.5-2.5-2.5-2.5" stroke="white" strokeWidth="1.1" strokeLinecap="round" fill="none"/>
      <path d="M6 19.5c-.2 3 2 4.5 5 4.5h9c3 0 5-1.5 5-4.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" fill="none"/>
    </svg>
  ),

  'Helm': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#0F1689"/>
      <circle cx="16" cy="16" r="8" stroke="#00B4D8" strokeWidth="1.3" fill="none"/>
      <path d="M10 16h12M16 10v12" stroke="#00B4D8" strokeWidth="1.1" strokeLinecap="round" opacity="0.5"/>
      <circle cx="16" cy="16" r="3" fill="#00B4D8"/>
      <path d="M16 8l-1.5 4h3zM16 24l1.5-4h-3zM8 16l4-1.5v3zM24 16l-4 1.5v-3z" fill="#00B4D8" opacity="0.4"/>
    </svg>
  ),

  // ─── CI/CD & Orchestration ─────────────────────────────────────────────

  'Temporal.io': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#141414"/>
      <path d="M8 16a8 8 0 1116 0" stroke="#AFFE5B" strokeWidth="2" strokeLinecap="round" fill="none"/>
      <path d="M16 8v4M16 16l3-3" stroke="#AFFE5B" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      <circle cx="16" cy="16" r="1.8" fill="#AFFE5B"/>
    </svg>
  ),

  'Jenkins': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#D33833"/>
      <circle cx="16" cy="14" r="6" stroke="white" strokeWidth="1.4" fill="none"/>
      <circle cx="14" cy="13" r="1" fill="white"/>
      <circle cx="18" cy="13" r="1" fill="white"/>
      <path d="M13.5 16.5c.7.7 1.3 1 2.5 1s1.8-.3 2.5-1" stroke="white" strokeWidth="1" strokeLinecap="round" fill="none"/>
      <path d="M16 20v4M14 22h4" stroke="white" strokeWidth="1.3" strokeLinecap="round" fill="none"/>
    </svg>
  ),

  'GitHub Actions': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#24292E"/>
      <path d="M16 4C9.37 4 4 9.37 4 16c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.57v-2.23c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0116 9c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.82.57C24.56 25.8 28 21.31 28 16 28 9.37 22.63 4 16 4z" fill="white"/>
    </svg>
  ),

  'ArgoCD': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#EF7B4D"/>
      <circle cx="16" cy="15" r="6.5" stroke="white" strokeWidth="1.4" fill="none"/>
      <circle cx="16" cy="15" r="2.5" fill="white"/>
      <path d="M22.6 8.4l2-2M9.4 8.4l-2-2M22.6 21.6l2 2M9.4 21.6l-2 2" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  ),

  'Blue-Green / Canary': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#1A1A2E"/>
      <rect x="4" y="12" width="11" height="8" rx="2" fill="#2A6B2E" opacity="0.9"/>
      <rect x="17" y="12" width="11" height="8" rx="2" fill="#1565C0" opacity="0.9"/>
      <path d="M15 16h2" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),

  'GitOps': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#F05032"/>
      <circle cx="10" cy="10" r="3" stroke="white" strokeWidth="1.3" fill="none"/>
      <circle cx="22" cy="10" r="3" stroke="white" strokeWidth="1.3" fill="none"/>
      <circle cx="10" cy="22" r="3" stroke="white" strokeWidth="1.3" fill="none"/>
      <path d="M10 13v6M13 10h6" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  ),

  'Tekton': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#FD495C"/>
      <path d="M8 16l5-7h6l5 7-5 7h-6z" stroke="white" strokeWidth="1.3" fill="none"/>
      <path d="M13 9l-2 7 2 7M19 9l2 7-2 7M11 16h10" stroke="white" strokeWidth="1" strokeLinecap="round" fill="none"/>
    </svg>
  ),

  // ─── Observability ──────────────────────────────────────────────────────

  'Prometheus': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <circle cx="16" cy="16" r="15" fill="#E6522C"/>
      <circle cx="16" cy="16" r="8" stroke="white" strokeWidth="1.4" fill="none"/>
      <circle cx="16" cy="16" r="3" fill="white"/>
      <path d="M16 9v2M16 21v2M9 16h2M21 16h2M11.3 11.3l1.4 1.4M19.3 19.3l1.4 1.4M11.3 20.7l1.4-1.4M19.3 12.7l1.4-1.4" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  ),

  'Grafana': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#F46800"/>
      <path d="M7 22l3.5-8 3 5 2.5-4 3.5 7 2-5 3 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  ),

  'Loki': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#F05A28"/>
      <path d="M8 10h16M8 14h12M8 18h13M8 22h9" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    </svg>
  ),

  'OpenTelemetry': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#425CC7"/>
      <path d="M9 22l4.5-12 3 7.5 2.5-5.5 4 10" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  ),

  'Jaeger': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#1E1E1E"/>
      <path d="M7 24l4-3.5 3.5 3L19 19l3 4 4-6" stroke="#00D4AA" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <circle cx="7" cy="24" r="1.5" fill="#00D4AA"/>
      <circle cx="11" cy="20.5" r="1.5" fill="#00D4AA"/>
      <circle cx="14.5" cy="23.5" r="1.5" fill="#00D4AA"/>
      <circle cx="19" cy="19" r="1.5" fill="#00D4AA"/>
      <circle cx="22" cy="23" r="1.5" fill="#00D4AA"/>
    </svg>
  ),

  'ELK Stack': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#005571"/>
      <path d="M8 11h16M8 16h12M8 21h14" stroke="#FEC514" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
    </svg>
  ),

  'eBPF': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#1C1C3A"/>
      <circle cx="16" cy="16" r="5" stroke="#F5A623" strokeWidth="1.5" fill="none"/>
      <circle cx="16" cy="16" r="1.8" fill="#F5A623"/>
      <path d="M16 7v4M16 21v4M7 16h4M21 16h4" stroke="#F5A623" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M10 10l2.8 2.8M19.2 19.2l2.8 2.8M22 10l-2.8 2.8M10 22l2.8-2.8" stroke="#F5A623" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
    </svg>
  ),

  'Apache Kafka': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#231F20"/>
      <circle cx="16" cy="8" r="2.5" fill="white"/>
      <circle cx="8" cy="22" r="2.5" fill="white"/>
      <circle cx="24" cy="22" r="2.5" fill="white"/>
      <rect x="13.5" y="14" width="5" height="4" rx="1" fill="white"/>
      <path d="M16 10.5v3.5M14 18l-4.5 2.5M18 18l4.5 2.5" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  ),

  'Debezium CDC': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#C23A24"/>
      <ellipse cx="14" cy="11" rx="6" ry="2.2" stroke="white" strokeWidth="1.2" fill="none"/>
      <path d="M8 11v10c0 1.2 2.7 2.2 6 2.2s6-1 6-2.2V11M8 16c0 1.2 2.7 2.2 6 2.2s6-1 6-2.2" stroke="white" strokeWidth="1.2" fill="none"/>
      <path d="M21 15l4 2.5-4 2.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  ),

  'BGP Failover': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#1565C0"/>
      <circle cx="8" cy="16" r="3" stroke="white" strokeWidth="1.3" fill="none"/>
      <circle cx="24" cy="16" r="3" stroke="white" strokeWidth="1.3" fill="none"/>
      <path d="M11 14l4-4 4 4M11 18l4 4 4-4" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  ),

  'AWS Transit Gateway': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#FF9900"/>
      <circle cx="16" cy="16" r="4" stroke="white" strokeWidth="1.3" fill="none"/>
      <path d="M16 8v4M16 20v4M8 16h4M20 16h4" stroke="white" strokeWidth="1.3" strokeLinecap="round" fill="none"/>
      <circle cx="16" cy="8" r="2" fill="white"/>
      <circle cx="16" cy="24" r="2" fill="white"/>
      <circle cx="8" cy="16" r="2" fill="white"/>
      <circle cx="24" cy="16" r="2" fill="white"/>
    </svg>
  ),

  // ─── Programming & Development ──────────────────────────────────────────

  'Python': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#3776AB"/>
      <path d="M15.5 6C11 6 11.5 8 11.5 8v4h8v1.5H9.5S7 13.3 7 17.5 9.3 21 9.3 21h2.2v-3.5s-.1-2.5 2.5-2.5h7.5s2.5.1 2.5-2.5V9.5c0-2.6-2.5-3.5-5-3.5zM13.5 9a1 1 0 110 2 1 1 0 010-2z" fill="white" opacity="0.9"/>
      <path d="M16.5 26C21 26 20.5 24 20.5 24v-4h-8v-1.5h10s2.5-.3 2.5-4.5-2.3-3.5-2.3-3.5h-2.2v3.5s.1 2.5-2.5 2.5H11s-2.5-.1-2.5 2.5v5c0 2.6 2.5 3.5 5 3.5zM18.5 23a1 1 0 110-2 1 1 0 010 2z" fill="#FFD43B" opacity="0.9"/>
    </svg>
  ),

  'C (eBPF)': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#555555"/>
      <path d="M20 11a7 7 0 100 10" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
    </svg>
  ),

  'Bash': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#293137"/>
      <path d="M8 12l5 4-5 4M15 20h9" stroke="#4EAA25" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  ),

  'TypeScript': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#3178C6"/>
      <path d="M18 17v-1.5h-8V17h2.5v7H15v-7H18zM19 23.5c.6.3 1.4.5 2.4.5 1 0 1.8-.2 2.4-.7.6-.4.9-1 .9-1.8 0-.6-.2-1.1-.5-1.5-.3-.4-.9-.7-1.8-1l-.7-.3c-.5-.2-.7-.4-.7-.7 0-.4.3-.6.9-.6.5 0 1 .1 1.5.4V16c-.5-.2-1.1-.3-1.7-.3-.9 0-1.7.2-2.2.7-.6.4-.8 1-.8 1.8 0 1 .6 1.7 1.7 2.2l.7.3c.6.2.9.5.9.8 0 .4-.4.7-1.1.7-.6 0-1.2-.2-1.9-.6v1.9z" fill="white"/>
    </svg>
  ),

  'FastAPI': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#009688"/>
      <path d="M17 7l-8 10h7l-3 8 9-11h-7l2-7z" fill="white" opacity="0.9"/>
    </svg>
  ),

  'Flask': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#1A1A1A"/>
      <path d="M14 7v7l-5.5 9c-.5 1 .2 2 1.5 2h12c1.3 0 2-.9 1.5-2L18 14V7M14 7h4M11 19h10" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  ),

  'Django': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#0C3C26"/>
      <path d="M18 7h3v14.5c0 3-1.5 4.5-4.5 4.5-1.5 0-2.7-.5-3.5-1.5l1.5-2c.5.7 1.2 1 2 1 1.2 0 1.5-.7 1.5-2V7zM12 13h3v11h-3V13zM12 8.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" fill="#44B78B"/>
    </svg>
  ),

  'React': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#20232A"/>
      <ellipse cx="16" cy="16" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.3" fill="none"/>
      <ellipse cx="16" cy="16" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.3" fill="none" transform="rotate(60 16 16)"/>
      <ellipse cx="16" cy="16" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.3" fill="none" transform="rotate(120 16 16)"/>
      <circle cx="16" cy="16" r="2" fill="#61DAFB"/>
    </svg>
  ),

  'REST APIs': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#4CAF50"/>
      <path d="M8 12h16M8 16h12M8 20h14" stroke="white" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
      <path d="M22 14l3 2-3 2" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  ),

  'GraphQL': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#E10098"/>
      <circle cx="16" cy="7" r="2" fill="white"/>
      <circle cx="24.9" cy="12" r="2" fill="white"/>
      <circle cx="24.9" cy="20" r="2" fill="white"/>
      <circle cx="16" cy="25" r="2" fill="white"/>
      <circle cx="7.1" cy="20" r="2" fill="white"/>
      <circle cx="7.1" cy="12" r="2" fill="white"/>
      <path d="M16 9l8.9 5M24.9 14v8M16 23L7.1 18M7.1 18V10M16 9L7.1 10M24.9 14L16 23" stroke="white" strokeWidth="1" opacity="0.6"/>
      <circle cx="16" cy="16" r="2.5" fill="white" opacity="0.4"/>
    </svg>
  ),

  'SQL': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#336791"/>
      <ellipse cx="16" cy="10" rx="7" ry="2.5" stroke="white" strokeWidth="1.3" fill="none"/>
      <path d="M9 10v12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V10M9 16c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5" stroke="white" strokeWidth="1.3" fill="none"/>
    </svg>
  ),

  'NoSQL': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#47A248"/>
      <path d="M16 7l-6 3v6l6 4 6-4v-6z" stroke="white" strokeWidth="1.3" strokeLinejoin="round" fill="none"/>
      <path d="M10 10l6 4 6-4M16 14v8" stroke="white" strokeWidth="1.1" strokeLinecap="round" fill="none"/>
    </svg>
  ),

  // ─── Security ───────────────────────────────────────────────────────────

  'HashiCorp Vault': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#1C1C1C"/>
      <path d="M16 5l9 4v9c0 5-4 8-9 10C11 26 7 23 7 18V9l9-4z" stroke="#FFD700" strokeWidth="1.3" fill="none"/>
      <path d="M12 16l2.5 2.5L20 13" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  ),

  'OPA / Rego': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#566BE9"/>
      <path d="M16 7l8 4v9l-8 5-8-5v-9z" stroke="white" strokeWidth="1.3" fill="none"/>
      <path d="M16 7v16M8 11l8 5 8-5" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
    </svg>
  ),

  'OPA Gatekeeper': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#3C50DA"/>
      <path d="M16 6l9 4v8c0 5-4 9-9 10-5-1-9-5-9-10v-8z" stroke="white" strokeWidth="1.3" fill="none"/>
      <path d="M12 17l2.5 2.5L20 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  ),

  'Trivy': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#1904DA"/>
      <path d="M16 6l9 4v9c0 5-3.5 8.5-9 10-5.5-1.5-9-5-9-10v-9z" stroke="white" strokeWidth="1.3" fill="none"/>
      <path d="M12 16l3 3 5-6" stroke="#00FFB2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  ),

  'Semgrep': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#09A650"/>
      <path d="M8 11h16M8 16h10M8 21h13" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      <circle cx="22" cy="21" r="3.5" fill="white" stroke="#09A650" strokeWidth="1"/>
      <path d="M21 21l1 1 2-2" stroke="#09A650" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  ),

  'Syft (SBOM)': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#1C6BCF"/>
      <path d="M10 8h12l3 3v13H9V8z" stroke="white" strokeWidth="1.3" fill="none"/>
      <path d="M22 8v3h3M12 14h8M12 17h8M12 20h5" stroke="white" strokeWidth="1.1" strokeLinecap="round" fill="none"/>
    </svg>
  ),

  'IAM Least-Privilege': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#DD344C"/>
      <path d="M16 7l8 4v7c0 4-3 7-8 8.5C11 25 8 22 8 18v-7z" stroke="white" strokeWidth="1.3" fill="none"/>
      <rect x="13" y="14" width="6" height="5" rx="1" stroke="white" strokeWidth="1.2" fill="none"/>
      <path d="M14 14v-2a2 2 0 014 0v2" stroke="white" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
    </svg>
  ),

  'VPC Segmentation': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#8C4FFF"/>
      <rect x="6" y="8" width="20" height="16" rx="2" stroke="white" strokeWidth="1.3" fill="none"/>
      <path d="M16 8v16M6 16h20" stroke="white" strokeWidth="1.1" strokeLinecap="round" opacity="0.5"/>
      <rect x="9" y="11" width="4" height="3" rx="0.5" fill="white" opacity="0.6"/>
      <rect x="19" y="11" width="4" height="3" rx="0.5" fill="white" opacity="0.6"/>
    </svg>
  ),

  'KMS/TLS': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#FF4F8B"/>
      <path d="M16 8a4 4 0 100 8 4 4 0 000-8z" stroke="white" strokeWidth="1.3" fill="none"/>
      <circle cx="16" cy="12" r="1.5" fill="white"/>
      <path d="M16 16v2M14 18h5M14 21h3.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" fill="none"/>
    </svg>
  ),

  'WAF': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#DD344C"/>
      <path d="M16 5l9 4.5v8c0 5-3.5 8.5-9 10.5C11 26 7 22.5 7 17.5v-8z" stroke="white" strokeWidth="1.3" fill="none"/>
      <path d="M12 16l2.5 2.5L20 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  ),

  'NetworkPolicy': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#326CE5"/>
      <circle cx="16" cy="16" r="8" stroke="white" strokeWidth="1.3" fill="none"/>
      <path d="M8 16h4M20 16h4M16 8v4M16 20v4" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
      <circle cx="16" cy="16" r="2" fill="white"/>
    </svg>
  ),

  // ─── Chaos Engineering ──────────────────────────────────────────────────

  'Chaos Mesh': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#1A1A2E"/>
      <circle cx="16" cy="16" r="8" stroke="#FF6B6B" strokeWidth="1.3" fill="none" strokeDasharray="3 2"/>
      <path d="M12 12l8 8M20 12l-8 8" stroke="#FF6B6B" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),

  'Litmus Chaos': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#5B2C8D"/>
      <path d="M14 7v9l-5 9h14l-5-9V7M14 7h4" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  ),

  'Pod Kill / Net Latency / CPU Stress': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#37474F"/>
      <path d="M7 22l4-8 3.5 5 3-5.5 4.5 8.5" stroke="#FF5252" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  ),

  'SLI/SLO/Error Budget': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#2E7D32"/>
      <circle cx="16" cy="16" r="8" stroke="white" strokeWidth="1.3" fill="none"/>
      <path d="M16 10v6l4 2" stroke="white" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
    </svg>
  ),

  'Multi-Window Alerting': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#E65100"/>
      <path d="M16 7c-4 0-7 3-7 7 0 5 3 7 7 9 4-2 7-4 7-9 0-4-3-7-7-7z" stroke="white" strokeWidth="1.3" fill="none"/>
      <path d="M16 13v4M16 18.5v1" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),

  'DORA Metrics': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#1565C0"/>
      <path d="M7 22l4-8 4 4 4-9 5 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  ),

  'Blast Radius Analysis': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#6A1B9A"/>
      <circle cx="16" cy="16" r="3" fill="white"/>
      <circle cx="16" cy="16" r="6" stroke="white" strokeWidth="1" fill="none" opacity="0.6"/>
      <circle cx="16" cy="16" r="10" stroke="white" strokeWidth="0.8" fill="none" opacity="0.3"/>
    </svg>
  ),

  // ─── Data & AI ──────────────────────────────────────────────────────────

  'PostgreSQL': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#336791"/>
      <ellipse cx="15" cy="11" rx="6" ry="2.2" stroke="white" strokeWidth="1.2" fill="none"/>
      <path d="M9 11v10c0 1.2 2.7 2.2 6 2.2s6-1 6-2.2V11M9 16c0 1.2 2.7 2.2 6 2.2s6-1 6-2.2" stroke="white" strokeWidth="1.2" fill="none"/>
      <path d="M21 8.5c1.5-.5 3 0 3.5 1.5.5 1.5 0 5-2 8" stroke="white" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.7"/>
    </svg>
  ),

  'pgvector': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#336791"/>
      <path d="M8 20l5-8 4 6 3-4 4 5" stroke="#A8D8FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <circle cx="8" cy="20" r="1.5" fill="#A8D8FF"/>
      <circle cx="13" cy="12" r="1.5" fill="#A8D8FF"/>
      <circle cx="17" cy="18" r="1.5" fill="#A8D8FF"/>
      <circle cx="20" cy="14" r="1.5" fill="#A8D8FF"/>
    </svg>
  ),

  'Neo4j': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#018BFF"/>
      <circle cx="10" cy="16" r="3" fill="white"/>
      <circle cx="22" cy="10" r="3" fill="white"/>
      <circle cx="22" cy="22" r="3" fill="white"/>
      <path d="M13 15l7-4M13 17l7 4" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  ),

  'Redis': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#DC382D"/>
      <path d="M8 20l8-3 8 3-8 3z" fill="white" opacity="0.9"/>
      <path d="M8 16.5l8-3 8 3-8 3z" fill="white" opacity="0.7"/>
      <path d="M8 13l8-3 8 3-8 3z" fill="white"/>
      <path d="M8 13v7M24 13v7" stroke="white" strokeWidth="0.8" opacity="0.4"/>
    </svg>
  ),

  'MongoDB': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#47A248"/>
      <path d="M16 5c-5 5-5 10-1 15l1 7 1-7c4-5 4-10-1-15z" fill="white" opacity="0.9"/>
    </svg>
  ),

  'Anthropic Claude API': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#CC785C"/>
      <path d="M19.5 8h-3L11 24h3l1.2-3.5h5.6L22 24h3L19.5 8zm-3.5 10l2-5.5 2 5.5h-4z" fill="white" opacity="0.95"/>
    </svg>
  ),

  'LLM Prompt Engineering': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#6B48C8"/>
      <path d="M8 10h16M8 14h10M8 18h13M8 22h8" stroke="white" strokeWidth="1.3" strokeLinecap="round" fill="none"/>
      <circle cx="25" cy="19" r="4" fill="#FFD700"/>
      <path d="M23.5 19l1 1 2.5-2.5" stroke="#6B48C8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),

  'Incident Embeddings': (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#1A237E"/>
      <circle cx="10" cy="12" r="2.5" fill="#90CAF9"/>
      <circle cx="22" cy="10" r="2.5" fill="#90CAF9"/>
      <circle cx="25" cy="20" r="2.5" fill="#64B5F6"/>
      <circle cx="15" cy="23" r="2.5" fill="#64B5F6"/>
      <circle cx="7" cy="21" r="2.5" fill="#42A5F5"/>
      <path d="M10 12l12-2M10 12l-3 9M22 10l3 10M25 20l-10 3M7 21l8 2" stroke="#90CAF9" strokeWidth="0.9" opacity="0.5"/>
    </svg>
  ),
};

export function getToolIcon(name: string): React.ReactNode {
  return icons[name] ?? null;
}

export default icons;
