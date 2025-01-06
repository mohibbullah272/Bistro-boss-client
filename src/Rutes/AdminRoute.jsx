import React from 'react';
import useAdmin from '../Hooks/useAdmin';
import { Navigate } from 'react-router-dom';
import Loading from '../Page/Loading/Loading';

const AdminRoute = ({children}) => {
    const [isAdmin,isLoading]=useAdmin()
   
    if(isLoading){
        return <Loading></Loading>
    }
    if(!isAdmin){
return <Navigate to={'/signIn'}></Navigate>
    }
    return (
       children
    );
};

export default AdminRoute;