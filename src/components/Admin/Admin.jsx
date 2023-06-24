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

        <nav className="nav d-flex flex-direction-column justify-content-start bg-primary h-100 col-xl-2 col-lg-3 col-md-4 p-4 overflow-auto">
          <div className="row d-flex w-100 justify-content-between align-items-center mb-3">
            <div className="col-10">ADMIN</div>
            <div className="burger col-2">
              <HamburgerArrowTurn
                buttonWidth={20}
                barColor="white"
                {...{ isActive, toggleButton }}
              />
            </div>
          </div>
          <div className="user row flex-column text-center w-100">
            <div className="user-image">
              <img src="" 
                style={{
                  backgroundImage:`url(${tempImage})`,
                    width: '5rem',
                    height: '5rem',
                    backgroundSize: 'cover'
              }}/>
            </div>
            <div className="user-name fs-5 fw-bold">User Name</div>
            <div className="user-details fw-light fst-italic">User Details</div>
          </div>
          <hr className='w-100'/>
          <div className="row w-100">
            <a href="#" aria-label='Data from the tracer study.' className="dashboard text-black text-center nav-link fw-bold w-100"><HiOutlineHome />Dashboard</a>
          </div>
          <hr className='w-100'/>
          <ul className="row navbar-nav flex-column">
            <div className="header text-start">Data</div>
            <li className="nav-item"><a href="" className="nav-link ms-2 fw-bold"><RiGraduationCapLine />Alumni Profiles</a></li>
            <li className="nav-item"><a href="" className="nav-link ms-2 fw-bold"><RiSurveyLine />Alumni Survey</a></li>
            <li className="nav-item"><a href="" className="nav-link ms-2 fw-bold"><HiOutlineUserGroup/>Group Members</a></li>
          </ul>
          <hr className='w-100'/>
          <ul className="row navbar-nav flex-column">
            <div className="header text-start">Charts/Graphs</div>
            <li className="nav-item"><a href="" className="nav-link ms-2 fw-bold"><BiBarChartSquare />Bar</a></li>
            <li className="nav-item"><a href="" className="nav-link ms-2 fw-bold"><HiOutlineChartPie />Pie</a></li>
            <li className="nav-item"><a href="" className="nav-link ms-2 fw-bold"><GrLineChart />Line</a></li>
          </ul>
        </nav>

        <div className="main col-lg-9 col-md-8"></div>

      </div>
    </div>

  )
}

export default Admin