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


function Layout() {
  return (
    <>
    <Header />
    <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/about" exact element={<About/>} />
        <Route path="/blog" exact element={<Blog />} />
        <Route path="/hostel" exact element={<HostelRoom />} />
        <Route path="/room-detail" exact element={<RoomDetail />} />
        <Route path="/service-detail" exact element={<Service />} />
        <Route path="/contact" exact element={<Contact />} />
    </Routes>
    <Footer />
    </>
  );
}

export default Layout;