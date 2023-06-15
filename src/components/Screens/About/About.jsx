import React from 'react'
import './About.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Members from './Members/Members';

function About() {
  return (

    <div className="about">

      <section className="container-fluid bg-danger py-3">
        <div className="row container mx-auto bg-success">
          <div className="col-12 bg-primary">
            <h1 className='text-center'>Members</h1>
          </div>
          <div className="col-12 bg-primary">
            <Members />
          </div>
        </div>
      </section>

    </div>

  )
}

export default About