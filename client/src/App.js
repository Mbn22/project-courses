
import axios from 'axios';
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import './App.css';
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
import { useDispatch, useSelector } from "react-redux";

import {   getlogin  } from './redux/reducerLogin';

import { useEffect } from 'react';
 


function App() {
 
 const dispatch = useDispatch()
  useEffect(()=>{ axios.get('/api/login').then(res=>dispatch(getlogin(res.data)))},[dispatch])
  
  const isloggedin = useSelector(state=> state.login.isloggedin )

  console.log(isloggedin)
  return (
    
    <div className="App">
    


     
     <BrowserRouter>
     <HeaderNav />
     <Routes>
       
          <Route path="/user" element={<User />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={ <Courses />} />
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

export default App;
