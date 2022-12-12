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
import {Link} from 'react-router-dom';

function Category() {
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
                    <h4>Category</h4>
                    <p className='mt-1 ms-3'>Product | Category</p>
                </Col>
                <hr />
            </Row>
                <Row>
                    <Col className="d-flex mt-4" lg={3}>
                        <BsSearch className='m-2'/>
                        <Form.Control type="Text" placeholder='Search this table'></Form.Control>
                    </Col>
                    <Col lg={9} style={{textAlign:'end'}}>
                        <Link to='/createproduct' style={{textDecoration:"none"}}>
                        <Button variant="info" className="mt-4">Create</Button>
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
                                <th>Category Name</th>
                                <th>Category Code</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
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
                            </tr>
                            <tr>
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
export default Category;