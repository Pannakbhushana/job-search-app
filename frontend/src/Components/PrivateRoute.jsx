import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Components/AuthContext';
import { Navigate } from 'react-router-dom';

function PrivateRoute({children}) {
    const {state}=useContext(AuthContext);

    if(!state){
     return <Navigate to='/login' />
    }

    return children
}

export default PrivateRoute
