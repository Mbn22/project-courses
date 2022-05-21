
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import {   getlogin  } from './redux/reducerLogin';
import { useEffect } from 'react';
import Site from "./components/Site";

 


function App() {
 



  const login = useSelector(state=> state.login.isloggedin )
const dispatch = useDispatch()

console.log(login)

  useEffect(()=>{dispatch(getlogin())},[dispatch])  
 
     /// loading: 'idle' | 'pending' | 'succeeded' | 'failed'


    



  return (
      
    
     (login.status === 'pending' )? <h1>loading... </h1> :  <Site/> 
  );
}

export default App;
