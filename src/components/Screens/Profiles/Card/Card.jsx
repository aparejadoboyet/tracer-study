import React from 'react';
import './Card.css';
import Card from 'react-bootstrap/Card';

const ProfileCard = ({ user }) => {
  const { FirstName, LastName, Age } = user;

  return (
    <Card 
      className="profile-card"
      // style={{ 
      //   maxWidth: 'fit-content' 
      // }}
    >
      <Card.Img variant="top" src={user.imageResized} alt="Profile Image" className="profile-image" />
      <Card.Body>
        <Card.Title className="profile-name">{`${FirstName} ${LastName}`}</Card.Title>
        <Card.Text>{`Age: ${Age}`}</Card.Text>
        {/* Add additional Card.Text or Card.Subtitle components for other user data */}
      </Card.Body>
    </Card>
  );
};

export default ProfileCard;
