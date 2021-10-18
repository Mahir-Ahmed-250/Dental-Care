import React from 'react';
import image from './image/about.png'
const AboutUs = () => {
    return (
        <div className="container">

            <div className='row'>
                <h2 className='text-center'>About Us</h2>
                <div className="col-md-6 col-lg-4">
                    <img src={image} alt="" />
                </div>
                <div className='col-md-6 col-lg-8 mt-5'>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eum illo natus est, quasi explicabo non. Blanditiis officia cumque labore laboriosam consectetur molestias. Facere, perspiciatis. Eos nulla eum deleniti fuga non ipsa dicta quibusdam facere, et voluptatibus incidunt aliquam eveniet praesentium veniam. Rem perferendis voluptatibus magni exercitationem, rerum enim nostrum repellendus eligendi itaque et voluptas ex expedita possimus vitae! Dolorum.</h2>
                </div>

            </div>
        </div>
    );
};

export default AboutUs;