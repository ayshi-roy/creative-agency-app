import React from 'react';
import Slider from '../../Slider/Slider';
import Client from '../Client/Client';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Service from '../Service/Service';
import WebLink from '../WebLink/WebLink';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <WebLink></WebLink>
            <Service></Service>
            <Slider></Slider>
            <Client></Client>
            <Contact></Contact>
        </div>
    );
};

export default Home;