import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux';






function User(){
 
  
 

 const user =useSelector(state=> state.login.user )
 
 

return(<div className =" d-flex justify-content-center ">


<Form  className =" w-25 p-3 ">

    <h2>Request</h2>
    
    <Form.Group  className ="d-flex justify-content-start"  >
       <strong>Email :</strong>
      <Form.Label>{user.email}</Form.Label>
    </Form.Group>
    
  
    <Form.Group  className ="d-flex justify-content-start" >
    <strong>Name :</strong>
      <Form.Label>{user.firstName} {user.lastName}</Form.Label>
    </Form.Group>
     
    <Form.Group   className ="d-flex justify-content-start">
    <strong>profile : </strong>
      <Form.Label>{user.profile}</Form.Label>
    </Form.Group>

  <Form.Group className=" d-flex justify-content-start " >
  <strong>courses : </strong>
  <Form.Label>{user.courses}</Form.Label>
  </Form.Group>
  <Form.Group   className ="d-flex justify-content-start">
    <strong>tutor_courses : </strong>
      <Form.Label>{user.tutor_courses}</Form.Label>
    </Form.Group>

 

  


</Form>



</div>)
}
export default  User