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
import SeasonPass from './SeasonPass/SeasonPass';
import SeasonPassStories from './SeasonPassStories/SeasonPassStories';
import Events from './Events/Events'
import Leaderboard from './Leaderboard/Leaderboard';
import Sidebar from './../Sidebar/Sidebar';

const PublicMain = () => {
  return (
    <div className="components-container">
      <Sidebar />
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
        <Route path="/seasonpass" element={<SeasonPass />} />
        <Route path="/seasonpass-list" element={<SeasonPassStories />} />
        <Route path="/events" element={<Events />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </div>
  )
}

export default PublicMain
