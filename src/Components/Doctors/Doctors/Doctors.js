import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('DoctorData.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div className='container'>
            <div className="row">
                {
                    doctors.map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;