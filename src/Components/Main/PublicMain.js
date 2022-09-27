import React from 'react'
import './Main.css'
import { Routes, Route, Outlet } from 'react-router-dom'

import Sidebar from './../Sidebar/Sidebar';

const PublicMain = () => {
  return (
    <div className="components-container">
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default PublicMain
