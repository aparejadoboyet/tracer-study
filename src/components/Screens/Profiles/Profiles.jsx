import React, { useState, useEffect } from 'react';
import './Profiles.css';
import Accordion from 'react-bootstrap/Accordion';
import ProfileCard from './Card/Card';
import { db, ref, onValue } from '../../../firebase';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Profiles() {
  const [users, setUsers] = useState([]);
  const [uniqueBatches, setUniqueBatches] = useState([]);

  useEffect(() => {
    const usersRef = ref(db, 'formAnswers');
    onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const newUsers = Object.entries(data).map(([userId, user]) => ({
          id: userId,
          ...user,
        }));

        const newBatches = newUsers.reduce((acc, user) => {
          if (!acc.includes(user.Batch)) {
            acc.push(user.Batch);
          }
          return acc;
        }, []);

        setUsers(newUsers);
        setUniqueBatches(newBatches);
      }
    });
  }, []);

  const getProfileCardSets = (batch) => {
    const batchUsers = users.filter((user) => user.Batch === batch);
    const profileCardSets = [];
    for (let i = 0; i < batchUsers.length; i += 3) {
      const profileCardSet = batchUsers.slice(i, i + 3);
      profileCardSets.push(profileCardSet);
    }
    return profileCardSets;
  };

  return (
    <div className="profiles">
      <Accordion>
        {uniqueBatches.map((batch) => (
          <Accordion.Item key={batch} eventKey={batch}>
            <Accordion.Header>{batch}</Accordion.Header>
            <Accordion.Body className="acc-body">
              {users.filter((user) => user.Batch === batch).length > 3 ? (
                <Carousel
                  showThumbs={false}
                  showStatus={false}
                  showIndicators={true}
                  infiniteLoop
                  emulateTouch
                  autoPlay
                  interval={5000}
                  stopOnHover
                  swipeable
                  swipeScrollTolerance={5}
                  transitionTime={500}
                  dynamicHeight={false}
                >
                  {getProfileCardSets(batch).map((cardSet, index) => (
                    <div key={index} className="profile-card-set">
                      {cardSet.map((user) => (
                        <ProfileCard key={user.id} user={user} />
                      ))}
                    </div>
                  ))}
                </Carousel>
              ) : (
                <div className="profile-cards">
                  {users
                    .filter((user) => user.Batch === batch)
                    .map((user) => (
                      <ProfileCard key={user.id} user={user} />
                    ))}
                </div>
              )}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}

export default Profiles;
