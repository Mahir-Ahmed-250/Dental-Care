import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import img1 from './banner/1.jpg'
import img2 from './banner/2.jpg'
import img3 from './banner/3.jpg'
import logo from '../../Shared/Logo/logo.png'
const Banner = () => {
    return (
        <div >
            <h2 className='text-center animate__animated animate__fadeInLeft mt-4 welcome-text'>Welcome to <span className='bannerName1'> <img className='logo' src={logo} alt="" />Dental</span><span className='bannerName2'>Care</span>
            </h2>
            <h3 className='text-center animate__animated animate__fadeInRight mt-4 slogan'>We Care Every Smile!
            </h3>
            <div>
                <Carousel fade className="slide mt-5" variant="dark">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img2}
                            alt="Second slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Banner;