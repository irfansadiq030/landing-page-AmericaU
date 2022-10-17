import React from 'react'
import './Main.css'
import { Outlet } from 'react-router-dom'

import Sidebar from './../Sidebar/Sidebar';

const PublicMain = () => {
  return (
    <div className="components-container-portal">
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default PublicMain
