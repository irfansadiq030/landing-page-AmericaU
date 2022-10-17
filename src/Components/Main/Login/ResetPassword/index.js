import React, { useState } from 'react'
import './index.css'
import { Link, useSearchParams } from 'react-router-dom'
import { Field, Form, Formik } from 'formik';
import axios from 'axios';
import * as yup from "yup"

const ResetPassword = () => {
    const [searchParams] = useSearchParams();
    const nonce = searchParams.get("nonce");

    const handleFormSubmit = async (value) => {
        try {

            const res = await axios.post(`https://api.americau.com/user/update-password`, {
                password: value.password,
                nonce: nonce,
            });

            console.log(res.data);
            window.open("https://portal.americau.com/", "_self")

        } catch (error) {
            window.alert(error.message);
        }
    }

    const schema = yup.object({
        password: yup.string().required("Password is required").label("Password"),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Confirmm password must match the password").required("Repeat password").label("Confirm password")
    });

    return (
        <>
            <div className="forgot-password-container mx-auto flex flex-col">
                {/* Back Button */}
                <Link to="/" className="back-button">
                    <img src="images/icon-back.png" alt="" srcset="" />
                </Link>

                {/* Heading */}
                <h1 className='reset-form-heading uppercase text-center mb-4'>Reset Password</h1>


                {/* Box Content Container */}
                <main className='login-main flex-col flex items-center justify-center'>

                    <Formik initialValues={{ password: "", confirmPassword: "" }} validationSchema={schema} onSubmit={handleFormSubmit} >
                        {({ errors, touched, handleSubmit }) => <Form onKeyDown={(event) => event.key === "Enter" && handleSubmit(event)} className="w-full space-y-3 login-form flex justify-between flex-col">
                            <Field type="password" name="password" placeholder="New Password" className="w-full input-field" />
                            {errors.password && touched.password && <div style={{ marginTop: "-2px" }} className=' text-xl text-red-700'>{errors.password}</div>}
                            <Field type="password" name="confirmPassword" placeholder="Confirm Password" className="w-full input-field" />
                            {errors.confirmPassword && touched.confirmPassword && <div style={{ marginTop: "-2px" }} className=' text-xl text-red-700'>{errors.confirmPassword}</div>}
                            <button type='submit' className='btn-americau green-btn w-full uppercase'>Submit</button>
                        </Form>}
                    </Formik>

                </main>

                {/* Footer Container */}
                <div className="bottom-container flex justify-between items-end">
                    <a href='https://heroesleaguegameday.com/'> <h1 className="learn-more-heading uppercase">Learn More</h1> </a>
                    <div className="flex flex-col items-center">
                        <p className='dont-have-account uppercase'>Don't have an account?</p>
                        <a href="https://portal.americau.com/" target={"_self"}><h1 className="signup-text uppercase">Sign Up</h1></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResetPassword