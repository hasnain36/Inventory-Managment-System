import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import {Link} from 'react-router-dom'



function Signup() {
  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image'  >
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5 bg-info' style={{maxWidth: '600px', borderRadius: '2rem'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-white text-center mb-5">Create an account</h2>
          <MDBInput wrapperClass='mb-4'  size='lg' placeholder='Enter Name' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4'  placeholder='Enter Email' size='lg' id='form2' type='email'/>
          <MDBInput wrapperClass='mb-4'  placeholder='Enter Password' size='lg' id='form3' type='password'/>
          <MDBInput wrapperClass='mb-4'  placeholder='Enter Repeat Password' size='lg' id='form4' type='password'/>
          <div className='d-flex flex-row justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
          </div>
          <Link to='/'>
          <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Register</MDBBtn>
          </Link>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Signup;