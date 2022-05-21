

function UsersLigneTab ({user}) {
    
    return ( <tr>
        <td>{user.email}</td>
        <td>{user.firstName} { user.lastName }</td>
        <td>{user.profile}</td>
        <td>
        { (user.courses)? user.courses.map((el)=>{return (el+" ") }):null}
        </td>
     
      </tr> );
}

export default UsersLigneTab

