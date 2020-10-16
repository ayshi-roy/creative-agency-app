import React from 'react';
import './WebLink.css'
import google from '../../../images/logos/google.png'
import netflix from '../../../images/logos/netflix.png'
import slack from '../../../images/logos/slack.png'
import uber from '../../../images/logos/uber.png'
import airbnb from '../../../images/logos/airbnb.png'

const WebLink = () => {
    return (
        <div className="container mt-5 pt-5"> 
            <div className="row web"> 
                <div className="col-md-2 col-6 ml-4 mb-3">
                    <img src={google} className="img-fluid"/>
                </div>
                <div className="col-md-2 col-6 mb-3 ml-4">
                    <img src={netflix} className="img-fluid"/>
                </div>
                <div className="col-md-2 col-6 mb-3 ml-4">
                    <img src={slack} className="img-fluid"/>
                </div>
                <div className="col-md-2 col-6 mb-3 ml-4">
                    <img src={uber} className="img-fluid"/>
                </div>
                <div className="col-md-2 col-6 mb-3 ml-4">
                    <img src={airbnb} className="img-fluid"/>
                </div>
            </div>
        </div>
    );
};

export default WebLink;