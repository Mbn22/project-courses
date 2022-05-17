import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { getlogin }  from '../redux/reducerLogin';

function Authent({children}) {
const loggedIn = useSelector(state => state.login.isloggedin)    
const dispatch = useDispatch()
axios.get('/api/login').then(res=>dispatch(getlogin(res.data)))

console.log(loggedIn)

if  (loggedIn === false)
return ( <Navigate to ="/login"/>)
else 
return (

{children}


)
}
export default Authent