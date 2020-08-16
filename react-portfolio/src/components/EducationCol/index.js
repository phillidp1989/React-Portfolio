import React from 'react';

function EducationCol(props) {
    return (
        <div className="col s12 m4 educ-ex" id={props.id}>
        <img
          className="educ-img"
          src={props.img}
          alt={props.alt}
        />
        <h4>{props.title}</h4>
        <h5>{props.institution}</h5>
        <p>
          {props.description}
        </p>
        <h5>{props.year}</h5>
      </div>
    )
}

export default EducationCol
