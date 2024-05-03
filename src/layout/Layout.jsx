import React from 'react'
import Footer from '../components/Footer'
import Home from '../pages/Home'
import Header from '../pages/Header'
import Homepage from '../pages/Homepage';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      
      {/* <Homepage /> */}
       <Outlet/>
    </div>
  );
};

export default Layout