import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import ToolsSection from './components/ToolsSection';
import ResumeSection from './components/ResumeSection';
import CertsSection from './components/CertsSection';
import Footer from './components/Footer';

const Divider: React.FC = () => (
  <hr className="border-none border-t border-border mx-10" style={{ borderTop: '1px solid #C8BA9E' }} />
);

const App: React.FC = () => (
  <>
    <Navbar />
    <Hero />
    <Divider />
    <ProjectsSection />
    <Divider />
    <ToolsSection />
    <Divider />
    <ResumeSection />
    <Divider />
    <CertsSection />
    <Footer />
  </>
);

export default App;
