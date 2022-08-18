import React from 'react'
import './Main.css'
import Home from './Home/Home';
import MeetHeroes from './MeetHeroes/MeetHeroes';
import { Routes, Route } from 'react-router-dom'
import BlogListing from './BlogListing/BlogListing';
import BlogDetail from './BlogDetail/BlogDetail';

const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meet-the-heroes" element={<MeetHeroes />} />
        <Route path="/blog" element={<BlogListing />} />
        <Route path="/blog-detail" element={<BlogDetail />} />
      </Routes>
    </>
  )
}

export default Main
