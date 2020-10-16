import React from 'react';
import {Carousel} from '3d-react-carousal';
import carousel1 from '../../images/carousel1.png';
import carousel2 from '../../images/carousel2.png';
import carousel3 from '../../images/carousel3.png';

let slides = [
    <img  src={carousel1} style={{ height:'300px'}} alt="1" />,
    <img  src={carousel2} style={{ height:'300px'}} alt="2" />  ,    
    <img  src={carousel3} style={{ height:'300px'}} alt="3" />  ,
];

const Slider = () => {
    return (
        <div className="container-fluid col-12" style={{backgroundColor: '#111430',height: '450px'}}>
            <div className="text-center mt-5 pt-5 mb-3">
                <h3 style={{color:'white'}}>Here Are Some Of <span className="all-span">Our Works</span></h3>
            </div>            
            <div className="col-md-12 col-12 mt-3 pt-3">
               <Carousel slides={slides} autoplay={true} interval={1000}/>
            </div>
        </div>
    );
};

export default Slider;