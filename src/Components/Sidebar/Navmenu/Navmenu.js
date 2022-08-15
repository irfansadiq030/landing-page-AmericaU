import React from 'react'
import './Navmenu.css'
import { NavLink } from "react-router-dom";

const Navmenu = () => {
  return (
    <nav className='nav-bar'>
      <ul className='nav-NavLinks-container'>
        <li><NavLink to='/news'>News</NavLink></li>
        <li><NavLink to='/season'>Season Pass</NavLink></li>
        <li><NavLink to='/events'>Events</NavLink></li>
        <li><NavLink to='/videos'>Videos</NavLink></li>
        <li><NavLink to='/games'>Games</NavLink></li>
        <li><NavLink to='/comics'>Comics</NavLink></li>
        <li><NavLink to='/leaper'>LeaperBoard</NavLink></li>
        <li><NavLink to='/blog'>Blog</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navmenu
