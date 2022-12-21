import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Navbar from './Navbar';
import SideBar from './SideBar';
import Footer from './Footer';

function EditSalesReturn() {
  return (
    <>
    <Navbar/>
    <div className="d-flex">
      <div>
        <SideBar/>
      </div>
      <Container className='text-start'>
      <Row>
        <Col className="d-flex mt-4">
          <h4>Edit Sale Return</h4>
          <p className='mt-1 ms-3'>Sales| Sales Return</p>
        </Col>
        <hr/>
      </Row>
      <Card className="p-4">
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Date</Form.Label>
              <Form.Control type="Date" placeholder="Date" />
            </Form.Group>
          </Form>
        </Col>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Reference</Form.Label>
              <Form.Control type="text" placeholder="Reference" />
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label type='text' placeholder='Customer'>Customer</Form.Label>
              <Form.Control type="text" placeholder="Customer" />
            </Form.Group>
          </Form>
        </Col>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>WareHouse</Form.Label>
              <Form.Select>
                <option>Warehouse 1</option>
                <option>Waarehouse 2</option>
                <option>Waarehouse 3</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Sale ref</Form.Label>
              <Form.Select>
                <option>Disabled select</option>
                <option>Disabled select</option>
                <option>Disabled select</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Col>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Status</Form.Label>
              <Form.Select>
                <option>Pendding</option>
                <option>Paid</option>
                <option>Partial</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Grand Total</Form.Label>
              <Form.Control type="number" placeholder="amount" />
            </Form.Group>
          </Form>
        </Col>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Due</Form.Label>
              <Form.Control type="text" placeholder="Due" />
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row >
        <Col lg={6}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Payment Status</Form.Label>
              <Form.Select>
                <option>Paid</option>
                <option>Partial</option>
                <option>Pendding</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Col>
        </Row>
        </Card>
        <Button variant="info" className="me-2 mt-2">
               Submit
            </Button>
    </Container >
    </div>
    <Footer/>
    </>
    );
}
export default EditSalesReturn;