import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png'

const Navbar = () => {
    return (
        <div className="">
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="#">
                    <img src={logo} style={{height:'50px',marginLeft:'30px'}}/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link mr-5" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-5" href="#">Our Portfolio</a>                            
                        </li>
                        <li className="nav-item">
                            <Link to="/order">
                               <a className="nav-link mr-5" href="#">Dash-Board</a>
                            </Link>                                
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-5" href="#">Contact Us</a>                            
                        </li>                                        
                        <li className="nav-item">
                            <Link to="/order">
                                <button className="btn all-button my-2 my-sm-0 mr-5" type="submit">Login</button>
                            </Link>                            
                        </li>
                    </ul>                    
                </div>
            </nav> 
        </div>
    );
};

export default Navbar;