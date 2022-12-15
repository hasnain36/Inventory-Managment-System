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

function Category() {
    const data = (val) => {
        return (
            <tr>
                <td><Form.Check
                    inline
                    label=""
                    name="group1"
                    type='checkbox'
                /></td>
                <td style={{textAlign:"start"}}>{val.categoryname}</td>
                <td style={{textAlign:'start'}}>{val.categorycode}</td>
                <td style={{textAlign:"start"}}><FiEdit/><TiDeleteOutline/></td>
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
                                    <th>
                                        <Form.Check
                                            inline
                                            label=""
                                            name="group1"
                                            type='checkbox'
                                        />
                                    </th>
                                    <th style={{textAlign:'start'}}>Category Name</th>
                                    <th style={{textAlign:'start'}}>Category Code</th>
                                    <th style={{textAlign:'start'}}>Action</th>
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
        </>
    );
}
export default Category;