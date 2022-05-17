
import RequestCard from './RequestCard';


import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getrequests } from '../redux/reducerRequests';
function   Requests (){

    const dispatch = useDispatch()
     useEffect(()=>{dispatch(getrequests())},[])
    const requests = useSelector(state=> state.requests)
    console.log(requests)


    return(
        
        <div className ="mt-3   "> 
        <h2>requests</h2>
        <div className ="mt-3   w-75 p-3  d-flex  flex-wrap justify-content-center  "> 
      
      { (requests)? requests.map((el)=>{return(

             
            <div  className ="m-3" key={el._id} >
                <Link to={`/request/${el._id}` }>
               <RequestCard req = {el}  />
               </Link>
            </div>)}):null}

      
        </div> </div>   );
 }

export default Requests 