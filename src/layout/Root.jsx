import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../pages/shared/Navbar';
import Footer from '../pages/shared/Footer';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
             <ToastContainer />
        </div>
    );
};

export default Root;