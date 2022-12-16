import React, { useState } from 'react';
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
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AiOutlineFilter } from 'react-icons/ai';
import { BsPower } from 'react-icons/bs';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import SuppliersStock from './SuppliersStock';

export default function Suppliers() {
  const data = (val) => {
    return (
      <tr>
        <td><Form.Check
          inline
          label=""
          name="group1"
          type='checkbox'
        />
        </td>
        <td>{val.code}</td>
        <td>{val.name}</td>
        <td>{val.phone}</td>
        <td>{val.email}</td>
        <td>{val.city}</td>
        <td>{val.taxnumber}</td>
        <td>{val.totalsaledue}</td>
        <td>{val.totalsalereturndue}</td>
        <td></td>
      </tr>
    )
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [prshow, setPrShow] = useState(false);

  const handlePrClose = () => setPrShow(false);
  const handlePrShow = () => setPrShow(true);
  return (
    <>
      <Navbar />
      <div className="d-flex">
        <div>
          <SideBar />
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
            <Col lg={9} style={{ textAlign: 'end' }}>
              <Button variant="outline-info" className='me-4' onClick={handlePrShow} ><AiOutlineFilter />Filter</Button>
              <Button variant="info" onClick={handleShow}><AiOutlinePlusCircle />Create</Button>
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
                {SuppliersStock.map(data)}
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
                  <Form.Label>Supplier Name</Form.Label>
                  <Form.Control type="text" placeholder="Supplier Name" />
                </Form.Group>
              </Form>
            </Col>
            <Col>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Email" />
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

      <Offcanvas show={prshow} onHide={handlePrClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filter</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form>
            <Form.Label>Suppliers Code</Form.Label>
            <Form.Control type="text" placeholder="Enter code" />
            <Form.Label>Suppliers Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
            <Form.Label>Phone</Form.Label>
            <Form.Control type="email" placeholder="Enter phone" />
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Container className='d-flex ps-1'>
              <Button variant="info" className='mt-3 w-50'><AiOutlineFilter />Filter</Button>
              <Button variant="danger" className='ms-3 mt-3 w-50' ><BsPower />Reset</Button>
            </Container>
          </Form>
        </Offcanvas.Body>

      </Offcanvas>


    </>
  )
}
