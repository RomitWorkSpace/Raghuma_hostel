import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../components/pages/Home';
import About from '../components/pages/About';
import Header from './Header';
import Footer from './Footer';
import Blog from '../components/pages/Blog';
import Contact from '../components/pages/Contact';
import HostelRoom from '../components/pages/HostelRoom';
import RoomDetail from '../components/pages/RoomDetail';
import Service from '../components/pages/Service';
import Gallery from '../components/pages/Gallery';
import LandingPage from '../components/pages/LandingPage';


function Layout() {
  return (
    <>
    <Header />
    <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/about" exact element={<About/>} />
        <Route path="/blog" exact element={<Blog />} />
        <Route path="/hostels/:slug" exact element={<HostelRoom />} />
        <Route path="/room-detail" exact element={<RoomDetail />} />
        <Route path='/facilities/:slug' exact element={<Service />} />
        <Route path="/gallery" exact element={<Gallery />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/register-now" exact element={<LandingPage />} />
    </Routes>
    <Footer />
    </>
  );
}

export default Layout;