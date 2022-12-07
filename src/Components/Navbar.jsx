import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Asad from '../images/asad.png';
import {Link} from 'react-router-dom';
// import { Col, Row } from 'react-bootstrap';

function Header() {
  return (
    <Container>
        <Navbar bg="blue" expand="lg" style={{ height:'5rem' }}>
       
        
      <Link to='/dashboard'>
      <img
              src={Asad}
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
      </Link>
        <Navbar.Brand href="#" >Inventory Management System</Navbar.Brand>
         
       
        
         <Link to='/'>
            <Button variant="outline-info" className=''>sign out</Button>
         </Link> 
            
          
    
        
    </Navbar>
      </Container>
  );
}

export default Header;