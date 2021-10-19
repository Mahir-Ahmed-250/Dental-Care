import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import './SingleService.css'
import img from './images/book.png'
import { Link } from 'react-router-dom';
const SingleService = () => {
    const { id } = useParams();
    const [serviceDetails, setServiceDetails] = useState([]);
    const [singleService, setSingleService] = useState({});
    const ID = parseInt(id)
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Mahir-Ahmed-250/API/gh-pages/Data.json')
            .then((res) => res.json())
            .then((data) => setServiceDetails(data));
    })

    useEffect(() => {
        const foundService = serviceDetails.find((service) => service.id === ID)
        setSingleService(foundService)

    }, [serviceDetails])


    return (
        <div className='container' >
            <div className='row'>
                <div className='col-lg-6 mt-3'>
                    <Card className='card' >
                        <Card.Img style={{ width: '100%' }} variant="top" src={singleService?.img} />
                        <Card.Body>
                            <h5 className=''> {singleService?.name}</h5>
                            <h6>{singleService?.price}</h6>
                            <p>{singleService?.description}</p>

                            <Link to={'/thumbsUp'}><button className='btn btn-primary'>Book Now</button></Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-lg-6'>
                    <img src={img} alt="" />
                </div>

            </div>

        </div>
    );
};

export default SingleService;