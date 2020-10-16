import React, { useContext, useState } from 'react';
import Sidebar from '../../Share/Sidebar/Sidebar';
import logo from '../../../images/logos/logo.png';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';

const AddService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();    
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const onSubmit = data => {        
       
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', data.name);        
        formData.append('detail', data.detail);

        fetch('https://secure-wave-50671.herokuapp.com/addnewService',{
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(success => {
            console.log(success);
            if(success){
                alert('your order placed successfully');                
            }
        })
        .catch(error => {
            console.error(error)
        })
    }
    return (
        <div className="container-fluid">
            <div className="row d-flex">
                <div className="col-md-2 col-3">
                    <img src={logo} className="img-fluid"/>
                </div>
                <div className="col-md-2 col-3">
                    <h3>Add Service</h3>
                </div>
                <div className="col-md-1 col-3 ml-auto p-2">{loggedInUser.name}</div>
            </div>
            <div className="row">
                <div className="col-md-2 col-2">
                  <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 col-10" style={{backgroundColor:'#F4F7FC',height:'900px'}}>
                    <div className="row ml-5 mt-5" style={{backgroundColor:'#FFFF',height:'350px',borderRadius:'25px'}}>
                        
                        <div className="col-md-6 col-10 mt-4 ml-4">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div class="form-group">                    
                                    <input type="text" class="form-control" name="name" ref={register({ required: true})}  placeholder="Enter title"/>
                                    {errors.name && <small className="text-danger">This field is required</small>}
                                </div>
                                <div class="form-group">                   
                                <textarea rows="4" className="mb-4" cols="70" name="detail" form="usrform" placeholder="Description" ref={register({ required: true})}></textarea>
                                    {errors.detail && <small className="text-danger">This field is required</small>}
                                </div>                                                                                    
                                <div className="form-group text-left">
                                    <button type="submit" className="btn all-button pl-5 pr-5">Submit</button>
                                </div>                            
                            </form>  
                        </div>
                        <div className="col-md-3 col-2 mt-4">
                            <div className="form-group">
                                <input onChange={handleFileChange}  type="file"  name="file"/>
                            </div>
                        </div>
                                                          
                    </div>               
                </div>            
            </div>
        </div>    
    );
};

export default AddService;