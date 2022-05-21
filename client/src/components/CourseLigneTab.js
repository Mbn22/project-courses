import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from "react-redux";
import { deleteCourse, GetCourses } from '../redux/reducerCourses';
import axios from 'axios';
function CourseLigneTab ({course}) {

  const dispatch =useDispatch();

  

    return ( <tr>
        <td>{course.name}</td>
        <td>{course.coursecode}</td>
        <td>{course.cohort}</td>
        <td>{course.description}</td>
        <td>
        <Link  to={`/courses/update_course/${course._id}`} className="Listlink"  > 
        <Button style={{width:"60px"}} className='mt-3' variant="secondary" type="submit" >
        edit
        </Button>
          </Link>
          <Link  to='/courses' className="Listlink"  > 
          <Button  onClick={()=> dispatch(deleteCourse(course._id))} style={{width:"60px"}} className='mt-3' variant="danger" type="submit">
          delete
          </Button>
          </Link>

        </td>
      </tr> );
}

export default CourseLigneTab

