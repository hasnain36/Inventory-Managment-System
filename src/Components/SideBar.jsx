import React , {useState}from 'react'
import Card from 'react-bootstrap/Card';
import { BsBarChart,BsReceipt,BsCartDash,BsArrowReturnRight,BsArrowReturnLeft,BsPeopleFill,BsGraphUp } from "react-icons/bs";
import { MdProductionQuantityLimits } from "react-icons/md";
import ListGroup from 'react-bootstrap/ListGroup';
import Offcanvas from 'react-bootstrap/Offcanvas';


export default function SideBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <> 
    <Card style={{ width: '7rem', height:'7rem' }}>
      <BsBarChart size={'sm'} className="text-primary" />
       <p className="text-primary"> Dashboard</p>
        </Card>
        <Card style={{ width: '7rem', height:'7rem' }}>
      <MdProductionQuantityLimits onClick={handleShow} size={'sm'} className="text-primary" />
      <p className="text-primary" onClick={handleShow} > Product </p>
      <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Body>
      <ListGroup variant="flush">
      <ListGroup.Item>Create Product</ListGroup.Item>
      <ListGroup.Item>All Product</ListGroup.Item>
      <ListGroup.Item>Category</ListGroup.Item>
      <ListGroup.Item>Brand</ListGroup.Item>
      <ListGroup.Item></ListGroup.Item>
    </ListGroup>
        </Offcanvas.Body>
        </Offcanvas>
        </Card>
        
        <Card style={{ width: '7rem', height:'7rem' }}>
      <BsReceipt onClick={handleShow}  size={'sm'} className="text-primary" />
      <p className="text-primary" onClick={handleShow} > Purchase</p>
      <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Body>
      <ListGroup variant="flush">
      <ListGroup.Item>Create Purchase</ListGroup.Item>
      <ListGroup.Item>All Purchase</ListGroup.Item>
      <ListGroup.Item></ListGroup.Item>
    </ListGroup>
        </Offcanvas.Body>
        </Offcanvas>
        </Card>
      
        <Card style={{ width: '7rem', height:'7rem' }}>
      <BsCartDash size={'1x'}className="text-primary" />
      <p className="text-primary"> Sale</p>
        </Card>
       
        <Card style={{ width: '7rem', height:'7rem' }}>
      <BsArrowReturnRight size={'1x'}className="text-primary" />
      <p className="text-primary">Sale Return</p>
        </Card>
      
        <Card style={{ width: '7rem', height:'7rem' }}>
      <BsArrowReturnLeft size={'1x'}className="text-primary" />
      <p className="text-primary">Purchase Return</p>
        </Card>
     
        <Card style={{ width: '7rem', height:'7rem' }}>
      <BsPeopleFill onClick={handleShow}  size={'1x'}className="text-primary" />
      <p className="text-primary" onClick={handleShow} >People</p>
      <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Body>
      <ListGroup variant="flush">
      <ListGroup.Item>Customer</ListGroup.Item>
      <ListGroup.Item>Supplier</ListGroup.Item>
      <ListGroup.Item>Users</ListGroup.Item>
      <ListGroup.Item></ListGroup.Item>
    </ListGroup>
        </Offcanvas.Body>
        </Offcanvas>
        </Card>
       
        <Card style={{ width: '7rem', height:'7rem' }}>
      <BsGraphUp size={'1x'} className="text-primary" />
      <p className="text-primary">Report</p>
        </Card>
    </>
    
    
  )
}