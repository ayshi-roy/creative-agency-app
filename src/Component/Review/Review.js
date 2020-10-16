import React, { useState } from 'react';
import Sidebar from '../Share/Sidebar/Sidebar';
import logo from '../../images/logos/logo.png';
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { UserContext } from '../../App';

const Review = () => {
    const { register, handleSubmit, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const onSubmit = data => {        
       
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', data.name);
        formData.append('company', data.company);
        formData.append('detail', data.detail);

        fetch('https://secure-wave-50671.herokuapp.com/addReview', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(success => {
            console.log(success)
            if(success){
                alert('your Review placed successfully');
            }
        })
        .catch(error => {
            console.error(error)
        })
    }

    
    return (
        <div className="container-fluid">
            <div className="row d-flex">
                <div className="col-md-2">
                    <img src={logo} className="img-fluid"/>
                </div>
                <div className="col-md-2">
                    <h3>Review</h3>
                </div>
                <div className="col-md-1 ml-auto p-2">{loggedInUser.name}</div>
            </div>
            <div className="row">
                <div className="col-md-2">
                  <Sidebar></Sidebar>
                </div>
                <div className="col-md-10" style={{backgroundColor:'#F4F7FC',height:'900px'}}>
                    <div className="col-md-6 ml-5 mt-5">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="form-group">                    
                                <input type="text" class="form-control" name="name" ref={register({ required: true})}  placeholder="Your Name/Your Company Name"/>
                                {errors.name && <small className="text-danger">This field is required</small>}
                            </div>                    
                            <div class="form-group">                    
                                <input type="text" class="form-control" name="company" ref={register({ required: true})} placeholder="Company's Name Designation"/>
                                {errors.company && <small className="text-danger">This field is required</small>}
                            </div>  
                            <div class="form-group">                   
                               <textarea rows="4" className="mb-4" cols="70" name="detail" form="usrform" placeholder="Description" ref={register({ required: true})}></textarea>
                                {errors.detail && <small className="text-danger">This field is required</small>}
                            </div>
                            <div className="form-group">
                                 <input onChange={handleFileChange} type="file"  name="file" />
                            </div>                                                        
                            <div className="form-group text-left">
                                <button type="submit" className="btn all-button pl-5 pr-5">Submit</button>
                            </div>                            
                        </form>
                    </div>                    
                </div>               
            </div>            
        </div>
    );
};

export default Review;