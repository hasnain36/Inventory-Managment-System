import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { BsSearch } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import SideBar from "./SideBar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BsPower } from "react-icons/bs";
import { BiFilterAlt } from "react-icons/bi";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import PurchasesreturnStock from './PurchasereturnStock';
import { TiDeleteOutline } from "react-icons/ti";
function Purchasesreturn() {
  const data = (val) => {
    return (
      <tr>
        <td>{val.date}</td>
        <td>{val.reference}</td>
        <td>{val.supplier}</td>
        <td>{val.warehouse}</td>
        <td>{val.purchaseref}</td>
        <td>{val.status}</td>
        <td>{val.grandtotal}</td>
        <td>{val.paid}</td>
        <td>{val.due}</td>
        <td>{val.paymentstatus}</td>
        <td style={{cursor:'pointer'}}>
            <Link to ='/editpurchasereturn' style={{color:'black'}}><FiEdit /></Link>
          <TiDeleteOutline />
        </td>
      </tr>
    );
  };
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
        <Container>
          <Row>
            <Col className="d-flex mt-4">
              <h4>Purchase Return</h4>
              <p className="mt-1 ms-3">All Return | Purchase Return</p>
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
              <Button variant="info" className="mt-4" onClick={handleShow}>
                Filter
              </Button>
            </Col>
          </Row>
          <Row>
            <Table striped hover className="mt-4" responsive="sm">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Reference</th>
                  <th>Supplier</th>
                  <th>WareHouse</th>
                  <th>Purchase ref</th>
                  <th>Status</th>
                  <th>Grand total</th>
                  <th>Paid</th>
                  <th>Due</th>
                  <th>Payment status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {PurchasesreturnStock.map(data)}
              </tbody>
            </Table>
          </Row>
        </Container>
      </div>
      <Footer />
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filter</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Row>
            <Form>
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" placeholder="" />
            </Form>
          </Row>
          <Row>
            <Form>
              <Form.Label>Reference</Form.Label>
              <Form.Control type="text" placeholder="Reference" />
            </Form>
          </Row>
          <Row>
            <Form>
              <Form.Label>Purchase</Form.Label>
              <Form.Select id="status">
                <option selected>Choose Purchase Ref</option>
                <option>Mehr Ali</option>
                <option>Asad Abbas</option>
                <option>Hasnain Asif</option>
              </Form.Select>
            </Form>
          </Row>
          <Row>
            <Form>
              <Form.Label>Supplier</Form.Label>
              <Form.Select id="Warehouse">
                <option selected>Choose Supplier</option>
                <option>Mehr Ali</option>
                <option>Asad Abbas</option>
                <option>Hasnain Asif</option>
              </Form.Select>
            </Form>
          </Row>
          <Row>
            <Form>
              <Form.Label>Warehouse</Form.Label>
              <Form.Select id="status">
                <option selected>Choose Warehouse</option>
                <option>Warehouse 1</option>
                <option>Warehouse 2</option>
                <option>Warehouse 3</option>
              </Form.Select>
            </Form>
          </Row>
          <Row>
            <Form>
              <Form.Label>Status</Form.Label>
              <Form.Select id="status">
                <option selected>Choose Status</option>
                <option>Complete</option>
                <option>Pandding</option>
              </Form.Select>
            </Form>
          </Row>
          <Row>
            <Form>
              <Form.Label>Payment Status</Form.Label>
              <Form.Select id="status">
                <option selected>Please Status</option>
                <option>Paid</option>
                <option>Partial</option>
                <option>Unpaid</option>
              </Form.Select>
            </Form>
          </Row>
          <Container className="d-flex mt-2 ps-1">
            <Button variant="info" className="w-50 me-2">
              <BiFilterAlt />
              Filter
            </Button>
            <Button variant="danger" className="w-50 me-2">
              <BsPower /> Reset
            </Button>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
export default Purchasesreturn;
