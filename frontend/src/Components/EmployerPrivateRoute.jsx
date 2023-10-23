import React from 'react';
import { useContext } from 'react';
import { EmployerAuthContext } from '../Components/EmployerAuthContext';
import { Navigate } from 'react-router-dom';

function EmployerPrivateRoute({children}) {
    const {Employstate}=useContext(EmployerAuthContext);

    if(!Employstate){
     return <Navigate to='/employlogin' />
    }

    return children
}

export default EmployerPrivateRoute
