import React from 'react'

function CarouselItem({ href, icon, title }) {
    return (
        <React.Fragment>
            <a className="carousel-item" href={href}><i className={icon}></i>
                <h4>{title}</h4>
            </a>
        </React.Fragment>
    )
}

export default CarouselItem
