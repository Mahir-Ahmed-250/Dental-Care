import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Service.css'
const Service = ({ service }) => {
    const { id, name, img, description, price } = service
    const url = `/services/${id}`
    const history = useHistory();
    const handleServices = () => {
        history.push(url)
    }
    console.log(url)
    return (
        <div className="col-md-6 col-lg-3 mt-5">
            <Card className='card' >
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <h5 className=''> {name}</h5>
                    <h6>{price}</h6>
                    <p>{description}</p>
                    <Button onClick={handleServices}>Book Now</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;