import React from 'react';

const ServiceListDetail = (props) => {
    const {name,Graphic, detail} = props.list;
    return (
        <div className="col-md-4 ml-3 w-100 p-4 mt-4" style={{backgroundColor: 'white',borderRadius: '20px'}}>
            <div className="d-flex justify-content-between">
               <h6>{Graphic}</h6>
               <button className="btn btn-outline-danger">Pending</button>
            </div>
            <p className="text-secondary pt-2">{detail}</p>
        </div>
    );
};

export default ServiceListDetail;