import React from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import WebGLBackground from './components/WebGLBackground';

function App() {
  return (
    <div className="App">
      <WebGLBackground />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <TechStack />
      <Contact />
    </div>
  );
}

export default App;
