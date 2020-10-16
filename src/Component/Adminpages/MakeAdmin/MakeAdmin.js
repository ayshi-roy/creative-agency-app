import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../../Share/Sidebar/Sidebar';
import logo from '../../../images/logos/logo.png';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        
        fetch('https://secure-wave-50671.herokuapp.com/makeAdmin',{
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
    };
    return (
        <div className="container-fluid">
            <div className="row d-flex">
                <div className="col-md-2 col-2">
                    <img src={logo} className="img-fluid"/>
                </div>
                <div className="col-md-2 col-2">
                    <h3>Make Admin</h3>
                </div>
                <div className="col-md-1 col-2 ml-auto p-2">{loggedInUser.name}</div>
            </div>
            <div className="row">
                <div className="col-md-2 col-2">
                  <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 col-10" style={{backgroundColor:'#F4F7FC',height:'900px'}}>
                    <div className="row ml-5 mt-5" style={{backgroundColor:'#FFFF',height:'350px',borderRadius:'25px'}}>
                        <div className="col-md-4 col-10 mt-4 ml-4">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div class="form-group">                    
                                    <input type="email" class="form-control" name="email" ref={register({ required: true})} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your email address"/>
                                    {errors.email && <small className="text-danger">This field is required</small>}
                                </div>                                                                                    
                                <div className="form-group text-left">
                                    <button type="submit" className="btn all-button pl-5 pr-5">Submit</button>
                                </div>                            
                            </form>  
                        </div>                        
                    </div>                                        
                </div>               
            </div>            
        </div>
    );
};

export default MakeAdmin;