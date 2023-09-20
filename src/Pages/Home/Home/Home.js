import React from 'react';
import Banner from '../../Main/Banner/Banner';
import About from '../About/About';
import Pulses from '../Pulses/Pulses';
import ContactUs from '../ContactUs/ContactUs';
import PulsesForHome from '../../PulsesForHome/PulsesForHome';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <PulsesForHome></PulsesForHome>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;