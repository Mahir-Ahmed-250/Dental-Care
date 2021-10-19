import React from 'react';
import image from './image/about.png'
import './About.css'
const AboutUs = () => {
    return (
        <div className="container">

            <div className='row'>
                <h2 className='text-center mt-2 about-heading text-center'>About Us</h2>
                <div className="col-md-6 col-lg-4 animate__animated animate__fadeInLeft">
                    <img src={image} alt="" />
                </div>
                <div className='col-md-6 col-lg-8 mt-5 about animate__animated animate__fadeInRight'>
                    <h2>DentalCare is one of the largest dental Treatment providers, and we are proud to serve our patients. Our mission is to keep dentistry accessible for as many people as possible. Our staff members are well-versed in confirming coverage, but we also encourage patients to familiarize themselves with their benefits.  </h2>
                </div>

            </div>
        </div>
    );
};

export default AboutUs;