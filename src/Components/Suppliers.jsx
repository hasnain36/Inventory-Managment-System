import React from 'react'
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsSearch } from 'react-icons/bs';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import SideBar from './SideBar';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Suppliers() {
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
            <h3>Suppliers Management</h3>
            <p className='ms-4 mt-2' >Suppliers |</p>
            <p className='ms-4 mt-2'>Supplierts management</p>

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
                  <th>
                    <Form.Check
                                        inline
                                        label=""
                                        name="group1"
                                        type='checkbox'
                                    />
                  </th>
                  <th>Code</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>City</th>
                  <th>Tax number</th>
                  <th>Total Sale Due</th>
                  <th>Total Sale Return Due</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
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
                  <td>2</td>
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
