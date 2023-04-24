import React, { useState, useEffect } from 'react'
import { db, ref, onValue } from '../../../../firebase'
import './Card.css'

export const Card = ({batch, onClose}) => {

  const [batchData, setBatchData] = useState("");

  useEffect(() => {

    const dataRef = ref(db, `batches/${batch}`);
    onValue(dataRef, (snapshot) => {
      if(snapshot.val() !=null) {
        setBatchData(snapshot.val())
      }
    });
  }, [{batch}]);

  return (

    <div className='card'>
      
      <div className="header">
        <h4>{batchData}</h4>
        <button onClick={onClose}>Close</button>
      </div>

      <div className="card-content">Content</div>
      
    </div>

  )
}
