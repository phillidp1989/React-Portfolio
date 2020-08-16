import React from 'react';
import './style.css'

function Row(props) {
    return (
        <div id={props.id} className="row">
            {props.children}
        </div>
    )
}

export default Row
