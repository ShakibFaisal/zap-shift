import React from 'react';
import UseAuth from '../hooks/UseAuth';
import { Navigate, useLocation } from 'react-router';

const PrivetRoute = ({children}) => {
    const Location=useLocation()
    const {user,loading}=UseAuth()
    if(loading){
        return <span className="loading loading-spinner loading-xl"></span>
    }
    if(!user){
        return <Navigate state={Location.pathname} to={'/login'}></Navigate>
    }
    return children
};

export default PrivetRoute;