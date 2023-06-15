import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({children}) => {
    const { isAuth, user } = useSelector(state => state.AuthReducer )
    if(!isAuth){
        return <Navigate to="/login" />
    } if(user.role !== "admin") {
        return <Navigate to="/" />
    }
        return children
};

export default AdminRoute;