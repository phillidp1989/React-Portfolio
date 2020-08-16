import React, { useState, useEffect } from 'react';
import Row from '../Row';
import './style.css';
import M from 'materialize-css';
import CarouselItem from '../CarouselItem';

function Carousel() {

    const [projects, setProjects] = useState([
        {
            title: "Full-stack recipe search",
            href: "#popup-grub",
            icon: "fas fa-utensils"
        },
        {
            title: "Book Search",
            href: "#popup-book",
            icon: "fas fa-book"
        },
        {
            title: "Employee Tracker",
            href: "#popup-employee",
            icon: "fas fa-briefcase"
        },
        {
            title: "Team Generator CLI",
            href: "#popup-team",
            icon: "fas fa-users"
        },
        {
            title: "Employee Directory",
            href: "#popup-directory",
            icon: "fas fa-sitemap"
        },
    ])
    
    useEffect(() => {        
        M.AutoInit();
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.carousel');
            function carouselItems(mediumScreen) {
                if (mediumScreen.matches) {
                    var instances = M.Carousel.init(elems, {numVisible: 3,
                        padding: 0,
                        shift: 0});                     
                } else {
                    var instances = M.Carousel.init(elems, {numVisible: 5,
                        padding: 100}); ;
                }
            }            
            var mediumScreen = window.matchMedia("(max-width: 767px)")
            carouselItems(mediumScreen);
            mediumScreen.addListener(carouselItems);
                       
          });        
      }, []);    

    return (        
        <Row id="apps">
            <div className="carousel">
                {projects.map((project, index) => (
                    <CarouselItem 
                    key={index}
                    title={project.title} 
                    icon={project.icon} 
                    href={project.href}/>
                ))}
            </div>
        </Row>        
    )
}

export default Carousel
