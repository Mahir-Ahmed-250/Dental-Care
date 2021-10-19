import React from 'react';
import img1 from './notfound.png'
const NotFound = () => {
    return (
        <div>
            <div className=" text-center">
                <img className='notfound' src={img1} alt="" />
            </div>
        </div>
    );
};

export default NotFound;