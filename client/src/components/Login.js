import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { getlogin, identification } from '../redux/reducerLogin';
import { useDispatch, useSelector   } from 'react-redux';
import Alert from 'react-bootstrap/Alert'
import { useNavigate } from "react-router-dom";



function Login() {
  let navigate = useNavigate();
  const {register , handleSubmit} = useForm({defaultValues :{email: '', password: ''}});
   
   const [error, seterror] = useState("")
   const dispatch=useDispatch()
  


  const onSubmit =data => {
   
    
    axios.post( "/api/login", data )
    .then(res=>{ 
       
       if (res.data.isloggedin === true ) 
       { dispatch(getlogin(res.data))
       navigate("/ ")
      } 
      else
       seterror("Incorrect username or password")
        
      })
      
  }
 
  const test =()=>{
    if (error !== "")
    return( <Alert  variant="danger"> {error} </Alert>);
    }   
  
 
    return (
      
    <div  className =" d-flex justify-content-center mt-3 "  >


    <Form  className ="  border border-dark w-25 p-3"  onSubmit={handleSubmit(onSubmit)}  >
        
    
      {test()}
    

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email"  {...register( 'email')} />
         
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control   type="password" placeholder="Password"  {...register( 'password')} />
        </Form.Group>
        <Button variant="primary" type="submit" >
          Submit
        </Button>
      </Form>
      
      </div> );
} 

export default Login