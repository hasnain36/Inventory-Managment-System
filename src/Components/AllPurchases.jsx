import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsSearch , BsPower} from "react-icons/bs";
import { BiFilterAlt } from "react-icons/bi";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Form from 'react-bootstrap/Form';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import { Table } from 'react-bootstrap';
import Navbar from './Navbar';
import SideBar from './SideBar';
import Footer from './Footer';
import {Link} from 'react-router-dom';
import PurchaseStock from "./AllpurchaseStock";

 function AllPurchases() {
  const data =(value)=>{
    return(
      <tr>
        <td> <Form.Check
            inline
            name="group1"
            type='checkbox'/>
            </td>
      <td>{value.date}</td>
      <td>{value.reference}</td>
      <td>{value.supplier}</td>
      <td>{value.warehouse}</td>
      <td>{value.status}</td>
      <td>{value.grandtotal}</td>
      <td>{value.paid}</td>
      <td>{value.due}</td>
      <td>{value.paymentstatus}</td>
      </tr>
    )

  }
  const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <Navbar/>
    <div className="d-flex">
    <div>
        <SideBar/>
    </div>
    <Container className='text-start'>
    <Row >
          <Col className='d-flex mt-4' >
            <h4>All Purchase</h4>
            <p className='mt-1 ms-3'>Purchases |</p>
            <p className='mt-1 ms-3'>All Purchase</p>
            </Col>
            <hr/>
        </Row>
        <Row>
            <Col className='d-flex' lg={3}>
          <BsSearch className='mt-2 me-3'/>
            <Form.Control type="text" placeholder="Search this table" />
            </Col>
            <Col lg={9} style={{textAlign:'end'}}>
            <Button variant="outline-info" className='me-4'onClick={handleShow}><BiFilterAlt className='pe-1'/>Filter</Button>
            <Link to='/createpurchase'style={{textDecoration:"none"}} >
            <Button variant="info"><AiOutlinePlusCircle/>Create</Button>
            </Link>
            </Col>
        </Row>
        <Row className='mt-5'>
        <Table striped hover >
      <thead>
        <tr>
          <th>
            <Form.Check
            inline
            name="group1"
            type='checkbox'
          />
          </th>
          <th>Date</th>
          <th>Reference</th>
          <th>Supplier</th>
          <th>Warehouse</th>
          <th>Status</th>
          <th>Grand Total</th>
          <th>Paid</th>
          <th>Due</th>
          <th>Payment Status</th>
        </tr>
      </thead>
      <tbody>
       {PurchaseStock.map(data)}
      </tbody>
    </Table>
        </Row>
    </Container>
    </div>
    <Footer/>
    <Offcanvas show={show} onHide={handleClose} placement='end' className='ps-2 pe-3'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filter</Offcanvas.Title>
        </Offcanvas.Header>
        <Form>
        <Form.Label>Date</Form.Label>
              <Form.Control type="date" placeholder="" />
        <Form.Label>Reference</Form.Label>
              <Form.Control type="text" placeholder="Reference" />
        <Form.Label>Supplier</Form.Label>
        <Form.Select>
                <option>Adidas</option>
                <option>Nike</option>
                <option>NDURE</option>
              </Form.Select>
        <Form.Label>Warehouse</Form.Label>
        <Form.Select>
                <option>Warehouse 1</option>
                <option>Warehouse 2</option>
              </Form.Select>
        <Form.Label>Status</Form.Label>
        <Form.Select>
                <option>Received</option>
                <option>Pending</option>
                <option>Ordered</option>
              </Form.Select>
        <Form.Label>Payment Status</Form.Label>
        <Form.Select>
                <option>Paid</option>
                <option>Partial</option>
                <option>Unpaid</option>
              </Form.Select>
        </Form>
        <Container className='mt-3 d-flex'>
            <Button variant="info" className='me-3 w-50'><BiFilterAlt className='pe-1'/>Filter</Button>
            <Button variant="danger" className='w-50'><BsPower className='pe-1'/>Reset</Button>
        </Container>
      </Offcanvas>
    </>
  )
}
export default AllPurchases



