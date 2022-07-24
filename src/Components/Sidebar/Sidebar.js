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
            </div>
        </>
    )
}

export default Sidebar
