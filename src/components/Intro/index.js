import React from 'react';
import Row from '../Row/index';
import Profile from '../Profile/index';
import Details from '../Details';
import './style.css';

function Intro() {
    return (
        <Row id='home'>
        <Profile />  
        <Details />
        </Row>
    )
}

export default Intro
