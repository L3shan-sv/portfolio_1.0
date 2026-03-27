import { useEffect, useState } from 'react';

const ROLES = [
  'DevOps & Cloud Engineer',
  'Kubernetes Architect',
  'IaC Specialist',
  'SRE Practitioner',
  'AWS Solutions Architect',
  'Platform Engineer',
];

export function useTypewriter(): string {
  const [text, setText] = useState('');

  useEffect(() => {
    let roleIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const tick = () => {
      const word = ROLES[roleIdx];
      if (!deleting) {
        setText(word.slice(0, ++charIdx));
        if (charIdx === word.length) {
          deleting = true;
          timeoutId = setTimeout(tick, 1900);
          return;
        }
      } else {
        setText(word.slice(0, --charIdx));
        if (charIdx === 0) {
          deleting = false;
          roleIdx = (roleIdx + 1) % ROLES.length;
        }
      }
      timeoutId = setTimeout(tick, deleting ? 42 : 82);
    };

    timeoutId = setTimeout(tick, 700);
    return () => clearTimeout(timeoutId);
  }, []);

  return text;
}
