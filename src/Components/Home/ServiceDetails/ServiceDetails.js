import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const { id } = useParams();

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://mahir-ahmed-250.github.io/API/Data.json')
            .then((res) => res.json())
            .then((data) => setServices(data))

    }, [])
    useEffect(() => {
        const foundService = services.map(
            ser => ser.id === id
        );
        console.log(foundService)
    }, [services])
    return (
        <div>
            <p>{id}</p>


        </div>
    );
};

export default ServiceDetails;