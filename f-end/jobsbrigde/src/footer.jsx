import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';

import '@fortawesome/fontawesome-free/css/all.min.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

import "./footer.css";

export default function Footer() {
    return (
        <MDBFooter className='bg-dark text-center text-white '>
            <MDBContainer className='p-4 pb-0'>
                <section className='mb-4 justify-content-center align-items-center d-flex'>



                    <ul className='inline-list gap-5'>
                        <li><a href=""><FontAwesomeIcon icon={faWhatsapp} flip size="2xl" style={{ color: "#63E6BE", }} /></a></li>
                        <li><a href=""><FontAwesomeIcon icon={faFacebook} bounce size="2xl" style={{ color: "#74C0FC", }} /></a></li>
                        <li><a href=""><FontAwesomeIcon icon={faXTwitter} shake size="2xl" style={{ color: "#f9fafb", }} /></a></li>
                        <li><a href=""><FontAwesomeIcon icon={faInstagram} fade size="2xl" style={{ color: "#e10ebb", }} /></a></li>
                    </ul>



                </section>
            </MDBContainer>

            <div className="col-12">

                <div className="row" style={{margin:0}}>

                <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2024 Copyright

                JobsBridge

            </div>
            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', height: '20vh' }}>

  

            </div>
                </div>

            </div>


        </MDBFooter>
    );
}