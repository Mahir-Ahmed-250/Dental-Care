import React from 'react';
import logo from '../Logo/logo.png'

import './Footer.css'
const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="footer-left">

                    <h3>  <img className='logo' src={logo} alt="" />Dental<span>Care</span></h3>
                    <p className="footer-company-name">DentalCare &copy; 2022</p>
                </div>

                <div className="footer-center">

                    <div>

                        <p><span>221B Baker Street</span> London, UK</p>
                    </div>

                    <div>

                        <p>+88 019-99999</p>
                    </div>

                    <div>

                        <p><a href="mailto:support@company.com">contact@DentalCare.com</a></p>
                    </div>

                </div>

                <div className="footer-right">

                    <div className="footer-icons">

                        <h1>Social Media</h1>

                    </div>

                </div>
            </div>
        </div>


    );
};

export default Footer;