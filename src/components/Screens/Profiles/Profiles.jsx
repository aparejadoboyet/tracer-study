import React, { useState, useEffect } from 'react';
import './Profiles.css'
import Accordion from 'react-bootstrap/Accordion';
import ProfileCard from './Card/Card';
import { db, ref, onValue } from '../../../firebase';

function Profiles() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const usersRef = ref(db, 'formAnswers');
    onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const usersArray = Object.entries(data).map(([userId, user]) => ({
          id: userId,
          ...user,
        }));
        setUsers(usersArray);
      }
    });
  }, []);

  return (
    <div className="profiles">
      <Accordion>
        {users.map((user) => (
          <Accordion.Item key={user.id} eventKey={user.Batch}>
            <Accordion.Header>{user.Batch}</Accordion.Header>
            <Accordion.Body>
              <ProfileCard user={user} />
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}

export default Profiles;
