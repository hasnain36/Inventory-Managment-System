import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Table } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import { BsSearch } from "react-icons/bs";
import SideBar from './SideBar';
import Footer from './Footer';
import Navbar from './Navbar';

 function CreatePurchase() {
  return (
    <>
    <Navbar/>
    <div className="d-flex">
      <div>
        <SideBar/>
      </div>
      <Container className='text-start'>
        <Row >
          <Col className='d-flex mt-4' >
            <h4>Create Purchase</h4>
            <p className='mt-1 ms-3'>All Purchases |</p>
            <p className='mt-1 ms-3'>Create Purchase</p>
            </Col>
            <hr/>
        </Row>
        <Row>
            <Col>
            <Form>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Date *</Form.Label>
        <Form.Control type="Date" />
      </Form.Group>
      </Form>
      </Col>
      <Col>
      <Form>
      <Form.Group className="mb-3">
        <Form.Label>Supplier *</Form.Label>
        <Form.Select >
          <option>It Supply</option>
          <option>Fruit supply</option>
          <option>Schulist-Hickle</option>
          <option>Corwin-Pfeffer</option>
        </Form.Select>
      </Form.Group>
      </Form>
      </Col>
      <Col>
      <Form>
      <Form.Group className="mb-3">
        <Form.Label>Warehouse *</Form.Label>
        <Form.Select >
          <option>Warehouse 1</option>
          <option>Warehouse 2</option>
        </Form.Select>
      </Form.Group>
    </Form>
            </Col>
        </Row>
        <Row>
          <Col>
          <Form>
          <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Porduct</Form.Label>
        <InputGroup.Text id="basic-addon1" ><BsSearch className='me-2'/><Form.Control type="text" placeholder="Scan/Search Product by Code Or Name" /></InputGroup.Text>
      </Form.Group>
    </Form>
          </Col>
        </Row>
        <Row>
        <Table bordered >
      <thead>
        <tr>
          <th>#</th>
          <th>Product</th>
          <th>Net Unit Cost</th>
          <th>Current Stock</th>
          <th>Qty</th>
          <th>Discount</th>
          <th>Tax</th>
          <th>Subtotal</th>
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
        </tr>
      </tbody>
    </Table>
        </Row>
      
        <Table striped style={{width:'250px', marginLeft:'75%'}}>
      <tbody>
        <tr>
          <td>Order Tax</td>
          <td>$ 0.00(0.00%)</td>
        </tr>
        <tr>
          <td>Discount</td>
          <td>$ 0.00</td>
        </tr>
        <tr>
          <td>Shipping</td>
          <td>$ 0.00</td>
        </tr>
        <tr style={{fontWeight:'bold'}}>
          <td>Grand Total</td>
          <td>$ 0.00</td>
        </tr>
      </tbody>
    </Table>
    <Row xs={1} md={2} lg={3}>
      <Col>
      <Form>
      <Form.Label>Order Tax</Form.Label>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="0"
          aria-label="0"
          aria-describedby="basic-addon1"
          style={{backgroundColor:'lightgray'}}
        />
        <InputGroup.Text id="basic-addon1">%</InputGroup.Text>
      </InputGroup>
      </Form>
      </Col>
      <Col>
      <Form>
      <Form.Label>Discount</Form.Label>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="0"
          aria-label="0"
          aria-describedby="basic-addon1"
          style={{backgroundColor:'lightgray'}}
        />
        <InputGroup.Text id="basic-addon1">$</InputGroup.Text>
      </InputGroup>
      </Form>
      </Col>
      <Col>
      <Form>
      <Form.Label>Shipping</Form.Label>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="0"
          aria-label="0"
          aria-describedby="basic-addon1"
          style={{backgroundColor:'lightgray'}}
        />
        <InputGroup.Text id="basic-addon1">$</InputGroup.Text>
      </InputGroup>
      </Form>
      </Col>
    </Row>
    <Row xs={1} md={2} xl={3}>
        <Col>
        <Form.Group className="mb-3">
        <Form.Label>Status *</Form.Label>
        <Form.Select style={{backgroundColor:'lightgray'}}>
          <option>received</option>
          <option>pending</option>
          <option>ordered</option>
        </Form.Select>
      </Form.Group>
      </Col>
      <Col></Col>
      <Col></Col>
    </Row>
    <Form.Label>Note</Form.Label>
      <FloatingLabel controlId="floatingTextarea2" label="A Few words....">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px', backgroundColor:'lightgray' }}
        />
      </FloatingLabel>
      <Button variant="info" className='mt-3'>Submit</Button>
    </Container>
    </div>
    <Footer/>
    </>
  )
}
export default CreatePurchase;