import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import {  useSelector  } from 'react-redux';
import Alert from 'react-bootstrap/Alert'
import { Navigate } from "react-router-dom";



function Login() {
  const {register , handleSubmit} = useForm({defaultValues :{email: '', password: ''}});
 

  const log = useSelector(state=> state.login  )
   const [error, seterror] = useState("")
  

   if ((log.isloggedin === true )&&(log.loading === 'succeeded'))
   return(<Navigate to="/" />)
   
     

  const onSubmit = async data => {
   
    
   const res = await axios.post( "/api/login", data )
        
       if (res.data.isloggedin === false ) 
       {  seterror("Incorrect username or password")
      } 
      else
      window.location.reload() 
        
      
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