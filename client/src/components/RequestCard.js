import Card from 'react-bootstrap/Card';

  
 
 
  function   RequestCard  ({req}){

    const treated = ()=>{ if (req.treat===true)
      return (<p style={{color:"green"}}> Approvid </p>) ;
    else
    return (<p style={{color:"blue"}}> Waiting </p>) ;}

    return(
  
      <Card border="dark" style={{ width: '18rem' }}>
          <Card.Header> <Card.Title>{req.author} { treated() } </Card.Title>
          
           </Card.Header>
          <Card.Body>
          
            <Card.Title>courses:  {req.courses}</Card.Title>
            <Card.Text>
            result:  {req.result }
            </Card.Text>
           
            
          </Card.Body>
        </Card>
       );
 }

export default RequestCard 