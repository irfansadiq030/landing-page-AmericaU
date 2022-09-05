import React from 'react'
import './Main.css'
import Home from './Home/Home';
import MeetHeroes from './MeetHeroes/MeetHeroes';
import { Routes, Route } from 'react-router-dom'
import BlogListing from './BlogListing/BlogListing';
import BlogDetail from './BlogDetail/BlogDetail';
import VideosPage from './VideosPage/VideosPage';
import Comics from './Comics/Comics';
import ComicsListing from './ComicsListing/ComicsListing';
import News from './News/News';
import Games from './Games/Games';

const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meet-the-heroes" element={<MeetHeroes />} />
        <Route path="/blog" element={<BlogListing />} />
        <Route path="/blog-detail" element={<BlogDetail />} />
        <Route path="/videos" element={<VideosPage />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/comics-list" element={<ComicsListing />} />
        <Route path="/news" element={<News />} />
        <Route path="/games" element={<Games />} />
      </Routes>
    </>
  )
}

export default Main
