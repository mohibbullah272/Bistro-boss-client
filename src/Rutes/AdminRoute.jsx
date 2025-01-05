import React from 'react';
import useAdmin from '../Hooks/useAdmin';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({children}) => {
    const [isAdmin,isLoading]=useAdmin()
   
    if(isLoading){
        return <p>please wait</p>
    }
    if(!isAdmin){
return <Navigate to={'/signIn'}></Navigate>
    }
    return (
       children
    );
};

export default AdminRoute;