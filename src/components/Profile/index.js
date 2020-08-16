import React from 'react';
import profile from './assets/profile.jpg';

function Profile() {
    return (
        
            <div className="image-col col s12 m6 l4">
                <img
                className="responsive-img profile z-depth-5"
                src={profile}
                alt="profile"
            />
            </div>        
    )
}

export default Profile
