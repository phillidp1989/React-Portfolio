import React, { useEffect } from 'react';
import M from 'materialize-css';
import './style.css'

function Sidenav() {
    useEffect(() => {        
        M.AutoInit();
      }, []);
    
    return (
        <React.Fragment>
            <ul className="sidenav purple lighten-4" id="mobile-demo">
      <li><a href="#brand-statement">About Me</a></li>
      <li><a href="#portfolio-heading">Portfolio</a></li>
      <li><a href="#education-details">Education & Experience</a></li>
      <li>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/daniel-phillips-65775485/"
          ><i className="fab fa-linkedin"></i
        ></a>
      </li>
      <li>
        <a target="_blank" href="https://github.com/phillidp1989"
          ><i className="fab fa-github"></i
        ></a>
      </li>
    </ul>
        </React.Fragment>
    )
}

export default Sidenav
