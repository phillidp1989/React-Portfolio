import React from 'react';
import Navbar from './components/Navbar/index';
import './App.css';
import Sidenav from './components/Sidenav';
import Intro from './components/Intro';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Education from './components/Education';

function App() {
  return (
    <div>
      <Navbar />
      <Sidenav />
      <Intro />
      <About />
      <Portfolio />
      <Education />      
    </div>
  );
}

export default App;
