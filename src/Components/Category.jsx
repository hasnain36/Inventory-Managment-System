import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { BsSearch } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Navbar from './Navbar';
import SideBar from './SideBar';
import Footer from "./Footer";
import { Link } from 'react-router-dom';
import CategoryStock from './CategoryStock';
import { FiEdit } from "react-icons/fi";
import { TiDeleteOutline } from "react-icons/ti";
import Modal from 'react-bootstrap/Modal';

function Category() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    const data = (val) => {
        return (
            <tr>
                <td >{val.categoryname}</td>
                <td>{val.categorycode}</td>
                <td style={{cursor:'pointer'}}><FiEdit onClick={handleShow}/><TiDeleteOutline/></td>
            </tr>
        )
    }
    return (
        <>
            <Navbar />
            <div className="d-flex">
                <div>
                    <SideBar />
                </div>
                <Container>
                    <Row>
                        <Col className="d-flex mt-4">
                            <h4>Category</h4>
                            <p className='mt-1 ms-3'>Product | Category</p>
                        </Col>
                        <hr />
                    </Row>
                    <Row>
                        <Col className="d-flex mt-4" lg={3}>
                            <BsSearch className='m-2' />
                            <Form.Control type="Text" placeholder='Search this table'></Form.Control>
                        </Col>
                        <Col lg={9} style={{ textAlign: 'end' }}>
                            <Link to='/createproduct' style={{ textDecoration: "none" }}>
                                <Button variant="info" className="mt-4">Create</Button>
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <Table striped hover className='mt-4'>
                            <thead>
                                <tr>
                                    <th >Category Name</th>
                                    <th>Category Code</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {CategoryStock.map(data)}
                            </tbody>
                        </Table>
                    </Row>
                </Container>
            </div>
            <Footer />
            <Modal show={show} onHide={handleClose} dialogClassName="modal-90w">
        <Container fluid>
          <Modal.Header closeButton>
              <h5>Edit</h5>
            <hr />
          </Modal.Header>
          <Row className='mt-2 ps-2' >
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Category Code</Form.Label>
                  <Form.Control type="text" placeholder="Category code" />
                </Form.Group>
              </Form>
            </Row>
            <Row className='ps-2'>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Category Name</Form.Label>
                  <Form.Control type="email" placeholder="Category Name" />
                </Form.Group>
              </Form>
          </Row>
          <Button variant="primary" type="submit" className="mt-2 mb-4 ms-2">
            Submit
          </Button>
        </Container>
      </Modal>
        </>
    );
}
export default Category;