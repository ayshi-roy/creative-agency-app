import React from 'react';
import Frame from '../../../images/logos/Frame.png'
const HeaderMain = () => {
    return (
        <section className="row">
            <div className="col-md-4">
                <h1 style={{color: 'black',fontWeight: 'bold'}}>Let's Grow Your<br/>Brand To The <br/>Next Level</h1>
                <p className="text-dark"> From one intuitive system, you can edit your website, monitor its performance and even track. Whether you’re starting out with a new website or are highly experienced, our innovative Doctor Portal is simple to use.</p>
                <button className="btn all-button">
                    Hire us  
                </button>                
            </div>
            <div className="col-md-6 col-6 ml-5 pl-5">
                <img src={Frame} className="img-fluid"/>
            </div>
        </section>
    );
};

export default HeaderMain;