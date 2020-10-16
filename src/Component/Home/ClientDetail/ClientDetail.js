import React from 'react';

const ClientDetail = ({eachClient}) => {
    return (
        <div className="col-md-4">
           <div className="card text-center mb-3" style={{width: '22rem'}}>
                <div className="card-body">
                    <div className="d-flex ml-2 mt-2">
                        <a href="#" className="card-link">
                        {
                            eachClient.image ? <img style={{height: '50px'}} className="img-fluid" src={`data:image/png;base64,${eachClient.image.img}`}/>
                            :
                            <img style={{height:'50px'}} src={`https://secure-wave-50671.herokuapp.com/${eachClient.image}`} className="img-fluid"></img>
                        }                            
                        </a>
                        <a href="#" className="card-link ml-3">
                            <h6 style={{color: 'black'}}>{eachClient.name}</h6>
                            <p className="text-secondary">{eachClient.company}</p>
                        </a>                                      
                    </div> 
                    <p className="card-text text-secondary">{eachClient.detail}</p>
                                        
                </div>
            </div> 
        </div>
    );
};

export default ClientDetail;