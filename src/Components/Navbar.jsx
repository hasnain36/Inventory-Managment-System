import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Asad from '../images/asad.png';

function Header() {
  return (
    <Container fluid>
        <Navbar bg="blue" expand="lg" style={{ height:'5rem' }}>
      <img
              src={Asad}
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        <Navbar.Brand href="#" >Inventory Management System</Navbar.Brand>
       
          
            <Button variant="outline-info" className='ms-auto'>sign in</Button>
            <Button variant="outline-info" className='ms-2'>sign out</Button>
          
    
    </Navbar>
      </Container>
  );
}

export default Header;