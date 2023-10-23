import React from 'react';
import {Route,Routes} from "react-router-dom";
import LoginPage from '../Pages/LoginPage';
import SignUpPage from '../Pages/SignUpPage';
import PrivateRoute from './PrivateRoute';
import HomePage from '../Pages/HomePage';
import JobPage from '../Pages/JobPage';
import EmployersPage from '../Pages/EmployersPage';
import SingleServicePage from '../Pages/SingleServicePage';
import PageNotFound from '../Pages/PageNotFound';

function AllRoutes() {
  return (
    <div>
      <Routes>

        <Route path='/' element={<HomePage/>} />
        <Route path='/employers' element={<EmployersPage/>} />
        <Route path='/jobs' element={<JobPage/>} />
        <Route path='/jobs/:id' element={<SingleServicePage/>} />
        <Route path='/userlogin' element={<LoginPage/>} />
        <Route path='/usersignup' element={<SignUpPage/>} />
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
    </div>
  )
}

export default AllRoutes
