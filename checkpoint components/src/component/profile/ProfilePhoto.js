import React from 'react';
import icon from './myphoto.JPEG'; 

export default function ProfilePhoto (){
    
    return (
        <div className="profilPhoto" >
        <h3>this is the user`s photo</h3>
        <img src={icon} className="photopro" alt="profile photo" />
      </div>

    );
}
