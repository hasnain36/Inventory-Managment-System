import React from 'react'
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsSearch } from 'react-icons/bs';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Footer from './Footer';
import SideBar from './SideBar';
import Navbar from './Navbar';

export default function Customer() {
  return (
    <>
      <Navbar/>
      <div className="d-flex">
        <div>
          <SideBar/>
        </div>
        <Container >
        <Row >
          <Col className='d-flex'>
            <h3>Customer Management</h3>
            <p className='ms-4 mt-2' >Customers |</p>
            <p className='ms-4 mt-2'>Customer Management</p>

          </Col>
          <hr />
        </Row>
        <Row className=' d-flex mt-2'>
          <Col className='d-flex' lg={3}>
            <Form className='d-flex'>
              <BsSearch className='mt-2' />
              <Form.Control type="text" placeholder="Search this table" className='ms-2' />
            </Form>
          </Col>
          <Col lg={9} style={{textAlign:'end'}}>
            <Button variant="outline-info" className='me-4' >Filter</Button>
            <Button variant="info">Create</Button>

          </Col>
        </Row>
        <Row>
          
            <Table className='mt-5'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Code</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Tax numbar</th>
                  <th>Total Sale Due</th>
                  <th>Total Sale Return Due</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
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
