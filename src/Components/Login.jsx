import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
}
from 'mdb-react-ui-kit';
import {Link} from 'react-router-dom';

function Login() {
  // method navigate
  return (
    <MDBContainer fluid className='h-5 bg-image'  style= {{backgroundImage: 'url(https://www.dreamstime.com/inventory-management-concept-cell-background-d-illustration-image138441533)'}}>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-info text-white my-5 mx-auto' style={{borderRadius: '2rem', maxWidth: '400px' , maxheight:'30px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-75 mb-5">Please enter your login and password!</p>

              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' placeholder='Enter email address' id='formControlLg' type='email' size="lg"/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' placeholder='Enter password' id='formControlLg' type='password' size="lg"/>

              <p className="small mb-3 pb-lg-2"><a class="text-white-75" href="#!">Forgot password?</a></p>
              <Link to='/dashboard'>
              <MDBBtn outline className='mx-2 px-5' color='white' size='lg' >
                Login
              </MDBBtn>
              </Link>
              

              <div>
                <p className="mb-0">Don't have an account? <a href="#!" class="text-white-75 fw-bold"><Link to='/signup'>Sign Up</Link></a></p>

              </div>
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default Login;