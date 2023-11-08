import React from 'react';
import './ProfileCard.css';

export default function ProfileCard(props) {
  return (
    <div className="profile-container"> {}
    <img src={props.imageSrc} alt="Profile" className="profile-image" /> {}
    <div className='profile-konten'>
         
      <p className="profile-info">{props.nama}</p> 
      <p className="profile-info">{props.nim}</p>
    </div>
     
    </div>
  );
}