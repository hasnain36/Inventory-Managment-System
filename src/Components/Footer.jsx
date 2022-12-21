import React from 'react';
import Logo2 from '../Images/logo2.png';
import {
  MDBFooter,
  MDBContainer,
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-dark mt-4 bg-light' sm={2} md={2} lg={4}>
      <MDBContainer className='p-4 pb-0'>
          <p className='d-flex align-items-center'>
          <img
              src={Logo2}
              width="60"
              height="60"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <span className=''>Inventory Management System</span>     
          </p>
          <div className='d-flex pb-3 ms-5' >
        © 2022 Copyright: Inventory Management System 
      </div>
      </MDBContainer>
    </MDBFooter>
  );
}