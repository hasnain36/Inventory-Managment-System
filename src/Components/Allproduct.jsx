import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { BsSearch } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Navbar from './Navbar';
import SideBar from './SideBar';
import Footer from './Footer';
import { Border } from 'react-bootstrap-icons';

function Allproduct() {
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
                        <Col lg={9} style={{textAlign:'end'}}>
                            <Button variant="outline-info" className='me-4' >Filter</Button>
                            <Button variant="info">Create</Button>
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
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
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
                                    <td></td>
                                    <td></td>
                                </tr>
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