import React, { useEffect, useState } from "react";
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NewCourse from './components/NewCourse'
import Courses from './components/Courses'
import HeaderNav from './components/HeaderNav';
import Users from './components/Users';
import UpdateCourses from './components/UpdateCourses';
import Requests from './components/Requests';
import RequestDetail from './components/RequestDetail';
import Home from "./components/Home";
import Login from "./components/Login";
import User from "./components/user";
import { useDispatch } from "react-redux";
import { GetCourses } from './redux/reducerCourses';

import { getrequests } from "./redux/reducerRequests";
import { Getusers } from "./redux/reducerUser";



function Site() {
  const dispatch = useDispatch()



  axios.get('/api/requests').then(res=>dispatch(getrequests(res.data.reqs)))

  
  axios.get( "/api/courses/").then(res=>dispatch(GetCourses(res.data.courses)))


  axios.get('/api/users').then(res=>dispatch(Getusers(res.data.users)))
 
  

  
  
  
  
  


  return (
    
    <div >
    
    

     <HeaderNav />
     <BrowserRouter>

     <Routes>
          <Route path="/user" element={<User />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/add_course" element={<NewCourse />} />
          <Route path="/courses/update_course/:id" element={<UpdateCourses />} />
      
          <Route path="/students" element={<Users />} />
          <Route path="/requests" element={<Requests />} />
          <Route path="/request/:id" element={<RequestDetail />} />
      </Routes>

      
      </BrowserRouter>
    </div>
  );
}

export default Site;
