import React from 'react'
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

export default function LoginOutlet() {
    return (
        <div className='container-fluid bg-top bg-cover main_bg relative flex justify-center flex-col items-center'>
            <Header />
            <div className="components-container">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}
