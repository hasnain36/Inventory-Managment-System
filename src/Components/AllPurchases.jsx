import React from 'react'
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsSearch } from "react-icons/bs";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Table } from 'react-bootstrap';
import Navbar from './Navbar';
import SideBar from './SideBar';
import Footer from './Footer';
import {Link} from 'react-router-dom';

 function AllPurchases() {
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
            <Button variant="outline-info" className='me-4'>Filter</Button>
            <Link to='/createpurchase'style={{textDecoration:"none"}} >
            <Button variant="info">Create</Button>
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
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </Table>
        </Row>
    </Container>
    </div>
    <Footer/>
    </>
  )
}
export default AllPurchases



