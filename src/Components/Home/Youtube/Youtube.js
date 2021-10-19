import React from 'react';
import './Youtube.css'
import img from './images/yt.png'
const Youtube = () => {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-12 col-lg-6 text-center'>
                    <img src={img} alt="" />
                </div>
                <div className='col-md-12 col-lg-6'>
                    <div>
                        <h1 className="text-center"> Watch on <span className="youtube">YouTube</span>
                        </h1>
                    </div>
                    <div className="iframe-container"><iframe width="590" height="355" src="https://www.youtube.com/embed/9Qa2K1CC3Hw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Youtube;