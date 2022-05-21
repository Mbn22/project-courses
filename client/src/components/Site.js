
import {   Routes, Route, Navigate  } from "react-router-dom";
import '../App.css';
import NewCourse from './NewCourse'
import Courses from './Courses'
import HeaderNav from './HeaderNav';
import Users from './Users';
import UpdateCourses from './UpdateCourses';
import Requests from './Requests';
import RequestDetail from './RequestDetail';
import Home from "./Home";
import Login from "./Login";
import User from "./user";
import {useSelector } from "react-redux";

function Site() {
   
const log = useSelector(state=> state.login ) 
console.log(log)
 const auth = (component)=> { return (((log.isloggedin === false)&&(log.loading === 'succeeded'))? <Navigate to="/login" /> : component)}
 
return (
  
  <div className="App">
  
<HeaderNav />
   <Routes>
        <Route path="/login" element={<Login />} /> 
        <Route path="/user" element={auth(<User />) } /> 
        <Route path="/" element={auth(<Home />) } />
        <Route path="/courses" element={auth(<Courses />) }  />
        <Route path="/courses/add_course"  element={auth(<NewCourse />) }  />
        <Route path="/courses/update_course/:id"  element={auth(<UpdateCourses />) }  />
        <Route path="/students"  element={auth( <Users />) } />
        <Route path="/requests"  element={auth(<Requests />)  }  />
        <Route path="/request/:id"  element={auth(<RequestDetail />)}  />
    </Routes>
 
  
  </div>
);

}
export default Site