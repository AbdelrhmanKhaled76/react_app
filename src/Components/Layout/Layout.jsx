import React from 'react';
import Nav from '../Nav/Nav'
import Home from '../Home/Home';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Layout = ({children}) => {
    return (
        <>
            <Nav />

            {children ? children :  <Outlet />}

            <Footer/>
        </>
    );
}

export default Layout;
