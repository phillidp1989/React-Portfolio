import React from 'react';
import './style.css';

function Navbar() {
    return (
        <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper grey darken-3">
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"
            ><i className="material-icons">menu</i></a
          >
          <ul className="right hide-on-med-and-down">
            <li><a href="about">About Me</a></li>
            <li><a href="portfolio">Portfolio</a></li>
            <li><a href="education">Education & Experience</a></li>
            <li>
              <a
                target="_blank"
                rel='noopener noreferrer'
                href="https://www.linkedin.com/in/daniel-phillips-65775485/"
                ><i className="fab fa-linkedin"></i
              ></a>
            </li>
            <li>
              <a target="_blank" rel='noopener noreferrer' href="https://github.com/phillidp1989"
                ><i className="fab fa-github"></i></a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    )
}

export default Navbar
