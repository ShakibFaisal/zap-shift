import React from 'react';
import Logo from '../components/Logo';
import authimg from '../assets/authImage.png'
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';

const AuthLayout = () => {
    return (
        <div className='max-w-11/12 mx-auto'>
            <Logo></Logo>
            <div className='flex   items-center'>
                <div className='flex-1'>
                   <Outlet></Outlet>
                </div>
                <div  className='flex-1 hidden md:block'>
                    <img src={authimg} alt="" />
                </div>
            </div>
             <ToastContainer />
        </div>
    );
};

export default AuthLayout;