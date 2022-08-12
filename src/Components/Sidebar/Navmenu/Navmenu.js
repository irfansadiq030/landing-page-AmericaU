import React from 'react'
import './Navmenu.css'
import { Link } from "react-router-dom";

const Navmenu = () => {
  return (
    <nav className='nav-bar'>
      <ul className='nav-links-container'>
        <li><Link to='/'>News</Link></li>
        <li><Link to='/'>Season Pass</Link></li>
        <li><Link to='/'>Events</Link></li>
        <li><Link to='/'>Videos</Link></li>
        <li><Link to='/'>Games</Link></li>
        <li><Link to='/'>Comics</Link></li>
        <li><Link to='/'>LeaperBoard</Link></li>
        <li><Link to='/'>Blog</Link></li>
      </ul>
    </nav>
  )
}

export default Navmenu
