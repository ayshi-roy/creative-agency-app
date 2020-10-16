import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
        <section className="container-fluid header">
            <div className="">
               <Navbar></Navbar> 
            </div>
            <div className="container">
                <div className="mt-5">                    
                    <HeaderMain></HeaderMain>                   
                </div>
            </div>
        </section>
        
    );
};

export default Header;