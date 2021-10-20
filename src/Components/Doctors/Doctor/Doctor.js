import React from 'react';
import { Card } from 'react-bootstrap';

const Doctor = ({ doctor }) => {
    const { name, img } = doctor
    return (
        <div className="col-md-6 col-lg-3 mt-5 animate__animated animate__fadeInLeft ">
            <div  >
                <Card className='card' >
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <h5 className='text-center'> {name}</h5>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Doctor;