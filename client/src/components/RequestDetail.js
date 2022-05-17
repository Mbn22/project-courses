
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from 'react-router';
import { useDispatch } from "react-redux";
import { approve } from '../redux/reducerRequests';



function RequestDetail () {
  
  const {id} = useParams();   
  const [req , setreq ] = useState([id]);
  useEffect(()=>{axios.get(`/api/requests/request/${id}`,{}).then(res=>setreq(res.data.Request))},[])
  
  const dispatch = useDispatch();




return (<div className =" d-flex justify-content-center "   >

<Form  className =" w-25 p-3 ">

    <h2>Request</h2>
    
    <Form.Group  className ="d-flex justify-content-start"  >
       <strong>Email :</strong>
      <Form.Label>{req.author}</Form.Label>
    </Form.Group>
    
    <Form.Group  className ="d-flex justify-content-start" >
    <strong>Course :</strong>
      <Form.Label>{req.courses}</Form.Label>
    </Form.Group>

    <Form.Group   className ="d-flex justify-content-start">
    <strong>Result : </strong>
      <Form.Label>{req.result}</Form.Label>
    </Form.Group>

  <Form.Group className=" d-flex justify-content-start mb-3" controlId="formGridAddress1">
  <strong>Description : </strong>
  <Form.Label>{req.result}</Form.Label>
  </Form.Group>

  <Form.Group  controlId="formGridAddress2">
  <strong className=" d-flex justify-content-start " > remark : </strong>
    <Form.Control name ="remark" 
      as="textarea"
      placeholder="remark"
      style={{ height: '100px' }}
    />
  </Form.Group>


  

    

  <Button onClick={()=> dispatch(approve(id))} className='mt-3' variant="primary" type="submit">
    Approve
  </Button>

</Form>

 



</div>);
}

export default RequestDetail;