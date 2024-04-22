import React from 'react'
import Footer from '../components/Footer'
import Home from '../pages/Home'
import Header from '../pages/Header'

function Layout() {
  return (
    <div>
        <Header/>
        <Home/>
        <Footer/>
    </div>
  );
};

export default Layout