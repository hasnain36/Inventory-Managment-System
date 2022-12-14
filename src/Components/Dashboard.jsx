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
import {Link} from 'react-router-dom';
import {Stock , Stock2 ,Stock3} from './Stock';


function Dashboard() {
  const data =(val) =>{
    return(
        <tr>
          <td>{val.code}</td>
          <td>{val.product}</td>
          <td>{val.quantity}</td>
          <td>{val.aquantity}</td>
        </tr>
    )
  }
  const data2 =(val2) =>{
    return(
        <tr>
          
          <td>{val2.product}</td>
          <td>{val2.quantity}</td>
          <td>{val2.grandtotal}</td>
        </tr>
    )
  }
  const data3 =(val3) =>{
    return(
        <tr>
          
          <td>{val3.reference}</td>
          <td>{val3.customer}</td>
          <td>{val3.status}</td>
          <td>{val3.grandtotal}</td>
          <td>{val3.paid}</td>
          <td>{val3.due}</td>
          <td>{val3.paymentstatus}</td>
        </tr>
    )
  }
  return (
    <>
    <Navbar/>
    <div className='d-flex'>
      <div>
        <SideBar/>
      </div>
    <div>
    <Container className='ps-5'>
    <Row xs={1} md={2} lg={4}>
    <Col >
    <Link to='/allsale' style={{textDecoration:"none"}}>
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
    </Link>
    </Col> 
    <Col>
   <Link to='/allpurchase' style={{textDecoration:"none"}}>
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
   </Link>
    </Col>
    <Col>
    <Link to='/salereturn' style={{textDecoration:"none"}}>
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
    </Link>
    
    </Col>
    <Col>
   <Link to='/purchasereturn' style={{textDecoration:"none"}}>
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
   </Link>
    </Col>
    </Row>
    </Container>
    <Container className='ps-5'>
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
          {Stock.map(data)}
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
         {Stock2.map(data2)}
        </tbody>
      </Table>
            </Card>
            </Col>
        </Row>
    </Container>
    <Container className='ps-5'>
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
         {Stock3.map(data3)}
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