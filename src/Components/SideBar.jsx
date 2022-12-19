import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import { BsBarChart, BsReceipt, BsCartDash, BsArrowReturnRight, BsArrowReturnLeft, BsPeopleFill, BsGraphUp } from "react-icons/bs";
import { MdProductionQuantityLimits } from "react-icons/md";
import ListGroup from 'react-bootstrap/ListGroup';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';


export default function SideBar() {
  const [pshow, setPshow] = useState(false);

  const handleClose = () => setPshow(false);
  const handleShow = () => setPshow(true);

  const [prshow, setPrshow] = useState(false);

  const handlePrClose = () => setPrshow(false);
  const handlePrShow = () => setPrshow(true);

  const [sshow, setSshow] = useState(false);

  const handleSaClose = () => setSshow(false);
  const handleSaShow = () => setSshow(true);

  const [peshow, setPeshow] = useState(false);

  const handlePeClose = () => setPeshow(false);
  const handlePeShow = () => setPeshow(true);
  return (
    <>
    <Container fluid sticky='true' className='d-none d-sm-block d-sm-none d-md-block'>
      <Link to='/dashboard' style={{textDecoration:"none"}}>
        <Card style={{ width: '6rem', height: '7rem' }}>
          <BsBarChart style={{fontSize: "3rem"}} className="text-primary ms-4 mt-3" />
          <p className="text-primary" > Dashboard</p>
        </Card>
      </Link>
      <Card style={{ width: '6rem', height: '7rem' }}>
        <MdProductionQuantityLimits onClick={handleShow} style={{fontSize: "3rem"}} className="text-primary ms-4 mt-3" />
        <p className="text-primary" onClick={handleShow} > Product </p>
        <Offcanvas show={pshow} onHide={handleClose}>
          <Offcanvas.Body>
            <ListGroup variant="flush">
              <Link to='/createproduct' style={{textDecoration:"none"}}>
              <ListGroup.Item>Create Product</ListGroup.Item>
              </Link>
              <Link to='/allproduct' style={{textDecoration:"none"}}>
              <ListGroup.Item>All Product</ListGroup.Item>
              </Link>
              <Link to='/category' style={{textDecoration:"none"}}>
              <ListGroup.Item>Category</ListGroup.Item>
              </Link>
              <Link to='/brand' style={{textDecoration:"none"}}>
              <ListGroup.Item>Brand</ListGroup.Item>
              </Link>
              <ListGroup.Item></ListGroup.Item>
            </ListGroup>
          </Offcanvas.Body>
        </Offcanvas>
      </Card>

      <Card style={{ width: '6rem', height: '7rem' }}>
        <BsReceipt onClick={handlePrShow} size={'sm'} className="text-primary" />
        <p className="text-primary" onClick={handlePrShow} > Purchase</p>
        <Offcanvas show={prshow} onHide={handlePrClose}>
          <Offcanvas.Body>
            <ListGroup variant="flush">
              <Link to='/createpurchase' style={{textDecoration:"none"}}>
                <ListGroup.Item>Create Purchase</ListGroup.Item>
              </Link>
              <Link to='/allpurchase' style={{textDecoration:"none"}}>
              <ListGroup.Item>All Purchase</ListGroup.Item>
              </Link>
              <ListGroup.Item></ListGroup.Item>
            </ListGroup>
          </Offcanvas.Body>
        </Offcanvas>
      </Card>

      <Card style={{ width: '6rem', height: '7rem' }}>
        <BsCartDash onClick={handleSaShow} style={{fontSize: "3rem"}} className="text-primary ms-4 mt-3" />
        <p className="text-primary" onClick={handleSaShow}> Sale</p>
        <Offcanvas show={sshow} onHide={handleSaClose}>
          <Offcanvas.Body>
            <ListGroup variant="flush">
              <Link to='/createsale' style={{textDecoration:"none"}}>
              <ListGroup.Item>Create Sale</ListGroup.Item>
              </Link>
              <Link to='/allsale' style={{textDecoration:"none"}}>
              <ListGroup.Item>All Sale</ListGroup.Item>
              </Link>
              <ListGroup.Item></ListGroup.Item>
            </ListGroup>
          </Offcanvas.Body>
        </Offcanvas>
      </Card>

        <Link to='/salereturn' style={{textDecoration:"none"}}>
      <Card style={{ width: '6rem', height: '7rem' }}>
        <BsArrowReturnRight style={{fontSize: "3rem"}} className="text-primary ms-4 mt-3" />
        <p className="text-primary">Sale Return</p>
      </Card>
        </Link>

        <Link to='/purchasereturn' style={{textDecoration:"none"}}>
      <Card style={{ width: '6rem', height: '7rem' }}>
        <BsArrowReturnLeft style={{fontSize: "4rem"}} className="text-primary ms-3 mt-2" />
        <p className="text-primary">Purchase Return</p>
      </Card>
        </Link>

      <Card style={{ width: '6rem', height: '7rem' }}>
        <BsPeopleFill onClick={handlePeShow} style={{fontSize: "3rem"}} className="text-primary ms-4 mt-3" />
        <p className="text-primary" onClick={handlePeShow} >People</p>
        <Offcanvas show={peshow} onHide={handlePeClose}>
      <Offcanvas.Body>
      <ListGroup variant="flush">
      <Link to='/customer' style={{textDecoration:"none"}}>
      <ListGroup.Item>Customer</ListGroup.Item>
      </Link>
      <Link to='/suppliers'style={{textDecoration:"none"}}>
      <ListGroup.Item>Supplier</ListGroup.Item>
      </Link>
      <Link to='/user'style={{textDecoration:"none"}}>
      <ListGroup.Item>Users</ListGroup.Item>
      </Link>
      <ListGroup.Item></ListGroup.Item>
    </ListGroup>
        </Offcanvas.Body>
        </Offcanvas>
      </Card>

      <Card style={{ width: '6rem', height: '7rem' }}>
        <BsGraphUp style={{fontSize: "3rem"}} className="text-primary ms-4 mt-3" />
        <p className="text-primary">Report</p>
      </Card>
    </Container>
    </>

  )
}