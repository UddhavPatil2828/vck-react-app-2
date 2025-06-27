import React, { useState } from 'react';
import './header.css'
import {Link} from 'react-router-dom'
const Header =()=>{
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return(
    <div>
<header>
  <nav id='navbar'>
    <div className='brand'><b>Vivekanand College</b></div>
    
    <div className='hamburger' onClick={toggleMenu}>
            {menuOpen ? '✖' : '☰'}
    </div>

  <div className={`navbar-links ${menuOpen ? 'show' : ''}`}>
    <Link to="/home">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/courses">Courses</Link>
    <Link to="/contacts">Contacts</Link>
    </div>
    <Link to="/admissions" className='apply-button'>Apply Now!</Link>
  </nav>
</header>
    </div>
  )
}
export default Header;