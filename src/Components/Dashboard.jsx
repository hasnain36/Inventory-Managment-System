import React from 'react'
import Card from 'react-bootstrap/Card';
import {BsCartDash , BsCartPlus } from "react-icons/bs";
import { BiRightArrowCircle ,BiLeftArrowCircle } from "react-icons/bi";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Navbar from './Navbar'
import Footer from './Footer';
import SideBar from './SideBar';


function Dashboard() {
  return (
    <>
    <Navbar/>
    <div className='d-flex'>
      <div>
        <SideBar/>
      </div>
    <div>
    <Container>
    <Row xs={1} md={2} lg={4}>
    <Col >
    <Card style={{ width: '15.5rem' }} className="mt-4">
      <div className='d-flex' >
      <div className='text-primary '>
        <Card.Body>
        <BsCartDash size={'1x'} cursor={'pointer'} value={{color:'primary'}}/>
      </Card.Body>
      </div>
      <div className='mt-4'>
        <Card.Body>
        <p>Sale</p>
        <p className='text-primary'>117500</p>
        </Card.Body>
        </div>
      </div>
    </Card>
    </Col> 
    <Col>
    <Card style={{ width: '16rem' }} className="mt-4">
    <div className='d-flex '>
      <div className='text-primary '>
        <Card.Body >
        <BsCartPlus size={'1x'} cursor={'pointer'}/>
      </Card.Body>
      </div>
      <div className='mt-4'>
        <Card.Body>
        <p>Purchase</p>
        <p className='text-primary '>117500</p>
        </Card.Body>
        </div>
      </div>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '15rem' }} className="mt-4">
    <div className='d-flex '>
      <div className='text-primary '>
        <Card.Body >
        <BiRightArrowCircle  size={'1x'} cursor={'pointer'}/>
      </Card.Body>
      </div>
      <div className='mt-4'>
        <Card.Body>
        <p>Sale Return</p>
        <p className='text-primary '>117500</p>
        </Card.Body>
        </div>
      </div>
    </Card>
    
    </Col>
    <Col>
    <Card style={{ width: '15rem' }} className="mt-4">
    <div className='d-flex '>
      <div className='text-primary '>
        <Card.Body >
        <BiLeftArrowCircle  size={'1x'} cursor={'pointer'}/>
      </Card.Body>
      </div>
      <div className='mt-4'>
        <Card.Body>
        <p>Purchase Return</p>
        <p className='text-primary '>117500</p>
        </Card.Body>
        </div>
      </div>
    </Card>
    </Col>
    </Row>
    </Container>
    <Container>
        <Row className='mt-4'sm={1} md={1} lg={4} >
            <Col className='mt-4' lg={8}>
            <Card  >
                <h5 className='text-start mt-4 ms-3'>Stock Alert</h5>
                <hr/>
            <Table responsive="xl">
        <thead>
          <tr>
            <th>Code</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Alert Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </tbody>
      </Table>
            </Card>
            </Col>
            <Col className='mt-4' lg={4}>
            <Card>
            <h5 className='text-start mt-4 ms-3'>Top Selling Products (November)</h5>
                <hr/>
            <Table responsive="xl sm md lg">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Grand Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </tbody>
      </Table>
            </Card>
            </Col>
        </Row>
    </Container>

    <Container>
        <Row className='mt-4'>
            <Col>
                <Card>
                <h5 className='text-start mt-4 ms-3'>Recent Sales</h5>
                <hr/>
            <Table responsive="xl">
        <thead>
          <tr>
            <th>Reference</th>
            <th>Customer</th>
            <th>Status</th>
            <th>Grand Total</th>
            <th>Paid</th>
            <th>Due</th>
            <th>Payment Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
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
                </Card>
            </Col>
        </Row>
    </Container>
    </div>
    </div>
    <Footer/>
    </>
  )
}
export default Dashboard;