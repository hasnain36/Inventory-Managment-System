import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { BsSearch } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import SideBar from './SideBar';
import Navbar from './Navbar'
import Footer from './Footer'

function Purchasesreturn() {
    return (
        <>
        <Navbar/>
        <div className="d-flex">
            <div>
                <SideBar/>
            </div>
            <Container>
            <Row>
                <Col className="d-flex mt-4">
                    <h4>Purchase Return</h4>
                    <p className='mt-1 ms-3'>All Return | Purchase Return</p>
                </Col>
                <hr />
            </Row>
            <Row>
                <Col className="d-flex mt-4" lg={3}>
                    <BsSearch className='m-2' />
                    <Form.Control type="Text" placeholder='Search this table'></Form.Control>
                </Col>
                <Col lg={9} style={{textAlign:"end"}} >
                    <Button variant="info" className="mt-4">Filter</Button>
                </Col>
            </Row>
            <Row>
                <Table striped hover className='mt-4' responsive="sm">
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
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>
            </Row>
        </Container>
        </div>
        <Footer/>
        </>
    );
}
export default Purchasesreturn;