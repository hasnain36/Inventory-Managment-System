import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { BsSearch} from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Navbar from './Navbar';
import SideBar from './SideBar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BiFilterAlt } from "react-icons/bi";
import { BsPower} from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { TiDeleteOutline } from "react-icons/ti";
import { AiOutlinePlusCircle } from "react-icons/ai";
import AllSaleStock from './AllSaleStock';
import Pagination from "react-bootstrap/Pagination";


function AllSale() {
const data1=(value1)=>{
    return(
        <tr>
            <td>{value1.date}</td>
            <td>{value1.reference}</td>
            <td>{value1.addedby}</td>
            <td>{value1.customer}</td>
            <td>{value1.warehouse}</td>
            <td>{value1.status}</td>
            <td>{value1.grandtotal}</td>
            <td>{value1.paid}</td>
            <td>{value1.due}</td>
            <td>{value1.paymentstatus}</td>
            <td>{value1.due}</td>
            <td>
          <FiEdit />
          <TiDeleteOutline />
        </td>
        </tr>
    )

}
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
                    <Row  >
                        <Form>
                            <Col className='d-flex mt-4'>
                                <h4>All Sale</h4>
                                <p className='mt-1 ms-3'>Sale | All Sale</p>
                            </Col>
                        </Form>
                    </Row>
                    <hr />
                    <Row md={12} lg={12}>
                        <Col className="d-flex" lg={3}>
                            <BsSearch className='m-2' />
                            <Form.Control type="Text" placeholder='Search this table'></Form.Control>
                        </Col>
                        <Col lg={9} style={{ textAlign: 'end' }}>
                            <Button variant="outline-info" className='me-4' onClick={handleShow}><BiFilterAlt className='pe-1'/>Filter</Button>
                            <Link to='/createsale' style={{ textDecoration: "none" }}>
                                <Button variant="info"><AiOutlinePlusCircle className='pe-1'/>Create</Button>
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <Table striped hover className='mt-4'>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Reference</th>
                                    <th>Added by</th>
                                    <th>Customer</th>
                                    <th>Warehouse</th>
                                    <th>Status</th>
                                    <th>Grand Total</th>
                                    <th>Paid</th>
                                    <th>Due</th>
                                    <th>Payment status</th>
                                    <th>Shipping status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                               {AllSaleStock.map(data1)}
                            </tbody>
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
            <Offcanvas show={show} onHide={handleClose} placement='end'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Filter</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Row>
                        <Form>
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="date" placeholder=""/>
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
                            <Form.Label>Customer</Form.Label>
                            <Form.Select id="status">
                                <option selected>Choose Customer</option>
                                <option>Mehr Ali</option>
                                <option>Asad Abbas</option>
                                <option>Hasnain Asif</option>
                            </Form.Select>
                        </Form>
                    </Row>
                    <Row>
                        <Form>
                            <Form.Label>Warehouse</Form.Label>
                            <Form.Select id="Warehouse">
                                <option selected>Choose Warehouse</option>
                                <option>Warehouse 1</option>
                                <option>Warehouse 2</option>
                            </Form.Select>
                        </Form>
                    </Row>
                    <Row>
                        <Form>
                            <Form.Label>Status</Form.Label>
                            <Form.Select id="status">
                                <option selected>Please Select</option>
                                <option>Completed</option>
                                <option>Pending</option>
                                <option>Orderd</option>
                            </Form.Select>
                        </Form>
                    </Row>
                    <Row>
                        <Form>
                            <Form.Label>Payment Status</Form.Label>
                            <Form.Select id="status">
                                <option selected>Choose Status</option>
                                <option>paid</option>
                                <option>Partial</option>
                                <option>Unpaid</option>
                            </Form.Select>
                        </Form>
                    </Row>
                    <Row>
                        <Form>
                            <Form.Label>Shopping Status</Form.Label>
                            <Form.Select id="status">
                                <option selected>Please Select</option>
                                <option>Orderd</option>
                                <option>Packed</option>
                                <option>Shipped</option>
                            </Form.Select>
                        </Form>
                    </Row>
                    <Row>
                        <Form>
                            <Form.Label>Warehouse</Form.Label>
                            <Form.Select>
                                <option selected>Please Warehouse</option>
                                <option>Warehouse 1</option>
                                <option>Warehouse 2</option>
                            </Form.Select>
                        </Form>
                    </Row>
                    <Container className='d-flex mt-2 ps-1'>
                    <Button variant="info" className='w-50 me-2'><BiFilterAlt/>Filter</Button>
                    <Button variant="danger" className='w-50 me-2'><BsPower/> Reset</Button>
                    </Container>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}
export default AllSale;