import Table from 'react-bootstrap/Table';

import UsersLigneTab from './UsersLigneTab';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getusers } from '../redux/reducerUser';

function Users() {

  const dispatch = useDispatch()
  useEffect (()=>{dispatch(getusers())},[])
  
  const users = useSelector(state=>state.users)
    console.log(users)

    return (
    <div  >
     
    <h2>Students</h2>
   
   
    <div   className =" d-flex justify-content-center mt-3 ">
    <Table striped bordered hover size="sm" className ="border w-50 p-3" >
  <thead>
    <tr>
      <th> Email</th>
      <th>Name</th>
      <th>Profile</th>
      <th>courses</th>
    </tr>
  </thead>
  <tbody>
  { (users)? users.map((el)=>{return(
           
           
           <UsersLigneTab  key={el._id}  user = {el}/>
          

         )}):null}

  

  </tbody>
</Table>
</div>
</div>  );
    }

export default Users;