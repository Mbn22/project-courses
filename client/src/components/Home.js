import Carousel from 'react-bootstrap/Carousel';
import image from './fond.jpg'
import { Link } from 'react-router-dom'
function Home (){



    return(
      
        <div className =" d-flex  justify-content-center " >
          
          
    <Carousel variant="dark" className =" w-50 p-3 " >

    <Carousel.Item>
      <img
        className="d-block w-100"
      
        src={image}
        alt="First slide"
      />
      <Link to="/courses">
      <Carousel.Caption>
        <h5>Courses</h5>
       
      </Carousel.Caption>
      </Link>
    </Carousel.Item>
    <Carousel.Item>
      <img 
        className="d-block w-100"
        src={image}
        alt="Second slide"
      />
      <Link to="/requests">
      <Carousel.Caption>
        <h5>Request</h5>
        
      </Carousel.Caption>
      </Link>
    </Carousel.Item>
    <Carousel.Item>
      <img
     
        className="d-block w-100"
        src={image}
        alt="Third slide"
      />
      <Link to="/students">
      <Carousel.Caption>
        <h5>Students</h5>
       
      </Carousel.Caption>
      </Link>
    </Carousel.Item>
  </Carousel>
  </div>)
}
export default Home