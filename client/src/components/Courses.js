
import Table from 'react-bootstrap/Table';
import CourseLigneTab from './CourseLigneTab';
import  { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetCourses } from '../redux/reducerCourses';





function Courses() {

  const dispatch = useDispatch()

 
   
  
  useEffect (()=>{dispatch(GetCourses())},[])

  const courses= useSelector(state => state.courses)

  
 
  

    return (
    <div  >
     
    <h2>Courses</h2>
    <a href="/courses/add_course"> Add </a>
    <div   className =" d-flex justify-content-center mt-3 ">
    <Table striped bordered hover size="sm" className ="border w-50 p-3" >
  <thead>
    <tr>
      <th>Name</th>
      <th>Course Cod</th>
      <th>Cohort</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>

     { (courses)? courses.map((el)=>{return(
           
           
               <CourseLigneTab  key={el._id}  course = {el}/>
              

             )}):null}
    
  </tbody>
</Table>
</div>
</div>  );
    }

export default Courses;