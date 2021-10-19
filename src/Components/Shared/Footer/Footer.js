import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import logo from '../Logo/logo.png'
import './Footer.css'

const fb = <FontAwesomeIcon icon={faFacebook} />
const yt = <FontAwesomeIcon icon={faYoutube} />
const twitter = <FontAwesomeIcon icon={faTwitter} />
const instagram = <FontAwesomeIcon icon={faInstagram} />
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

                        <h5 className="footer-icons1">{fb}</h5>
                        <h5 className="footer-icons2">{yt}</h5>
                        <h5 className="footer-icons3">{twitter}</h5>
                        <h5 className="footer-icons4">{instagram}</h5>

                    </div>

                </div>
            </div>
        </div>


    );
};

export default Footer;