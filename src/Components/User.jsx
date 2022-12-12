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

export default function User() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
              <Button variant="outline-info" className='me-4' >Filter</Button>
              <Button variant="info" onClick={handleShow}>Create</Button>

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
                <tr>

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
                </tr>
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
    </>
  )
}