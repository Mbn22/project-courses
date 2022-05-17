
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useForm} from 'react-hook-form'
import { useState ,useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { useDispatch  } from "react-redux";
import { updateCourses } from '../redux/reducerCourses';


function UpdateCourses () {
  const [course,setCourse] = useState({})
  const {id} = useParams(); 
  
  
  useEffect(()=>{axios.get( `/api/courses/update_course/${id}`).then(res=>{ setCourse(res.data.course) })},[])

   const dispatch = useDispatch()

   const {register , handleSubmit} = useForm({
    defaultValues:{name: course.name , coursecode: course.coursecode , description: course.description , cohort: course.cohort}
  })
  
   
   const onSubmit =data => {

    dispatch(updateCourses({id : id , data : data}))
    console.log(data)
  }

  const  Submit = ()=>{ 

  
}


 

const test =(val)=>{
  if (val=="")
  return(<Form.Label style={{color:"red"}}>content can not be empty</Form.Label>);
  }

console.log(course)
return (<div className =" d-flex justify-content-center " onSubmit={handleSubmit(onSubmit)} >

<form  className =" w-25 p-3 "  >

    <h2>uPDATE Course</h2>
    <Form.Group  controlId="formGridEmail">
      <Form.Label>Name</Form.Label>
     
      <Form.Control  defaultValue={course.name}     {...register( 'name', { required: true })}  />
      {test(course.cohort)}
    </Form.Group>
    


  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Code</Form.Label>
    <Form.Control defaultValue={course.coursecode}    {...register("coursecode", { required: true })}  />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Description</Form.Label>
    <Form.Control  defaultValue={course.description}   {...register("description")} 
      as="textarea"
      placeholder="description"
      style={{ height: '100px' }}
    />
  </Form.Group>


  

    <Form.Group  controlId="formGridState">
      <Form.Label>Cohort</Form.Label>
      <Form.Select defaultValue={course.cohort}  {...register("cohort", { required: true })}>
      <option  defaultValue ={course.cohort} >{course.cohort}</option>
        <option  value ="pre-engineering" >pre-engineering</option>
        <option value ="renewable-energies">renewable-energies</option>
        <option value ="software">software</option>
        <option value ="computer-systems" >computer-systems</option>
      </Form.Select>
    </Form.Group>

 

  <Button className='mt-3' variant="primary" type="submit" onClick={Submit}>
    Submit
  </Button>
</form>


</div>);
}

export default UpdateCourses;