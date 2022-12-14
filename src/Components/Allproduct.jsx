import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { BsJustifyLeft, BsSearch } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Navbar from './Navbar';
import SideBar from './SideBar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import AllProductStock from './AllProductStock';
import { BsEyeFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { TiDeleteOutline } from "react-icons/ti";

function Allproduct() {
    const data = (val) => {
        return (
            <tr style={{textAlign:"start"}}>
                <td><Form.Check
                    inline
                    label=""
                    name="group1"
                    type='checkbox'
                /></td>
                <td>{val.Name}</td>
                <td>{val.code}</td>
                <td>{val.Category}</td>
                <td>{val.brand}</td>
                <td>{val.price}</td>
                <td>{val.quantity}</td>
                <td style={{textAlign:"start"}}><BsEyeFill/> <FiEdit/><TiDeleteOutline/></td>
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
                    <Row  >
                        <Form>
                            <Col className='d-flex mt-4'>
                                <h4>All Product</h4>
                                <p className='mt-1 ms-3'>Product | All Product</p>
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
                            <Button variant="outline-info" className='me-4' >Filter</Button>
                            <Link to='/createproduct' style={{ textDecoration: "none" }}>
                                <Button variant="info">Create</Button>
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <Table striped hover className='mt-4'>
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
                                    <th style={{textAlign:"start"}}>Name</th>
                                    <th style={{textAlign:"start"}}>Code</th>
                                    <th style={{textAlign:"start"}}>Category</th>
                                    <th style={{textAlign:"start"}}>Brand</th>
                                    <th style={{textAlign:"start"}}>Price</th>
                                    <th style={{textAlign:"start"}}>Unit</th>
                                    <th style={{textAlign:"start"}}>Quantity</th>
                                    <th style={{textAlign:"start"}}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {AllProductStock.map(data)}
                            </tbody>
                        </Table>
                    </Row>


                </Container>
            </div>
            <Footer />
        </>
    );
}
export default Allproduct;