import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart,faCarAlt,faPlus,faFileAlt,faUserPlus,faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import { useEffect } from 'react';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

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
        <div className="">
            <div className="sidebar-sticky">
            <ul className="nav flex-column mt-5 ml-2">
                {isAdmin ? <div>
                    <li className="pb-4 mr-2 listItem">
                        <Link to="/allServiceList">
                            <FontAwesomeIcon style={{marginRight: '10px',color: 'black'}} icon={faCarAlt}/>
                            <span className="pb-3 mr-2 text-dark">Service list</span>
                        </Link>                                        
                    </li>
                    <li className="pb-4 mr-2 listItem">
                        <Link to="/addService">
                            <FontAwesomeIcon style={{marginRight: '10px',color: 'black'}} icon={faPlus}/>
                            <span className="pb-3 mr-2 text-dark">Add Service</span>
                        </Link>                                        
                    </li>
                    <li className="pb-4 mr-2 listItem">
                        <Link to="/makeAdmin">
                            <FontAwesomeIcon style={{marginRight: '10px',color: 'black'}} icon={faUserPlus}/>
                            <span className="pb-3 mr-2 text-dark">Make admin</span>
                        </Link>                                        
                    </li>
                </div>
               :
                <div>
                <li className="pb-4 mr-2 listItem">
                    <Link to="/order">
                        <FontAwesomeIcon style={{marginRight: '10px',color: 'black'}} icon={faShoppingCart}/>
                        <span className="text-dark">Order</span>
                    </Link>                                       
                </li>
                <li className="pb-4 mr-2 listItem">
                    <Link to="/serviceList">
                        <FontAwesomeIcon style={{marginRight: '10px',color: 'black'}} icon={faCarAlt}/>
                        <span className="pb-3 mr-2 text-dark">Service list</span>
                    </Link>                                        
                </li>                
                <li className="pb-4 mr-2 listItem">
                    <Link to="/review">
                        <FontAwesomeIcon style={{marginRight: '10px',color: 'black'}} icon={faFileAlt}/>
                        <span className="pb-3 mr-2 text-dark">Review</span>
                    </Link>                                        
                </li>
                </div>              
            }   
                                
            </ul>
            <div className="mt-5 pt-5">
                <Link to="/" className="text-dark mr-2"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Home page</span></Link>
            </div>            
        </div>
        </div>
    );
};

export default Sidebar;