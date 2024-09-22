import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './layout/Layout';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './sections/Experience';
import Education from './sections/Education';
import ProgrammingLinks from './components/ProgrammingLinks';
import SkillsShowcase from './sections/SkillsShowcase';
import ProjectShowcase from './sections/ProjectShowcase';
import { useScrollToHash } from './hooks/useScrollToHash';
import Certifications from './sections/Certifications';
import CompanyCarousel from './sections/CompanyCarousel';
import Footer from './components/Footer';

const App: React.FC = () => {
  useScrollToHash();
  return (
    <ThemeProvider>
      <Layout>
        <Navbar />
        <Hero />
        <CompanyCarousel />
        <Experience />
        <Education />
        <ProgrammingLinks />
        <SkillsShowcase />
        <ProjectShowcase />
        <Certifications />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
