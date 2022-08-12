import React from 'react'
import './Main.css'
import Home from './Home/Home';
import MeetHeroes from './MeetHeroes/MeetHeroes';
import { Routes, Route } from 'react-router-dom'

const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/meet-the-heroes" element={<MeetHeroes />}/>
      </Routes>
    </>
  )
}

export default Main
