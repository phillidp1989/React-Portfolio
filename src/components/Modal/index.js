import React from 'react';
import './style.css';

function Modal(props) {      
    return (
        <div className="container">
      <div className="popup" id={props.id} >
        <div className="popup-inner">
          <div className="popup__photo">
            <img src={props.img} alt={props.picAlt} />
          </div>
          <div className="popup__text">
            <h1>{props.title}</h1>
            <p>
              {props.description}
            </p>
            <ul className="collapsible">
              <li>
                <div className="collapsible-header">
                  <i className="fas fa-desktop"></i>Demo
                </div>
                <div className="collapsible-body">
                  <img src={props.gif} alt={props.gifAlt} />
                </div>
              </li>
              <li>
                <div className="collapsible-header">
                  <i className="fas fa-link"></i>Links
                </div>
                <div className="collapsible-body">
                  <a
                    target="_blank"
                    rel='noopener noreferrer'
                    href={props.repo}
                    >Link to GitHub Repo</a><br /><br />
                  {props.deployed ? 
                  <a
                    target="_blank"
                    rel='noopener noreferrer'
                    href={props.deployed}
                    >Link to Deployed Application</a>: 
                    null}                  
                </div>
              </li>
            </ul>
          </div>
        </div>
        <a className="popup__close" href="#portfolio">X</a>
      </div>
    </div>
    )
}

export default Modal
