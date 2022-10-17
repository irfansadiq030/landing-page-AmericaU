import React, { Fragment, useState } from 'react'
import './index.css'
import { Link } from 'react-router-dom'

import axios from 'axios'
import Spinner from './../../../Shared/Spinner/Spinner';

const ForgotPassword = () => {

    const [value, setValue] = useState("")
    const [spinner, setSpinner] = useState(false);
    const [sent, setSent] = useState(false)

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (!value) return window.alert("Please enter username.");

        setSpinner(true);

        try {
            const res = await axios.get(`https://api.americau.com/user/update-password?username=${value}`);

            if (res.data === "OK") {
                setSent(true)
            }

        } catch (error) {
            if ("ERR_BAD_REQUEST" == error.code) {
                window.alert("Username not found.")
            }
        }

        setSpinner(false);
    }

    return (
        <>
            <div className="forgot-password-container mx-auto flex flex-col">
                {/* Back Button */}
                <Link to="/" className="back-button">
                    <img src="images/icon-back.png" alt="Back icon" srcset="" />
                </Link>

                {/* Heading */}
                <div className="mb-4 text-center">
                    <h1 className='heading-container reset-form-heading uppercase text-center'>Reset Password</h1>
                    {!sent && <h2 style={{ color: "#002356" }} className='text-2xl normal-case '>
                        Enter your username to receive an email to reset your password
                    </h2>}
                </div>

                {/* Box Content Container */}
                <main className='login-main  flex-col flex items-center justify-center'>
                    {!sent && <form onKeyDown={(event) => event.key === "Enter" && handleFormSubmit(event)} onSubmit={handleFormSubmit} className='w-full reset-form login-form flex justify-between flex-col items-center'>
                        {spinner && <Spinner />}
                        {!spinner && <Fragment>
                            <input value={value} onChange={(e) => setValue(e.target.value)} name="Username" required type="text" placeholder="Username" className="w-full input-field" />
                            <button type='submit' className='btn-americau green-btn w-full uppercase'>Reset</button></Fragment>}
                    </form>}

                    {sent && <Fragment>
                        <img src='images/check.gif' alt='Email sent' />
                        <h1 style={{ fontSize: "20px", textAlign: "center", paddingBottom: "30px" }}>Email has been sent. Please check your inbox(spam)</h1>
                    </Fragment>}

                </main>

                {/* Footer Container */}
                {!sent && <div className="bottom-container flex justify-between items-end">
                    <a href='https://heroesleaguegameday.com/'> <h1 className="learn-more-heading uppercase">Learn More</h1> </a>
                    <div className="flex flex-col items-center">
                        <p className='dont-have-account uppercase'>Don't have an account?</p>
                        <a href="/"><h1 className="signup-text uppercase">Sign Up</h1></a>
                    </div>
                </div>}
            </div>
        </>
    )
}

export default ForgotPassword