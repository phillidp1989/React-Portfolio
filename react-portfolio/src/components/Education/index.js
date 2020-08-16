import React, { useState } from 'react';
import './style.css';
import Row from '../Row';
import EducationCol from '../EducationCol';

function Education() {
    const [education, setEducation] = useState([
        {
            id: "birmingham",            
            img: "https://i.guim.co.uk/img/media/10776732e4de44ac526313d88d7090cd5a82461d/19_52_1259_755/master/1259.jpg?width=1200&quality=85&auto=format&fit=max&s=3511729fb28b5130b4a69f27b2082481",
            alt: "uob",
            title: "Full-Stack Bootcamp",
            institution: "University of Birmingham",
            description: "HTML5, HTML6, CSS, JavaScript, jQuery, Node.js, SQL, MongoDB, Jest, Handlebars, Express, React, MERN",
            year: "2020"
        },
        {
            id: "manchester",            
            img: "https://content.presspage.com/uploads/1369/universityofmanchester-845224.jpg?10000",
            alt: "uom",
            title: "BA Criminology",
            institution: "University of Manchester",
            description: "Analytical skills, research methods, psychological, sociological and anthropological practice",
            year: "2010"
        },
        {
            id: "work-uob",            
            img: "https://theboar.org/wp-content/uploads/2019/12/birmingham-uni.jpg",
            alt: "uni-birm",
            title: "Work Experience",
            institution: "University of Birmingham",
            description: "Head of CMT, College Quality Officer, Admissions Officer",
            year: "2010-present"
        },
    ])
    
    return (
        <React.Fragment>
        <Row id="education-header">
            <h1>Education and Experience</h1>
        </Row>
        <Row id="education-details">
            {education.map((ed, index) => (
                <EducationCol 
                    key={index}
                    id={ed.id}
                    img={ed.img}
                    alt={ed.alt}
                    title={ed.title}
                    institution={ed.institution}
                    description={ed.description}
                    year={ed.year}
                />
            ))}
        </Row>
        </React.Fragment>
    )
}

export default Education
