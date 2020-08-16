import React from 'react';
import resume from './assets/Dan-Phillips-Resume.pdf';

function Details() {
    return (
        <div className="col s12 m6 l8" id="details">
        <h1>Dan Phillips</h1>
        <div className="line"></div>
        <h2>Full-Stack Web Developer</h2>
        <h5>
          <span><i className="fas fa-phone"></i></span> 07969569297
        </h5>
        <h5>
          <span><i className="fas fa-envelope"></i></span> d.p.phillips@bham.ac.uk
        </h5>
        <h5>
          <a
            target="_blank"
            rel='noopener noreferrer'
            href="https://www.linkedin.com/in/daniel-phillips-65775485/"
            >LinkedIn</a> | <a target="_blank" rel='noopener noreferrer' href="https://github.com/phillidp1989">Github</a>
        </h5>
        <div className="buttons m-2">
          <a
            className="waves-effect waves-light teal accent-2 black-text btn"
            href={resume}
            download="Dan-Phillips-Resume"
            >Download Resume</a>
        </div>
      </div>
    )
}

export default Details
