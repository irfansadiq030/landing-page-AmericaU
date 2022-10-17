import React from 'react'
import './index.css'
import { Link, useLocation } from 'react-router-dom'

const MessageViewer = (props) => {
    const location = useLocation();

    return (
        <>

            <div className="forgot-password-container mx-auto flex flex-col">
                {/* Back Button */}
                <Link to="/" className="back-button">
                    <img src="images/icon-back.png" alt="" srcset="" />
                </Link>

                {/* Heading */}
                <h1 className='reset-form-heading uppercase text-center'>OOPS! WE'VE GOT AN ISSUE!</h1>

                {/* Box Content Container */}
                <main className='main flex-col flex items-center justify-center'>
                    <h1 className='message'>
                        {
                            location.state.msg && location.state.msg
                        }
                    </h1>
                    {
                        props.is_link && props.is_link === true ?
                            <Link className='return-link uppercase' to="/">Return to Login</Link>
                            :
                            ''
                    }

                </main>

                {/* Footer Container */}
                <div className="bottom-container flex justify-between items-end">
                    <a href="https://heroesleaguegameday.com/"> <h1 className="learn-more-heading uppercase">Learn More</h1> </a>
                    <div className="flex flex-col items-center">
                        <p className='dont-have-account uppercase'>Don't have an account?</p>
                        <a href="/"><h1 className="signup-text uppercase">Sign Up</h1></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MessageViewer