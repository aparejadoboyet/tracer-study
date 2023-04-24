import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../../assets/img/csd-logo.png'

function Navbar() {

    const [menu, setMenu] = useState(false);
    const handleClick = () => setMenu(!menu);
    
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname)

    useEffect(()=>{
        setActiveLink(location.pathname);
    }, [location.pathname])

    const handleLinkMouseEnter = (link) => {
    setActiveLink(link);
  };

  const handleLinkMouseLeave = () => {
    setActiveLink(location.pathname);
  };

// balik sa false pag sumobra an width
    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)");    

        function handleMediaChange(event) {
            if (event.matches) {
                setMenu(false);
            }
        }

        mediaQuery.addListener(handleMediaChange);
        return () => {
            mediaQuery.removeListener(handleMediaChange);
        };
    }, []);

  return (

    <div className="navbar">

        <div className="logo">
            <Link to='/'>
                <img className='logo-pic' src={Logo} alt="" srcSet="" />
            </Link>
        </div>

        <div className= {menu ? "burger burger-active":"burger"} onClick={handleClick}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>

        <div className={menu ? 'nav-menu nav-menu-active' : 'nav-menu'}>
            <ul>
                <li>
                    <Link className={activeLink == '/' ? 'nav-links link-active' : 'nav-links'} to='/'onMouseEnter={()=>handleLinkMouseEnter('/')} onMouseLeave={handleLinkMouseLeave} onClick={handleClick}>Home</Link>
                </li>
                <li>
                    <Link className={activeLink == '/results' ? 'nav-links link-active' : 'nav-links'} to='/results' onMouseEnter={()=>handleLinkMouseEnter('/results')} onMouseLeave={handleLinkMouseLeave} onClick={handleClick}>Results</Link>
                </li>
                <li>
                    <Link className={activeLink == '/profiles' ? 'nav-links link-active' : 'nav-links'} to='/profiles' onMouseEnter={()=>handleLinkMouseEnter('/profiles')} onMouseLeave={handleLinkMouseLeave} onClick={handleClick}>Profiles</Link>
                </li>
                <li>
                    <Link className={activeLink == '/network' ? 'nav-links link-active' : 'nav-links'} to='/network' onMouseEnter={()=>handleLinkMouseEnter('/network')} onMouseLeave={handleLinkMouseLeave} onClick={handleClick}>Network</Link>
                </li>
                <li>
                    <Link className={activeLink == '/resources' ? 'nav-links link-active' : 'nav-links'} to='/resources' onMouseEnter={()=>handleLinkMouseEnter('/resources')} onMouseLeave={handleLinkMouseLeave} onClick={handleClick}>Resources</Link>
                </li>
                <li>
                    <Link className={activeLink == '/about' ? 'nav-links link-active' : 'nav-links'} to='/about' onMouseEnter={()=>handleLinkMouseEnter('/about')} onMouseLeave={handleLinkMouseLeave} onClick={handleClick}>About Us</Link>
                </li>
                <li>
                    <Link className={activeLink == '/contact' ? 'nav-links link-active' : 'nav-links'} to='/contact' onMouseEnter={()=>handleLinkMouseEnter('/contact')} onMouseLeave={handleLinkMouseLeave} onClick={handleClick}>Contact</Link>
                </li>
            </ul>
        </div>

        <div className={menu ? 'overlay-active overlay' : 'overlay'}></div>

    </div>
  )
}

export default Navbar