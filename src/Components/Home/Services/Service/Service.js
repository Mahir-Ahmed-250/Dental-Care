import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = ({ service }) => {
    const { id, name, img, description, price } = service


    return (
        <div className="col-md-6 col-lg-3 mt-5">
            <Card className='card' >
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <h5 className=''> {name}</h5>
                    <h6>{price}</h6>
                    <p>{description}</p>


                    <Link to={`/services/${id}`}><button className='btn btn-primary'>See Details</button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;