import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../../Share/Sidebar/Sidebar';
import logo from '../../../images/logos/logo.png';
import { UserContext } from '../../../App';

const AllServiceList = () => {
    const [ServiceList, setServiceList] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    useEffect(() => {
        fetch('https://secure-wave-50671.herokuapp.com/allOrderList')
         .then(res => res.json())
         .then(data => setServiceList(data));
    },[])
    return (        
        <div className="container-fluid">
            <div className="row d-flex">
                <div className="col-md-2 col-2">
                    <img src={logo} className="img-fluid"/>
                </div>
                <div className="col-md-2 col-1">
                    <h3>Service List</h3>
                </div>
                <div className="col-md-2 col-2 ml-auto p-2">{loggedInUser.name}</div>
            </div>
            <div className="row">
                <div className="col-md-2 col-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 col-10" style={{backgroundColor:'#F4F7FC',height:'100%'}}>
                    <div className="">
                        <table className="table table-borderless">
                            <thead>
                                <tr>
                                    <th className="text-secondary text-left" scope="col">Sr No</th>
                                    <th className="text-secondary" scope="col">Name</th>
                                    <th className="text-secondary" scope="col">Email Address</th>
                                    <th className="text-secondary" scope="col">Service</th>
                                    <th className="text-secondary" scope="col">Project Detail</th>                                
                                </tr>
                            </thead>
                            <tbody>
                            {
                            ServiceList.map((order, index) => 
                                    
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{order.name}</td>
                                    <td>{order.email}</td>
                                    <td>{order.Graphic}</td>
                                    <td>{order.detail}</td>                                
                                </tr>
                                )
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>        
            
        
    );
};

export default AllServiceList;