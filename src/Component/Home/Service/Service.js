import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';


const Service = () => {
    const [ServiceValue, setServiceValue] = useState([]);

    useEffect(() => {
        fetch('https://secure-wave-50671.herokuapp.com/serviceList')
            .then(res => res.json())
            .then(data => setServiceValue(data))
    }, [])
    return (
        <section className="service-container mt-5 pt-5">
            <div className="text-center">               
                <h2 style={{color:'#3a4256'}}>Provide Awesome<span className="all-span">Services</span></h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5">
                    {
                       ServiceValue.map( service => <ServiceDetail service={service}></ServiceDetail>) 
                    }
                </div>            
            </div>            
        </section>
    );
};

export default Service;