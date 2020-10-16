import React from 'react';

const Contact = () => {
    return (
        <div className="contact" style={{backgroundColor: '#FBD062'}}>
           <div className="container mt-5 pt-5" >
               <div className="row">
                    <div className="col-md-5 col-12 mb-2">
                        <div>                            
                            <h2 className="text-dark">Let us handle your <br/> Project,Professionally</h2>
                            <p className="text-dark">With well written we build amazing apps for all platforms, mobile and web apps in general  </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <form>                                
                            <div class="form-group">                                   
                                <input type="email" class="form-control"  placeholder="Enter email"/>                                    
                            </div>
                            <div class="form-group">                                   
                                <input type="email" class="form-control"  placeholder="Enter email"/>                                    
                            </div>
                            <div class="form-group">                                   
                                <textarea rows="4" className="mb-4" cols="73" name="comment" form="usrform">Your message</textarea>                                    
                            </div>
                            <div class="form-group">
                                <button className="btn pl-5 pr-5 all-button">
                                    Send
                                </button>
                            </div>                           
                        </form>                   
                    </div>
               </div>                              
           </div>            
        </div>
    );
};

export default Contact;