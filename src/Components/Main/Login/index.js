import React, { useState, useEffect } from 'react'
import "./index.css";
import { useNavigate, useLocation, Link } from 'react-router-dom';
import * as yup from "yup"
import trackEvent from "../../../services/tracker";
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import Spinner from './../../Shared/Spinner/Spinner';



export default function Index() {

    const navigate = useNavigate();
    const { pathname } = useLocation()
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // trackEvent("PAGE_LOGIN", {path: pathname}); 

    }, [])


    const handleSubmit = async ({ username, password }, actions) => {

        trackEvent("LOGIN_LOGIN_PASSWORD", { path: pathname });

        try {
            const formData = new FormData();
            formData.append('cmd', 'WoogiOAuth.signInMod');
            formData.append('name', username.trim());
            formData.append('password', password.trim());

            let result = await axios.post(
                "./woogi/0.1/actor/cgi.php",
                formData
            );

            if (result.data.code == 200) {
                return window.location.href = "./index"
            }

            if (result.data.code !== 200) {
                // navigate('/messageviewer');
                navigate('/messageviewer', { state: { msg: "Username or password is wrong." } });
            }

        } catch (error) {
            window.alert(error.message)
        }
    }

    const init = {
        username: "",
        password: ""
    }

    const validation = yup.object({
        username: yup.string().required().label("Username"),
        password: yup.string().min(6).required().label("Password")
    })

    return (
        <div className="forgot-password-container mx-auto flex flex-col">

            {/* Heading */}
            <div className="heading-container flex justify-center items-center">
                <h1 className='reset-form-heading uppercase'>Sign In</h1>
            </div>

            {/* Box Content Container */}
            <main className='login-main flex-col flex items-center justify-center'>
                {!loading && <Formik validationSchema={validation} initialValues={init} onSubmit={handleSubmit} >
                    {({ errors, isSubmitting, handleSubmit }) => {

                        return <div className='w-full login-form'>
                            <Form onKeyDown={(e) => e.key == "Enter" && handleSubmit()}>
                                <div className='mb-2'>
                                    <Field name="username" type="text" placeholder="Username" className="w-full input-field" />
                                    {errors.username && <p className='text-red-600 '>{errors.username}</p>}
                                </div>

                                <div className='mb-2'>
                                    <Field name="password" type='password' placeholder="Password" className="w-full input-field" />
                                    {errors.password && <p className='text-red-600 '>{errors.password}</p>}
                                </div>

                                <div className="mb-2">
                                    <button onClick={handleSubmit} className='btn-americau green-btn w-full uppercase' disabled={isSubmitting}>{isSubmitting ? <Spinner /> : "Login"}</button>
                                </div>
                            </Form>
                        </div>

                    }}
                </Formik>}

                {loading && <Spinner />}

                <div className="uppercase flex flex-col lg:flex-row w-full text-center justify-center">
                    <p className='or-text'>OR</p>
                    <Link to="/forgotpassword" className='forgot-pwd-txt hidden lg:block lg:absolute right-10 or-text'>Forgot Password?</Link>
                </div>
                <div className='flex flex-col mt-3 space-y-2 lg:space-x-3 lg:flex-row lg:space-y-0 lg:justify-between lg:items-center'>
                    <a href='https://api.americau.com/login/classlink' onClick={() => trackEvent("LOGIN_CLASSLINK", { path: pathname })} className="uppercase login-class-btn">Login with classLink</a>
                    <a href='https://portal.americau.com/woogi/0.1/static/oauth/indexOfClever.php' onClick={() => trackEvent("LOGIN_CLEVER", { path: pathname })} className="uppercase login-class-btn">Login with Clever</a>
                </div>

                <Link to="/forgotpassword" onClick={() => trackEvent("LOGIN_FORGOT_PASSWORD", { path: pathname })} className='forgot-pwd-txt block lg:hidden right-10 or-text'>Forgot Password?</Link>

            </main>

            {/* Footer Container */}
            <div className="bottom-container flex justify-between items-end">
                <a href='https://heroesleaguegameday.com/' onClick={() => trackEvent("LOGIN_BUTTON_LEARN_MORE", { path: pathname })} > <h1 className="learn-more-heading uppercase">Learn More</h1> </a>
                <div className="flex flex-col items-center">
                    <p className='dont-have-account uppercase'>Don't have an account?</p>
                    <a href='http://signup.americau.com/' onClick={() => trackEvent("LOGIN_BUTTON_SIGNUP", { path: pathname })} rel="noreferrer" target={"_blank"} className="signup-text uppercase">Sign Up</a>
                </div>
            </div>
        </div>
    )
}