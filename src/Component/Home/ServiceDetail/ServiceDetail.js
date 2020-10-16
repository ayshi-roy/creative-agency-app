import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css';
import { useSpring, animated } from 'react-spring';


const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


const ServiceDetail = ({service}) => {

    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    return (
        <div className="col-md-4 text-center">
            <Link to="/order">
                <animated.div
                    class="cardbt"
                    onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                    onMouseLeave={() => set({ xys: [0, 0, 1] })}
                    style={{ transform: props.xys.interpolate(trans) }}
                    >
                    <div>
                        <a href="#" className="">
                            {
                                service.image ? <img style={{height: '50px'}} className="img-fluid" src={`data:image/png;base64,${service.image.img}`}/>
                                :
                                <img style={{height:'50px'}} src={`https://secure-wave-50671.herokuapp.com/${service.image}`} className="img-fluid"></img>
                            }                            
                        </a>                    
                        <h5 className="mt-3 mb-3">{service.name}</h5>
                        <p className="text-secondary">{service.detail}</p>
                    </div>
                </animated.div>
            </Link>             
        </div>
    );
};

export default ServiceDetail;