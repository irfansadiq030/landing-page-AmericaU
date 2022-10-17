import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const ThankYou = () => {
    return (
        <div className="forgot-password-container sign-up-comingsoon-container mx-auto flex flex-col">
            {/* Back Button */}
            <Link to="/" className="back-button">
                <img src="images/icon-back.png" alt="" srcset="" />
            </Link>
            {/* Heading */}
            <div className="sign-up-comingsoon-heading-container mx-auto flex justify-center items-center">
                <h1 className='text-center reset-form-heading uppercase signup-coming-soon-heading'>Thank you!</h1>
            </div>

            {/* Box Content Container */}
            <main className='signup-comingsoon-main flex-col flex items-center justify-center'>
                <h1 className="info-text">
                    We will email you soon!
                </h1>
                <img className='robo-icon' src="images/robo.png" alt="" />

            </main>
        </div>
    )
}

export default ThankYou