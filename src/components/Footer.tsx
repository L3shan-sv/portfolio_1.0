import React from 'react';

const Footer: React.FC = () => (
  <footer className="border-t border-border">
    <div className="max-w-[1080px] mx-auto px-10 py-8 flex justify-between items-center text-muted text-[0.76rem]">
      <span className="font-fraunces text-accent text-[0.95rem]">Leshan Favor</span>
      <div className="flex gap-5">
        <a href="mailto:leshanfavor@gmail.com" className="text-muted no-underline hover:text-accent transition-colors">Email</a>
        <a href="https://github.com/l3shan-sv" target="_blank" rel="noreferrer" className="text-muted no-underline hover:text-accent transition-colors">GitHub</a>
        <a href="tel:+254717897100" className="text-muted no-underline hover:text-accent transition-colors">+254 717 897 100</a>
      </div>
    </div>
  </footer>
);

export default Footer;
