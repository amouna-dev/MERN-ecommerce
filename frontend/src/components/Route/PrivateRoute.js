import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const PrivateRoute = ({children}) => {
    const isAuth = useSelector(state => state.AuthReducer.isAuth )
    console.log(isAuth)
    const navigate = useNavigate()
    // if(isAuth){
    //     return <Route element={Component} {...rest} />
    // }
    // return <Navigate to="/login" />
    useEffect(() => {
        if (!isAuth) {
          navigate("/login");
        }   }, [isAuth, navigate]);
    return !isAuth ?  <Navigate to="/login" /> : children

};

export default PrivateRoute;