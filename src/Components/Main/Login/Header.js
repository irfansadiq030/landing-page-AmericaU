import React from 'react'

const Header = () => {
    return (
        <header className=' lg:absolute lg:top-1 left-1'>
            <img className='logo' src={process.env.PUBLIC_URL + "logo512.png"} alt="Logo" />
        </header>
    )
}

export default Header