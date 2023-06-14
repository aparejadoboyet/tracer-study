import React, { useState, useEffect } from 'react';
import './Results.css';
import Chart from 'react-apexcharts';
import { db, ref, onValue } from '../../../firebase'; // Import 'onValue' and 'ref' from Firebase

function Results() {
  const [employmentData, setEmploymentData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const usersRef = ref(db, 'formAnswers');
      
      onValue(usersRef, (snapshot) => {
        const data = snapshot.val();

        if (data) {
          const employmentStatus = {};
          Object.values(data).forEach((user) => {
            const { Batch, EmploymentStatus } = user;
            if (Batch && EmploymentStatus === 'Employed') {
              employmentStatus[Batch] = (employmentStatus[Batch] || 0) + 1;
            }
          });
          const categories = Object.keys(employmentStatus);
          const series = Object.values(employmentStatus);

          setEmploymentData({ categories, series });
        }
      });
    };

    fetchData();
  }, []);

  const options = {
    chart: {
      id: 'employment-bar',
    },
    xaxis: {
      categories: employmentData.categories || [],
    },
  };

  const series = [
    {
      name: 'Employment Rate',
      data: employmentData.series || [],
    },
  ];

  return (
    <div className="results">
      <div className="header">
        <h3>Results</h3>
      </div>

      <div className="content">
        <div className="chart 1">
          <h5 className="title">Employment Rate</h5>
          <div className="row">
            <div className="col-4">
              <Chart options={options} series={series} type="bar" width="500" />
            </div>
          </div>
        </div>

        <div className="chart 2">
          <h5 className="title">Chart 2</h5>
          <div className="row">
            <div className="col-4">
              {/* Add your code for Chart 2 here */}
            </div>
          </div>
        </div>

        <div className="chart 3">
          <h5 className="title">Chart 3</h5>
          <div className="row">
            <div className="col-4">
              {/* Add your code for Chart 3 here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Results;
