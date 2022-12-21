import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { BsSearch, BsPower } from "react-icons/bs";
import { BiFilterAlt } from "react-icons/bi";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Table from "react-bootstrap/Table";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import AllProductStock from "./AllProductStock";
import { FiEdit } from "react-icons/fi";
import { TiDeleteOutline } from "react-icons/ti";
import Pagination from "react-bootstrap/Pagination";

function Allproduct() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const data = (val) => {
    return (
      <tr style={{ textAlign: "center" }}>
        <td>{val.Name}</td>
        <td>{val.code}</td>
        <td>{val.Category}</td>
        <td>{val.brand}</td>
        <td>{val.price}</td>
        <td>{val.unit}</td>
        <td>{val.quantity}</td>
        <td style={{ cursor: "pointer" }}>
          <Link to="/updateproduct" style={{ color: "black" }}>
            <FiEdit />
          </Link>
          <TiDeleteOutline style={{ cursor: "pointer" }} />
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
            <Form>
              <Col className="d-flex mt-4">
                <h4>All Product</h4>
                <p className="mt-1 ms-3">Product | All Product</p>
              </Col>
            </Form>
          </Row>
          <hr />
          <Row md={12} lg={12}>
            <Col className="d-flex" lg={3}>
              <BsSearch className="m-2" />
              <Form.Control
                type="Text"
                placeholder="Search this table"
              ></Form.Control>
            </Col>
            <Col lg={9} style={{ textAlign: "end" }}>
              <Button
                variant="outline-info"
                className="me-4"
                onClick={handleShow}
              >
                <BiFilterAlt className="pe-1" />
                Filter
              </Button>
              <Link to="/createproduct" style={{ textDecoration: "none" }}>
                <Button variant="info">
                  <AiOutlinePlusCircle />
                  Create
                </Button>
              </Link>
            </Col>
          </Row>
          <Row>
            <Table striped hover className="mt-4">
              <thead style={{ textAlign: "center" }}>
                <tr>
                  <th>Name</th>
                  <th>Code</th>
                  <th>Category</th>
                  <th>Brand</th>
                  <th>Price</th>
                  <th>Unit</th>
                  <th>Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>{AllProductStock.map(data)}</tbody>
            </Table>
            <Pagination>
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item active>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Ellipsis />
              <Pagination.Item>{5}</Pagination.Item>
              <Pagination.Next />
              <Pagination.Last />
            </Pagination>
          </Row>
        </Container>
      </div>
      <Footer />

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        className="  pe-3"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filter</Offcanvas.Title>
        </Offcanvas.Header>
        <Form className="ps-3">
          <Form.Label>Code Product</Form.Label>
          <Form.Control type="text" placeholder="Name" />
          <Form.Label>Product</Form.Label>
          <Form.Control type="text" placeholder="Name" />
          <Form.Label>Category</Form.Label>
          <Form.Select>
            <option>Adidas</option>
            <option>Nike</option>
            <option>NDURE</option>
          </Form.Select>
          <Form.Label>Brand</Form.Label>
          <Form.Select>
            <option>Adidas</option>
            <option>Nike</option>
            <option>NDURE</option>
          </Form.Select>
        </Form>
        <Container className="mt-3 d-flex ps-3">
          <Button variant="info" className="me-3 w-50">
            <BiFilterAlt className="pe-1" />
            Filter
          </Button>
          <Button variant="danger" className="w-50">
            <BsPower className="pe-1" />
            Reset
          </Button>
        </Container>
      </Offcanvas>
    </>
  );
}
export default Allproduct;
