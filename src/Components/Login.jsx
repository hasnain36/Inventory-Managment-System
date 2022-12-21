import React, { useState } from 'react'
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
import { Link} from 'react-router-dom';

function Login() {
  const [user,setUser]=useState("");
    const [password,setPassword]=useState("");
    const [userErr,setUserErr]=useState(false);
    const [passErr,setPassErr]=useState(false);

  function loginHandle(e)
  {

      console.log("EVENT ", e)
        if(user.length < 3 || password.length<3)
        {
            alert("type correct values")
        }
        else if(user === null || password === null)
        {
            alert("please enter User name or Password")
        }
        else if(user === null)
        {
          alert("please enter User name")
        }
        else if(password === null)
        {
          alert("please enter password ")
        }
        else
        {
          alert("all good:)")
        }
        e.preventDefault()
    }
    function userHandler(e){
        let item=e.target.value;
        if(item.length<3 )
        {
           setUserErr(true)
        }
        else
        {
            setUserErr(false)
        }
        setUser(item)
    }
    function passwordHandler(e){
        let item=e.target.value;
        if(item.length<3 )
        {
           setPassErr(true)
        }
        else
        {
            setPassErr(false)
        }
        setPassword(item)

    }
  // method navigate
  return (
    <MDBContainer fluid className='h-5 bg-image'  style= {{backgroundImage: 'url(https://www.dreamstime.com/inventory-management-concept-cell-background-d-illustration-image138441533)'}}>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          
          <MDBCard className='bg-info text-white my-5 mx-auto' style={{borderRadius: '2rem', maxWidth: '400px' , maxheight:'30px'}}  >
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-75 mb-5">Please enter your login and password!</p>

              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' placeholder='Enter email address' id='formControlLg' type='email' size="lg" onChange={userHandler} required/>
              
              {userErr?<span>User Not Valid</span>:""}
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' placeholder='Enter password' id='formControlLg' type='password' size="lg" onChange={passwordHandler} required/>
              
              {passErr?<span>Password Not Valid</span>:""}
              <p className="small mb-3 pb-lg-2">Forgot password?</p>
              <Link to='/dashboard'>
              <MDBBtn outline className='mx-2 px-5' color='white' size='lg' type='submit' onClick={loginHandle}>
                Login
              </MDBBtn>
              </Link>
            </MDBCardBody>
          </MDBCard>
              

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default Login;