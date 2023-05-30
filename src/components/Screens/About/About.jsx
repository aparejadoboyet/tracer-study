import React from 'react'
import './About.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
  return (

    <div className="about">

      <section className="container-fluid">
        <div className="row">
          <div className="col-12 text-center bg-danger">
            <h2>Meet the GROUP 12</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-3 p-2 bg-primary">
            <div className="card bg-success">
              CARD 1
            </div>
          </div>
        </div>
      </section>

    </div>

  )
}

export default About