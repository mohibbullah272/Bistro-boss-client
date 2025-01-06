import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';
import Loading from '../Page/Loading/Loading';

const PrivetRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    if(loading){
        return <Loading></Loading>
    }
    if(user){
        return children
    }
    return (
    <Navigate to={'/signIn'}></Navigate>
    );
};

export default PrivetRoute;