import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../components/pages/Home';
import Header from './Header';
import Footer from './Footer';


function Layout() {
  return (
    <>
    <Header />
    <Routes>
        <Route path="/" exact element={<Home/>} />
        {/* <Route path="/about" exact element={<About/>} /> */}
    </Routes>
    <Footer />
    </>
  );
}

export default Layout;