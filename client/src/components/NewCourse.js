
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useForm} from 'react-hook-form'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCourses } from '../redux/reducerCourses';
import { useNavigate } from 'react-router-dom';



function NewCourse () {
  let navigate = useNavigate();
  const dispatch= useDispatch()
  const [course,setCourses] = useState({})
  
  const {register , handleSubmit} = useForm()
  

  const onSubmit =data => {
    setCourses(data)
    if ((data.name !== "")&&(data.coursecode !== "")&&(data.cohort !==""))
     {dispatch(addCourses(data))
      navigate("/courses")
     }
   
  }

 

  


const test =(val)=>{
if (val=="")
return(<Form.Label style={{color:"red"}}>content can not be empty</Form.Label>);
}


console.log(course)
return (<div className =" d-flex justify-content-center " onSubmit={handleSubmit(onSubmit)} >

<form  className =" w-25 p-3 "  >

    <h2>New Course</h2>
    <Form.Group  controlId="formGridEmail">
      <Form.Label>Name</Form.Label>
     
      <Form.Control {...register("name")}  />
      {test(course.name)}
           
    </Form.Group>
    


  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Code</Form.Label>
    <Form.Control   {...register("coursecode")}  />
    {test(course.coursecode)}
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Description</Form.Label>
    <Form.Control name ="description"   {...register("description")} 
      as="textarea"
      placeholder="description"
      style={{ height: '100px' }}
    />
  </Form.Group>


  

    <Form.Group  controlId="formGridState">
      <Form.Label>Cohort</Form.Label>
      <Form.Select    defaultValue="Choose..." {...register("cohort")}>
      <option  value ="" >Choose...</option>
        <option  value ="pre-engineering" >pre-engineering</option>
        <option value ="renewable-energies">renewable-energies</option>
        <option value ="software">software</option>
        <option value ="computer-systems" >computer-systems</option>
      </Form.Select>
      {test(course.cohort)}
    </Form.Group>

 

  <Button className='mt-3' variant="primary" type="submit" >
    Submit
  </Button>
</form>


</div>);
}

export default NewCourse;