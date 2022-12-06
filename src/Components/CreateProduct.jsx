import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Navbar from './Navbar'
import SideBar from './SideBar'
import Footer from './Footer'

function CreateProduct() {
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
          <h4>Create Product</h4>
          <p className='mt-1 ms-3'>Product | Create Product</p>
        </Col>
        <hr/>
      </Row>
      <Card className="p-4">
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Name</Form.Label>
              <Form.Control type="Name" placeholder="Name" />
            </Form.Group>
          </Form>
        </Col>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Code Product</Form.Label>
              <Form.Control type="Code product" placeholder="Code Product" />
              <Form.Text className="text-muted">
              Select the correct symbology below.
              </Form.Text>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Category</Form.Label>
              <Form.Select>
                <option>Adidas</option>
                <option>Nike</option>
                <option>NDURE</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Col>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Brand</Form.Label>
              <Form.Select>
                <option>Disabled select</option>
                <option>Disabled select</option>
                <option>Disabled select</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Barcode Symbology</Form.Label>
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
              <Form.Label>Product Cost</Form.Label>
              <Form.Control type="Name" placeholder="Password" />
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Product Price</Form.Label>
              <Form.Control type="Name" placeholder="Password" />
            </Form.Group>
          </Form>
        </Col>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Product Unit</Form.Label>
              <Form.Select>
                <option>Disabled select</option>
                <option>Disabled select</option>
                <option>Disabled select</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Sale Unit</Form.Label>
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
              <Form.Label>Code Product</Form.Label>
              <Form.Select>
                <option>Disabled select</option>
                <option>Disabled select</option>
                <option>Disabled select</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              
            </Form.Group>
          </Form>
        </Col>
        <Form>
        <FloatingLabel controlId="floatingTextarea2" label="Write description..">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px', backgroundColor:"gainsboro"}}
        />
      </FloatingLabel>
        </Form>
      </Row>
      <Row className="m-1 p-1">
        <Form>
      <Form.Check 
        type="switch"
        id="custom-switch"
        label="This Product has multi Varient"
      />
        </Form>
      </Row>
      <Row className="m-1 p-1">
        <Form>
      <Form.Check 
        type="switch"
        id="custom-switch"
        label="Product has serial number"
      />
        </Form>
      </Row>
      <Row className="m-1 p-1">
        <Form>
      <Form.Check 
        type="switch"
        id="custom-switch"
        label="This Product not for sellings"
      />
        </Form>
      </Row>
      </Card>
      <Button variant="info" className="mt-4">Submit</Button>
    </Container >
    </div>
    <Footer/>
    </>
  );
}

export default CreateProduct;