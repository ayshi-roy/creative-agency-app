import React, { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import ServiceListDetail from '../ServiceListDetail/ServiceListDetail';
import Sidebar from '../Share/Sidebar/Sidebar';
import logo from '../../images/logos/logo.png';

const ServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [OrderList, setOrderList] = useState([]);

    useEffect(() => {
        fetch('https://secure-wave-50671.herokuapp.com/orderlist?email='+loggedInUser.email)
         .then(res => res.json())
         .then(data => setOrderList(data));
    },[])
    return (
        <div className="container-fluid">
            <div className="row d-flex">
                <div className="col-md-2">
                    <img src={logo} className="img-fluid"/>
                </div>
                <div className="col-md-2">
                    <h3>User Service List</h3>
                </div>
                <div className="col-md-2 ml-auto p-2">{loggedInUser.name}</div>
            </div>
            <div className="row">
                <div className="col-md-2">
                  <Sidebar></Sidebar>
                </div>
                <div className="col-md-10" style={{backgroundColor:'#F4F7FC',height:'900px'}}>
                    <div className="ml-5 mt-5">
                        <div className="row">
                            {
                               OrderList.map( list => <ServiceListDetail list={list}></ServiceListDetail>) 
                            }
                        </div>
                    </div>                    
                </div>               
            </div>            
        </div>
    );
};

export default ServiceList;