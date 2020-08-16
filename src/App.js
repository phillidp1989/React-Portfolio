import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/index';
import Sidenav from './components/Sidenav';
import Intro from './components/Intro';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Sidenav />
      <Intro />
      <Switch>
        <Route path={'/about'}>
          <About />
        </Route>
        <Route exact path={'/portfolio'}>
          <Portfolio />          
        </Route>
        <Route exact path={'/education'}>
          <Education />          
        </Route>                 
      </Switch> 
      <Footer />     
    </div>
    </Router>
  );
}

export default App;
