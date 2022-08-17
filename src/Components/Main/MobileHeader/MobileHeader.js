import React, { useContext } from 'react'
import { GlobalInfo } from '../../../App';
import { Link } from 'react-router-dom';

const MobileHeader = () => {
    const { sidebar, HideSidebar } = useContext(GlobalInfo);
    return (
        <>
            <div className="mobile-header">
                <div className="mobile-logo-container">
                    <Link to="/"> <img src="images/Logo.png" alt="Logo" /> </Link>
                </div>
                <div className='mobile-menu-icon-container'>
                    <h1 className="menu-text">Menu</h1>
                    <div className="hamburger-container">
                        <i onClick={() => HideSidebar(sidebar)} className="fa-solid fa-bars bars-icon"></i>
                    </div>
                </div>

            </div>
        </>
    )
}

export default MobileHeader
