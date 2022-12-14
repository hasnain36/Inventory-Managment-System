import React from 'react';
import Asad from '../images/asad.png';
import {
  MDBFooter,
  MDBContainer,
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-white mt-4 bg-info' sm={2} md={2} lg={4}>
      <MDBContainer className='p-4 pb-0'>
          <p className='d-flex align-items-center'>
          <img
              src={Asad}
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <span className='me-3'>Inventory Management System</span>     
          </p>
          <div className='d-flex pb-3 ms-5' >
        © 2020 Copyright: Inventory 
      </div>
      </MDBContainer>
    </MDBFooter>
  );
}