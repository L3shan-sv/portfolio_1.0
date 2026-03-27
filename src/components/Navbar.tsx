import React from 'react';

const NAV_LINKS = [
  { href: '#projects', label: 'Projects' },
  { href: '#tools', label: 'Tools' },
  { href: '#resume', label: 'Resume' },
  { href: '#certs', label: 'Certs' },
];

const Navbar: React.FC = () => (
  <nav className="fixed top-0 w-full z-50 bg-[rgba(233,224,206,0.94)] backdrop-blur-md border-b border-border h-14 flex items-center justify-between px-10">
    <span className="font-fraunces text-[1.1rem] text-accent tracking-tight">Leshan Favor</span>
    <ul className="flex gap-1 list-none">
      {NAV_LINKS.map(({ href, label }) => (
        <li key={href}>
          <a
            href={href}
            className="px-3 py-1.5 rounded-md text-[0.8rem] text-muted no-underline transition-all duration-150 hover:bg-bg3 hover:text-text block"
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
