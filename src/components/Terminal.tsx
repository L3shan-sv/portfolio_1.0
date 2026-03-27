import React, { useEffect, useRef } from 'react';

interface TermLine {
  type: 'cmd' | 'out' | 'blank';
  prompt?: string;
  cmd?: string;
  cls?: string;
  txt?: string;
}

const TERM_LINES: TermLine[] = [
  { type: 'cmd', prompt: 'leshan@prod', cmd: 'kubectl get nodes' },
  { type: 'out', cls: 'term-green', txt: 'NAME                    STATUS   ROLES    AGE   VERSION' },
  { type: 'out', cls: 'term-blue',  txt: 'ip-10-0-1-42.ec2         Ready    master   18d   v1.28.4' },
  { type: 'out', cls: 'term-green', txt: 'ip-10-0-2-87.ec2         Ready    worker   18d   v1.28.4' },
  { type: 'out', cls: 'term-green', txt: 'ip-10-0-3-15.ec2         Ready    worker   18d   v1.28.4' },
  { type: 'blank' },
  { type: 'cmd', prompt: 'leshan@prod', cmd: 'kubectl get pods -n production' },
  { type: 'out', cls: 'term-green', txt: 'api-deployment-7d9f      2/2    Running   0    2h' },
  { type: 'out', cls: 'term-green', txt: 'worker-deployment-4k8s   2/2    Running   0    2h' },
  { type: 'out', cls: 'term-green', txt: 'redis-statefulset-0      1/1    Running   0    2h' },
  { type: 'blank' },
  { type: 'cmd', prompt: 'leshan@prod', cmd: 'terraform plan -out=tfplan' },
  { type: 'out', cls: 'term-yellow', txt: 'Plan: 4 to add, 2 to change, 0 to destroy.' },
  { type: 'blank' },
  { type: 'cmd', prompt: 'leshan@prod', cmd: 'argocd app sync prod-cluster' },
  { type: 'out', cls: 'term-green', txt: '✔  Synced   prod-cluster  Healthy' },
  { type: 'blank' },
  { type: 'cmd', prompt: 'leshan@prod', cmd: 'kubectl top pods -n production' },
  { type: 'out', cls: 'term-blue',  txt: 'NAME                       CPU    MEMORY' },
  { type: 'out', cls: 'term-green', txt: 'api-deployment-7d9f        22m    128Mi' },
  { type: 'out', cls: 'term-green', txt: 'worker-deployment-4k8s     18m    256Mi' },
  { type: 'blank' },
  { type: 'cmd', prompt: 'leshan@prod', cmd: 'helm upgrade --install myapp ./chart' },
  { type: 'out', cls: 'term-green', txt: 'Release "myapp" has been upgraded. Happy Helming!' },
  { type: 'blank' },
];

const Terminal: React.FC = () => {
  const bodyRef = useRef<HTMLDivElement>(null);
  const idxRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const body = bodyRef.current;
    if (!body) return;

    const typeCmd = (str: string, el: HTMLSpanElement, cb: () => void) => {
      let i = 0;
      const t = () => {
        if (i <= str.length) {
          el.textContent = str.slice(0, i++);
          timerRef.current = setTimeout(t, 38 + Math.random() * 28);
        } else cb();
      };
      t();
    };

    const next = () => {
      if (idxRef.current >= TERM_LINES.length) {
        idxRef.current = 0;
        body.innerHTML = '';
      }
      const line = TERM_LINES[idxRef.current];
      if (line.type === 'blank') {
        const div = document.createElement('div');
        div.style.height = '0.2rem';
        body.appendChild(div);
        idxRef.current++;
        body.scrollTop = body.scrollHeight;
        timerRef.current = setTimeout(next, 120);
        return;
      }
      if (line.type === 'cmd') {
        const el = document.createElement('div');
        el.className = 'flex items-start gap-1.5 mb-0.5';
        const promptSpan = document.createElement('span');
        promptSpan.className = 'text-accent flex-shrink-0 font-mono-dm text-[0.72rem]';
        promptSpan.textContent = `${line.prompt} ~ $`;
        const cmdSpan = document.createElement('span');
        cmdSpan.className = 'term-white font-mono-dm text-[0.72rem]';
        const cursor = document.createElement('span');
        cursor.className = 'inline-block w-2 h-[1em] bg-accent animate-blink align-bottom ml-0.5';
        el.appendChild(promptSpan);
        el.appendChild(cmdSpan);
        el.appendChild(cursor);
        body.appendChild(el);
        typeCmd(line.cmd ?? '', cmdSpan, () => {
          cursor.remove();
          idxRef.current++;
          timerRef.current = setTimeout(next, 280);
        });
      } else {
        const el = document.createElement('div');
        el.className = `${line.cls ?? 'term-muted'} pl-5 font-mono-dm text-[0.72rem] leading-7`;
        el.textContent = line.txt ?? '';
        body.appendChild(el);
        idxRef.current++;
        body.scrollTop = body.scrollHeight;
        timerRef.current = setTimeout(next, 60);
      }
    };

    timerRef.current = setTimeout(next, 800);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, []);

  return (
    <div className="w-[380px] flex-shrink-0 rounded-[14px] overflow-hidden border border-[rgba(168,98,0,0.2)]"
      style={{ boxShadow: '0 4px 20px rgba(0,0,0,.12), 0 12px 48px rgba(0,0,0,.10), 0 0 60px rgba(168,98,0,.12)', background: '#0D1117' }}>
      {/* Title bar */}
      <div className="bg-[#161B22] px-3.5 py-2.5 flex items-center gap-2 border-b border-[#30363D]">
        <div className="flex gap-1.5">
          <div className="w-[11px] h-[11px] rounded-full bg-[#FF5F57]" />
          <div className="w-[11px] h-[11px] rounded-full bg-[#FEBC2E]" />
          <div className="w-[11px] h-[11px] rounded-full bg-[#28C840]" />
        </div>
        <span className="font-mono-dm text-[0.62rem] text-[#8B949E] ml-1.5 tracking-widest">leshan@prod-cluster — bash</span>
      </div>
      {/* Body */}
      <div
        ref={bodyRef}
        className="px-4 py-3.5 font-mono-dm text-[0.72rem] leading-7 min-h-[280px] overflow-y-auto"
        style={{ background: '#0D1117', color: '#C9D1D9' }}
      />
    </div>
  );
};

export default Terminal;
