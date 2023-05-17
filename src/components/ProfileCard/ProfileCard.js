import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ props }) => {
  return (
    <div className="profile-card">
      <img src={props.photo} alt="Profile" className="profile-picture" />
      <h2 className="name">{props.name}</h2>
      <p className="description">{props.description}</p>
      <p className="designation">{props.designation}</p>
    </div>
  );
};

export default ProfileCard;
