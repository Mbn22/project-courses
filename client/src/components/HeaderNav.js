import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/esm/Button';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/reducerLogin';
import { useNavigate } from 'react-router-dom';


function HeaderNav (){
  let navigate = useNavigate();
      
  const dispatch =useDispatch()
  const onClicklogout = ()=>{
         dispatch(logout()); 
         navigate("/login")
        } 

    return (<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/">Admin magement</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/courses" >Courses</Nav.Link>
        <Nav.Link href="/requests">Requests</Nav.Link>
        <Nav.Link href="/students">Students</Nav.Link>
       
      </Nav>
      <Nav>
        <Nav.Link href="/user">My account</Nav.Link>
        
         <Button variant="dark" onClick={ ()=>{onClicklogout()} }>Logout</Button>
        
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>);
}

export default HeaderNav