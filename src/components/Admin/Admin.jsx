import React, { useState, useCallback } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { HamburgerArrowTurn } from 'react-animated-burgers'
import tempImage from '../../../src/assets/img/abstract-user-flat-4.svg'
import { HiOutlineHome, HiOutlineUserGroup, HiOutlineChartPie } from 'react-icons/hi'
import { RiGraduationCapLine, RiSurveyLine } from 'react-icons/ri'
import { BiBarChartSquare } from 'react-icons/bi'
import { GrLineChart } from 'react-icons/gr'
import './Admin.css'

const Admin = () => {

  const [isActive, setIsActive] = useState(false)

  const toggleButton = useCallback(
    () => setIsActive(prevState => !prevState),
    [],
  )

  return (

    <div className="container-fluid gx-0" style={{height:"100vh", width:"100%"}}>
      <div className="nav-wrapper row container-fluid h-100 w-100">

        <aside className="d-flex flex-column flex-shrink-0 p3 text-white bg-dark" style={{width: "280px"}}>

          <div className="d-flex align-items-center flex-direction-between">
            <span className="flex-grow-1">ADMIN</span>
            <HamburgerArrowTurn
              buttonWidth={20}
              barColor="white"
              {...{ isActive, toggleButton }}
            />
          </div>

          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="user-image">
              <img src="" 
                style={{
                  backgroundImage:`url(${tempImage})`,
                    width: '4rem',
                    height: '4rem',
                    backgroundSize: 'cover'
              }}/>
            </div>
            <span className="fs-5 fw-bold">User Name</span>
            <span className="fs-6 fw-light fst-italic">User Details</span>
          </div>

          <hr/>

          <nav className="nav nav-pills d-flex justify-content-center">
            <a href="#" aria-label='Data from the tracer study.' className="nav-link link-light d-flex align-items-center">
              <HiOutlineHome className='me-2'/>
              Dashboard</a>
          </nav>

          <hr/>

          <ul className="nav nav-pills flex-column">

            <span className="fw-lighter">Data</span>

            <li className="nav-item"><a href="" className="nav-link link-light d-flex align-items-center"><RiGraduationCapLine className='me-2' />Alumni Profiles</a></li>
            <li className="nav-item"><a href="" className="nav-link link-light d-flex align-items-center"><RiSurveyLine className='me-2' />Alumni Survey</a></li>
            <li className="nav-item"><a href="" className="nav-link link-light d-flex align-items-center"><HiOutlineUserGroup className='me-2'/>Group Members</a></li>
          </ul>

          <hr/>

          <ul className="nav nav-pills flex-column">

            <span className="fw-lighter">Charts/Graphs</span>

            <li className="nav-item"><a href="" className="nav-link link-light d-flex align-items-center"><BiBarChartSquare className='me-2' />Bar</a></li>
            <li className="nav-item"><a href="" className="nav-link link-light d-flex align-items-center"><HiOutlineChartPie className='me-2' />Pie</a></li>
            <li className="nav-item"><a href="" className="nav-link link-light d-flex align-items-center"><GrLineChart className='me-2 line-chart' />Line</a></li>
          </ul>

        </aside>

        <div className="main col-lg-9 col-md-8"></div>

      </div>
    </div>

  )
}

export default Admin