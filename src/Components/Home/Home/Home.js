import React from 'react';
import Banner from '../Banner/Banner';
import Faq from '../Faq/Faq';
import Services from '../Services/Services/Services';
import Youtube from '../Youtube/Youtube';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Faq></Faq>
            <Youtube></Youtube>
        </div>
    );
};

export default Home;