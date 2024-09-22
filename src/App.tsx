import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './layout/Layout';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './sections/Experience';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Layout>
        <Navbar />
        <Hero />
        <Experience />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
