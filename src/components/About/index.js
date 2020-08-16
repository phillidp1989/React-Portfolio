import React from 'react';
import Row from '../Row/index';
import './style.css';


function About() {
    return (
        <React.Fragment>
        <Row id="about-me-row">
            <h1>About Me</h1>
        </Row>        
        <Row id="brand-statement">
        <div className="col s12" id="about-me">
        <p>
          I am a full-stack web developer trained at the University of
          Birmingham Coding Bootcamp, with a background in Higher Education,
          having worked most recently as Quality Officer and manager of the
          Curriculum Management Team. As part of the coding bootcamp, I have
          developed numerous web applications, utilising HTML, CSS, JavaScript,
          jQuery and APIs. I am a very strong communicator who can collaborate
          well and manage my own time and my management experience demonstrates
          that I can effectively lead a team. I am a quick learner and very
          resourceful. I thoroughly enjoy solving problems and learning new
          skills wherever I can. I look forward to putting my new found skills
          to the test in developing new technologies, making use of my
          experience of managing teams and technical expertise gathered during
          my training as a web developer.
        </p>
      </div>
        </Row>
        </React.Fragment>               
    )
}

export default About
