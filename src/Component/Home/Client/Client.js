import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ClientDetail from '../ClientDetail/ClientDetail';

const Client = () => {

    const [clientValue, setClientValue] = useState([]);
    
    
    useEffect(() => {
        fetch('https://secure-wave-50671.herokuapp.com/clientlist')
            .then(res => res.json())
            .then(data => setClientValue(data))
    }, [])
  
    return (
        <div className="container mt-5">
            <div className="text-center">               
                <h2 style={{color:'#3a4256'}}>Client<span className="all-span">Feedback</span></h2>                               
            </div>
            <div className="row mt-5">
                {
                    clientValue.map(eachClient =><ClientDetail eachClient={eachClient}></ClientDetail>)
                }
            </div>            
        </div>
    );
};

export default Client;