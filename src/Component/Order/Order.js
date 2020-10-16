import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../Share/Sidebar/Sidebar';
import logo from '../../images/logos/logo.png';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';

const Order = () => {
    const { register, handleSubmit, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [ServiceList, setServiceList] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false);
    

    useEffect(() => {
        fetch('https://secure-wave-50671.herokuapp.com/allOrderList')
         .then(res => res.json())
         .then(data => setServiceList(data));
    },[])


        
    const onSubmit = data => {
        //const allOrder = {data, create: new Date()} 
        data.create = new Date();
        fetch('https://secure-wave-50671.herokuapp.com/addOrder',{
            method : 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success =>{
            if(success){
                alert('your order placed successfully');                
            }
        })
    }    


    useEffect(() => {
        fetch('https://secure-wave-50671.herokuapp.com/isAdmin',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setIsAdmin(data)
        });
    }, [])




    return (
        <div className="container-fluid">
            <div className="row d-flex">
                <div className="col-md-2">
                    <img src={logo} className="img-fluid"/>
                </div>
                <div className="col-md-2">
                    <h3>Order</h3>
                </div>
                <div className="col-md-2 ml-auto p-2">{loggedInUser.name}</div>
            </div>
            <div className="row">
                <div className="col-md-2">
                  <Sidebar></Sidebar>
                </div>
                <div className="col-md-10" style={{backgroundColor:'#F4F7FC',height:'100%'}}>
                {!isAdmin ?

                    <div className="col-md-6 ml-5 mt-5">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="form-group">                    
                                <input type="text" class="form-control" name="name" value={loggedInUser.name} ref={register({ required: true})}  placeholder="Your Name/Your Company Name"/>
                                {errors.name && <small className="text-danger">This field is required</small>}
                            </div>                    
                            <div class="form-group">                    
                                <input type="email" class="form-control" name="email" value={loggedInUser.email} ref={register({ required: true})} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your email address"/>
                                {errors.email && <small className="text-danger">This field is required</small>}
                            </div>
                            <div class="form-group">                    
                                <input type="text" class="form-control" name="Graphic" ref={register({ required: true})}  placeholder="Set your project requirement"/>
                                {errors.Graphic && <small className="text-danger">This field is required</small>}
                            </div>
                            <div class="form-group">                   
                                <input type="number" class="form-control" name="price" ref={register({ required: true})}  placeholder="price"/>
                                {errors.price && <small className="text-danger">This field is required</small>}
                            </div>
                            <div class="form-group">                   
                            <textarea rows="4" className="mb-4" cols="70" name="detail" form="usrform" placeholder="Project Details" ref={register({ required: true})}></textarea>
                                {errors.detail && <small className="text-danger">This field is required</small>}
                            </div>                            
                            <div className="form-group text-left">
                                <button type="submit" className="btn all-button pl-5 pr-5">Send</button>
                            </div>                           
                        </form>
                    </div>                        
                :
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
                                    <td>{order.detail} </td>                                
                                </tr>
                                )
                            }
                            </tbody>
                        </table>
                    </div> 
                 }
                </div>                   
            </div>               
        </div>            
        
    );
};

export default Order;