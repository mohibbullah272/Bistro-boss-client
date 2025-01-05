import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    if(loading){
        return <p>please wait</p>
    }
    if(user){
        return children
    }
    return (
    <Navigate to={'/signIn'}></Navigate>
    );
};

export default PrivetRoute;