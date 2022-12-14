import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { BsSearch } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import BrandStock from "./BrandStock";
import { FiEdit } from "react-icons/fi";
import { TiDeleteOutline } from "react-icons/ti";
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function Brand() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const data = (val) => {
    return (
      <tr style={{ textAliign: "start" }}>
        <td>
          <Form.Check
            inline
            label=""
            name="group1"
            type="checkbox"
          ></Form.Check>
        </td>
        <td>{val.brandname}</td>
        <td>{val.branddes}</td>
        <td>
          <FiEdit onClick={handleShow} />
          <TiDeleteOutline />
        </td>
      </tr>
    );
  };
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
              <h4>Brand</h4>
              <p className="mt-1 ms-3">Product | Brand</p>
            </Col>
            <hr />
          </Row>
          <Row>
            <Col className="d-flex mt-4" lg={3}>
              <BsSearch className="m-2" />
              <Form.Control
                type="Text"
                placeholder="Search this table"
              ></Form.Control>
            </Col>
            <Col lg={9} style={{ textAlign: "end" }}>
              <Link to="/createproduct" style={{ textDecoration: "none" }}>
                <Button variant="info" className="mt-4">
                  Create
                </Button>
              </Link>
            </Col>
          </Row>
          <Row>
            <Table striped hover className="mt-4">
              <thead>
                <tr>
                  <th>
                    <Form.Check inline label="" name="group1" type="checkbox" />
                  </th>
                  <th>Brand Name</th>
                  <th>Brand Description</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>{BrandStock.map(data)}</tbody>
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
          <Row className="mt-2 ps-2">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Brand Name</Form.Label>
                <Form.Control type="text" placeholder="Category code" />
              </Form.Group>
            </Form>
          </Row>
          <Row className="ps-2">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Brand Description</Form.Label>
                <FloatingLabel
                  controlId="floatingTextarea2"
                  label="Write description.."
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Write Description"
                    style={{ height: "100px" }}
                  />
                </FloatingLabel>
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
export default Brand;
