import React, { useState } from 'react';
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
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AiOutlineFilter } from 'react-icons/ai';
import { BsPower } from 'react-icons/bs';
import { AiOutlinePlusCircle } from 'react-icons/ai';

export default function Customer() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [pshow, setPshow] = useState(false);

  const handlePclose = () => setPshow(false);
  const handlePshow = () => setPshow(true);
  return (
    <>
      <Navbar />
      <div className="d-flex">
        <div>
          <SideBar />
        </div>
        <Container className='ps-3' >
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
            <Col lg={9} style={{ textAlign: 'end' }}>
              <Button variant="outline-info" onClick={handlePshow} className='me-4' ><AiOutlineFilter />Filter</Button>
              <Button variant="info" onClick={handleShow}><AiOutlinePlusCircle />Create</Button>

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
                </tr>
              </tbody>


            </Table>
          </Row>
        </Container>
      </div>
      <Footer />
      <Modal show={show} onHide={handleClose} dialogClassName="modal-90w">
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

      <Offcanvas show={pshow} onHide={handlePclose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filter</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form>
          <Form.Label>Customer Code</Form.Label>
        <Form.Control type="text" placeholder="Enter code" />
          <Form.Label>Customer Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
          <Form.Label>Phone</Form.Label>
        <Form.Control type="email" placeholder="Enter phone" />
          <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Container className='d-flex'>
              <Button variant="info" className='mt-3 w-50'  ><AiOutlineFilter /> Filter</Button>
              <Button variant="danger" className='ms-3 mt-3 w-50' ><BsPower/>Reset</Button>
              </Container>
          </Form>
        </Offcanvas.Body>

      </Offcanvas>

    </>
  )
}
