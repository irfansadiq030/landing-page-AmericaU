import React, { useContext } from 'react'
import { GlobalInfo } from '../../../App';

const MobileHeader = () => {
    const { sidebar, HideSidebar } = useContext(GlobalInfo);
    return (
        <>
            <div className="mobile-header">
                <div className="mobile-logo-container">
                    <img src="images/Logo.png" alt="" />
                </div>
                <div className='mobile-menu-icon-container'>
                    <h1 className="menu-text">Menu</h1>
                    <div className="hamburger-container">
                        <i onClick={() => HideSidebar(sidebar)} class="fa-solid fa-bars bars-icon"></i>
                    </div>
                </div>

            </div>
        </>
    )
}

export default MobileHeader
