import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
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
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AiOutlineFilter } from 'react-icons/ai';
import { BsPower } from 'react-icons/bs';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import UsersStock from './UserStock';
import { FiEdit } from "react-icons/fi";
import { TiDeleteOutline } from "react-icons/ti";  
import FloatingLabel from 'react-bootstrap/FloatingLabel';

export default function User() {
  const data = (val) => {
    return (
      <tr>
        
        <td>{val.firstname}</td>
        <td>{val.lastname}</td>
        <td>{val.username}</td>
        <td>{val.email}</td>
        <td>{val.phone}</td>
        <td>{val.status}</td>
        <td style={{cursor: "pointer"}}><FiEdit onClick={handleCshow}/><TiDeleteOutline/></td>
      </tr>
    )
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [pushow, setPuShow] = useState(false);

  const handlePuClose = () => setPuShow(false);
  const handlePuShow = () => setPuShow(true);

  const [cshow, setCshow] = useState(false);

  const handleCclose = () => setCshow(false);
  const handleCshow = () => setCshow(true);

  return (
    <>
      <Navbar />
      <div className="d-flex">
        <div>
          <SideBar />
        </div>
        <Container >
          <Row xs={1} md={2} lg={12}>
            <Col className='d-flex'>
              <h3>User Management</h3>
              <p className='ms-4 mt-2' >User |</p>
              <p className='ms-4 mt-2'>User management</p>

            </Col>
          </Row>
          <hr />
          <Row className=' d-flex mt-2'>
            <Col className='d-flex' lg={3}>
              <Form className='d-flex'>
                <BsSearch className='mt-2' />
                <Form.Control type="text" placeholder="Search this table" className='ms-2' />
              </Form>
            </Col>
            <Col lg={9} style={{ textAlign: 'end' }}>
              <Button variant="outline-info" className='me-4' onClick={handlePuShow}><AiOutlineFilter />Filter</Button>
              <Button variant="info" onClick={handleShow}><AiOutlinePlusCircle />Create</Button>

            </Col>
          </Row>
          <Row xs={1} md={2} lg={4}>

            <Table className='mt-5'>
              <thead>
                <tr>

                  <th>First Name</th>
                  <th> Last Name</th>
                  <th>User Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {UsersStock.map(data)}
              </tbody>
            </Table>
          </Row>
        </Container>
      </div>
      <Footer />
      <Modal show={show} onHide={handleClose}>
        <Container fluid>
          <Modal.Header closeButton>
            <Row>
              <h3>Create</h3>
            </Row>
            <hr />
          </Modal.Header>
          <Row className="d-flex">
            <Col >
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="First Name" />
                </Form.Group>
              </Form>
            </Col>
            <Col>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Last Name" />
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row className="d-flex">
            <Col>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control type="text" placeholder="User Name"></Form.Control>
                </Form.Group>
              </Form>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" placeholder="Phone"></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="Email"></Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="text" placeholder="Password"></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Role</Form.Label>
              <Form.Select aria-label="Role">
                <option>Select</option>
                <option value="1">Owner</option>
                <option value="2">Sales</option>
                <option value="3">Purchases</option>
              </Form.Select>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Warehouses</Form.Label>
              <Form.Select aria-label="Role">
                <option>Please Select</option>
                <option value="1">Warehouse 1</option>
                <option value="2">Warehouse 2</option>
              </Form.Select>
            </Col>
          </Row>
          <Button variant="primary" type="submit" className="mt-4 mb-4">
            Submit
          </Button>
        </Container>
      </Modal>
      <Modal show={cshow} onHide={handleCclose} dialogClassName="modal-90w">
        <Container fluid>
          <Modal.Header closeButton>
            <Row>
              <h3>Edit</h3> 
            </Row>
            <hr />
          </Modal.Header>
          <Row className="d-flex">
            <Col >
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Customer Name</Form.Label>
                  <Form.Control type="text" placeholder="Customer Name" />
                </Form.Group>
              </Form>
            </Col>
            <Col>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="email" />
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row className="d-flex">
            <Col>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="text" placeholder="Phone Number"></Form.Control>
                </Form.Group>
              </Form>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Country</Form.Label>
                <Form.Control type="text" placeholder="Country Name"></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="City Name"></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Form.Label>Address</Form.Label>
            <Col>
              <FloatingLabel controlId="floatingTextarea2" label="Address">
                <Form.Control
                  as="textarea"
                  placeholder="Enter Address"
                  style={{ height: '100px' }}
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Button variant="primary" type="submit" className="mt-4 mb-4">
            Submit
          </Button>
        </Container>
      </Modal>

      <Offcanvas show={pushow} onHide={handlePuClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filter</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form>
          <Form.Label>User Code</Form.Label>
        <Form.Control type="text" placeholder="Enter code" />
          <Form.Label>User Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
          <Form.Label>Phone</Form.Label>
        <Form.Control type="email" placeholder="Enter phone" />
        <Form.Label>Status</Form.Label>
        <Form.Select>
                <option>book</option>
                <option>novel</option>
                <option>register</option>
              </Form.Select>
        <Container className='d-flex'>
        <Button variant="info" className='mt-3 w-50'><AiOutlineFilter/>Filter</Button>
              <Button variant="danger" className='ms-3 mt-3 w-50' ><BsPower/>Reset</Button>
              </Container>
          </Form>
        </Offcanvas.Body>

      </Offcanvas>
    </>
  )
}