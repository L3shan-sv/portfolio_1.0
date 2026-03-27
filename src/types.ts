export interface ProjectImage {
  src: string;
  caption: string;
}

export interface ProjectDocs {
  arch: string;
  setup: string[];
  codeLabel: string;
  code: string;
}

export interface Project {
  icon: string;
  cat: string;
  title: string;
  github: string;
  purpose: string;
  desc: string;
  features: string[];
  stack: string[];
  docs: ProjectDocs;
  images: ProjectImage[];
}

export interface Certification {
  icon: string;
  title: string;
  org: string;
  status: 'done' | 'ongoing';
  year: string;
  overview: string;
  what: string[];
  topics: string[];
}

export interface Tool {
  label: string;
  icon: string; // raw SVG string
}

export interface ToolGroup {
  label: string;
  tools: Tool[];
}
