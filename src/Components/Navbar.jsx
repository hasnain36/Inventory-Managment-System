import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Asad from '../images/asad.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
   <Navbar bg="light" expand="lg" className='mb-3' sticky='top'>
      <Container fluid>    
       <Link to='/dashboard' style={{textDecoration: "none"}} className='ps-5'>
       <p className='d-flex align-items-center text-dark'>
       <img
              src={Asad}
              width="60"
              height="60"
              className="d-inline-block align-top"
              alt="Logo"
            />
          <h3 className='mt-2 ms-3'>Inventory Managment System</h3>
       </p>
       </Link>
       
         <Link to='/' style={{textDecoration:"none"}}>
         <Form className="d-flex me-5" >
            
            <Button variant="outline-info" >Sign out</Button>
            
          </Form>
         </Link>
        
      </Container>
    </Navbar>
    </>
  );
}

export default Header;


