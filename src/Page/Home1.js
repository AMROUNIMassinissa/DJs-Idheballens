import React from 'react';
import SignIn from './SignIn';
import Logo from './Logo';
import logo2 from '../images/logo2.png'
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

import './Home1.css'
const Homa1 = () => {
    return (
        <MDBContainer fluid>
            <MDBRow className='justify-content-center align-items-center home' style={{ height: '100vh' }}>
                <MDBCol xs='12' sm='12' md='4'>
                    <Logo></Logo>

                </MDBCol>
                <MDBCol xs='12' sm='12' md='6' style={{ backgroundImage: `url(${logo2})`, backgroundRepeat: 'round' }}>
                    <SignIn></SignIn>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}
export default Homa1;
