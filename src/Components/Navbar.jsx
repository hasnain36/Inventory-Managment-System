import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Asad from '../images/asad.png';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

function Header() {
  return (
    // <Container>

    //   <Navbar bg="blue" expand="lg" style={{ height: '5rem' }}>
    //     <Row className='d-flex'>
    //        <Col className='d-flex' lg={3}>
    //         <Link to='/dashboard'>
    //           <img
    //             src={Asad}
    //             width="40"
    //             height="40"
    //             className="d-inline-block align-top"
    //             alt="React Bootstrap logo"
    //           />
    //         </Link>
    //         <Navbar.Brand href="#" >Inventory Management System</Navbar.Brand>
    //       </Col>
    //       <Col style={{textAlign:'end'}} lg={9}>
    //         <Link to='/'>
    //           <Button variant="outline-info" className=''>sign out</Button>
    //         </Link>
    //       </Col>
    //     </Row>
    //   </Navbar>
    // </Container>
    <>
    
   <Navbar bg="light" expand="lg" className='mb-3'>
      <Container >
        
           
       <Link to='/dashboard' style={{textDecoration: "none"}}>
       <img
              src={Asad}
              width="60"
              height="60"
              className="d-inline-block align-top"
              alt="Logo"
            />
          
       </Link>
       <Navbar.Offcanvas
              id='lg'
              aria-labelledby='lg'
              placement="end"
            >
       </Navbar.Offcanvas>
          <Form className="d-flex me-5" >
            
            <Button variant="outline-info" >Sign out</Button>
            
          </Form>
        
      </Container>
    </Navbar>
    
    </>
  );
}

export default Header;


