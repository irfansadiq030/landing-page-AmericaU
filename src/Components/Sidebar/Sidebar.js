import React, { useContext } from 'react'
import './Sidebar.css'
import Navmenu from './Navmenu/Navmenu'
import { GlobalInfo } from '../../App'


const Sidebar = () => {
    const { sidebar } = useContext(GlobalInfo);
    return (
        <>
            <div style={sidebar ?  { display:'flex' } : { } } className='sidebar-container'>
                <div className='logo-nav-container'>
                    <div className="logo-container">
                        <img className='logo-img' src="images/logo.png" alt="" />
                    </div>
                    <Navmenu />
                </div>

                <div className='sidebar-footer-container'>
                    <div className="meet-heroes-img-container">
                        <img className='meet-heroes-img' src="images/meethHeroes.jpg" alt="" />
                    </div>
                    <div className="portal-container">
                        <img className='portal-img' src="images/portal-btn.png" alt="" />
                        <p className='portal-text'>Parent/Teacher Login</p>
                    </div>
                    <p className='logout-link'>Logout</p>
                </div>

            </div>
        </>
    )
}

export default Sidebar
