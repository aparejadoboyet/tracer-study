import React, { useState, useCallback } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { HamburgerArrowTurnReverse } from 'react-animated-burgers'
import tempImage from '../../../src/assets/img/abstract-user-flat-4.svg'
import { HiOutlineHome, HiOutlineUserGroup, HiOutlineChartPie } from 'react-icons/hi'
import { RiGraduationCapLine, RiSurveyLine } from 'react-icons/ri'
import { BiBarChartSquare } from 'react-icons/bi'
import { GrLineChart } from 'react-icons/gr'
import { IoMdLogOut } from 'react-icons/io'
import './Admin.css'

const Admin = () => {

  const [isActive, setIsActive] = useState(false)

  const toggleButton = useCallback(
    () => setIsActive(prevState => !prevState),
    [],
  )

  const toggleLink = e => {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    e.target.classList.add('active');
  };

  return (

    <div className="container-fluid gx-0" style={{height:"100vh", width:"100%"}}>
      <div className="nav-wrapper row container-fluid h-100 w-100">

        {/* SIDEBAR */}

        <aside className={`d-flex flex-column flex-shrink-0 p-3 text-white bg-dark h-100 ${
          isActive ? 'sidebar-collapsed' : '' }`}
          style={{width: isActive ? "5rem":"280px"}}>
          <div className="d-flex align-items-center flex-direction-between m-3">
            <span className="flex-grow-1 logo">ADMIN</span>
            <HamburgerArrowTurnReverse
              buttonWidth={20}
              barColor="white"
              {...{ isActive, toggleButton }}
            />
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="user-image mb-3">
              <img src="" 
                style={{
                  backgroundImage:`url(${tempImage})`,
                    width: '3.5rem',
                    height: '3.5rem',
                    backgroundSize: 'cover'
              }}/>
            </div>
            <span className="user-name fs-5">User Name</span>
            <span className="user-details fs-6 fw-light fst-italic">User Details</span>
          </div>
          <hr/>
          <ul className="nav nav-pills d-flex flex-column h-100 mb-3">
            <li className="nav-item"><a href="#" onClick={toggleLink} className="active nav-link link-light d-flex align-items-center"><HiOutlineHome className='icon me-2'/>Dashboard</a></li>
            <li className="nav-item"><a href="#" onClick={toggleLink} className="nav-link link-light d-flex align-items-center"><RiGraduationCapLine className='icon me-2' />Alumni Profiles</a></li>
            <li className="nav-item"><a href="#" onClick={toggleLink} className="nav-link link-light d-flex align-items-center"><RiSurveyLine className='icon me-2' />Questionaire Data</a></li>
            <li className="nav-item"><a href="#" onClick={toggleLink} className="nav-link link-light d-flex align-items-center"><GrLineChart className='me-2 line-chart' />Analytics</a></li>
            <li className="nav-item"><a href="#" onClick={toggleLink} className="nav-link link-light d-flex align-items-center"><HiOutlineUserGroup className='icon me-2'/>Group Members</a></li>
            <hr className='mt-auto'/>
            <li className="nav-item"><a href="#" onClick={toggleLink} className="nav-link link-light d-flex align-items-center"><IoMdLogOut className='icon me-2'/>Log-out</a></li>

          </ul>
        </aside>

        {/* MAIN */}

        <main className="main">

        </main>

      </div>
    </div>

  )
}

export default Admin