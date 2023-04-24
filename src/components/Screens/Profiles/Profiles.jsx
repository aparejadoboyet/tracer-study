import React, { useState, useLayoutEffect, useRef } from 'react'
import './Profiles.css'
import { Card } from './Card/Card';

function Profiles() {

  const [active, setActive] = useState(false);
  const [activeBatch, setActiveBatch] = useState("");
  const profilesRef = useRef(null);

  const handleCloseCard = () => {
    setActive(false);
    setActiveBatch("");
  }

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (profilesRef.current) {
        const rect = profilesRef.current.getBoundingClientRect();
        if (rect.top > window.innerHeight || rect.bottom < 0) {
          setActive(false);
          setActiveBatch("");
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (batch) => {
    setActive(true);
    setActiveBatch(batch);
    console.log(batch)
  }

  return (
    <div ref={profilesRef} className="profiles">
    
    {/* HEADER */}
    
      <div className="awesome">
        <span>PROFILES</span>
      </div>

    {/* CONTENT */}

      <div className="container">

        <div className={!active ? 'batch-container' : 'batch-container-active'}>

          <div className={activeBatch==="batch-2020"?"batch active": "batch 2020"} onClick={()=>handleClick('batch-2020')}>2020</div>
          <div className={activeBatch==="batch-2021"?"batch active": "batch 2021"} onClick={()=>handleClick('batch-2021')}>2021</div>
          <div className={activeBatch==="batch-2022"?"batch active": "batch 2022"} onClick={()=>handleClick('batch-2022')}>2022</div>

        </div>  

        <div className={!active? 'card-container' : 'card-container-active'}>

          {activeBatch && <Card onClose={handleCloseCard} batch={activeBatch} />}

        </div>
        
      </div>

    </div>
  )
}

export default Profiles