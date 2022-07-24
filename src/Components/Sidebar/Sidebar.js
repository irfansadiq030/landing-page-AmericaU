import React from 'react'
import './Sidebar.css'
import Navmenu from './Navmenu/Navmenu'

const Sidebar = () => {
    return (
        <>
            <div className="sidebar-container">
                <div className="logo-container">
                    <img className='logo-img' src="images/logo.png" alt="" />
                </div>
                <Navmenu />
                <div className="meet-heroes-img-container">
                    <img className='meet-heroes-img' src="images/meethHeroes.jpg" alt="" />
                </div>
                <div className="portal-container">
                    <p>Parent/Teacher Login</p>
                </div>
                <p className='logout-link'>Logout</p>
            </div>
        </>
    )
}

export default Sidebar
