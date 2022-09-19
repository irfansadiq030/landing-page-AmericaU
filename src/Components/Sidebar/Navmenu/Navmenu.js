import React, { useContext } from 'react'
import './Navmenu.css'
import { NavLink } from "react-router-dom";
import { GlobalInfo } from '../../../App';

const Navmenu = () => {
  const { sidebar, HideSidebar } = useContext(GlobalInfo);
  return (
    <nav className='nav-bar'>
      <ul className='nav-NavLinks-container'>
        <li><NavLink onClick={() => HideSidebar(sidebar)} to='/news'>News</NavLink></li>
        <li><NavLink onClick={() => HideSidebar(sidebar)} to='/seasonpass'>Season Pass</NavLink></li>
        <li><NavLink onClick={() => HideSidebar(sidebar)} to='/events'>Events</NavLink></li>
        <li><NavLink onClick={() => HideSidebar(sidebar)} to='/videos'>Videos</NavLink></li>
        <li><NavLink onClick={() => HideSidebar(sidebar)} to='/games'>Games</NavLink></li>
        <li><NavLink onClick={() => HideSidebar(sidebar)} to='/comics'>Comics</NavLink></li>
        <li><NavLink to='/leaper'>LeaderBoard</NavLink></li>
        <li><NavLink onClick={() => HideSidebar(sidebar)} to='/blog'>Blog</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navmenu
