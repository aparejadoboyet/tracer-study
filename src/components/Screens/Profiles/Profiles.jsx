import React, { useState, useEffect } from 'react';
import './Profiles.css';
import Accordion from 'react-bootstrap/Accordion';
import ProfileCard from './Card/Card';
import { db, ref, onValue } from '../../../firebase';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Dna } from 'react-loader-spinner';

function Profiles() {
  const [users, setUsers] = useState([]);
  const [uniqueBatches, setUniqueBatches] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
        setIsLoading(false);
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

  if (isLoading) {
    return (
      <div className="loader">
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    );
  }

  return (
    <div className="profiles">
      <div className="wrapper-accordion">

      <Accordion>
        {uniqueBatches.map((batch) => (
          <Accordion.Item key={batch} eventKey={batch}>
            <Accordion.Header>Batch&nbsp;{batch}</Accordion.Header>
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
    </div>
  );
}

export default Profiles;
