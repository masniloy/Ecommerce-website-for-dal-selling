import React from 'react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
const PulsesForHome = () => {
    return (
        <div className='stats '>

            <div className='my-16 '>
                <h1 className="text-4xl font-bold text-left lg:mx-14">Available Pulses </h1><br />


                <div className='  grid lg:grid-cols-3 md:grid-cols-2   lg:gap-10 lg:m-10 lg:p-5'>
                    <Link to="/Pulses">
                        <div className="card w-96 shadow-xl bg-gray-200 m-3">
                            <div className="card-body">
                                <h2 className="card-title">Split Yellow Moong Dal</h2>
                                <p className=' text-justify'>One of the most commonly used dal in Bangladesh households is this yellow moong dal. </p>
                            </div>
                            <figure><img src="https://i.ibb.co/bdrDXNm/Split-Yellow-Moong-Dal-1.jpg" alt="Shoes" /></figure>
                        </div>
                    </Link>

                    <Link to="/Pulses">
                        <div className="card w-96 bg-gray-200 shadow-xl m-3">
                            <div className="card-body">
                                <h2 className="card-title">Whole Masoor Dal</h2>
                                <p className=' text-justify'>A brown skinned lentil, that packed with fiber, the whole masoor dal appears brown on the outside and orange on the inside.</p>
                            </div>
                            <figure><img className='' src="https://i.ibb.co/RN56J9c/Whole-Masoor-Dal-1.jpg" alt="Shoes" /></figure>
                        </div>
                    </Link>

                    <Link to="/Pulses">
                        <div className="card w-96 bg-gray-200 shadow-xl m-3">
                            <div className="card-body">
                                <h2 className="card-title">Split Orange Masoor Dal</h2>
                                <p className=' text-justify'>The orange masoor dal is essentially the whole masoor dal that has been dehusked, removing the skin.</p>
                            </div>
                            <figure><img className='' src="https://i.ibb.co/bzP1dK6/Split-Masoor-Dal-1.jpg" alt="Shoes" /></figure>
                        </div>
                    </Link>






                </div>
                <Link to="/Pulses"><button className="btn w-full    drop-shadow-lg bg-white border-white font-bold"><FontAwesomeIcon className=' h-6' icon={faChevronDown} /></button></Link>
            </div>

        </div>
    );
};

export default PulsesForHome;