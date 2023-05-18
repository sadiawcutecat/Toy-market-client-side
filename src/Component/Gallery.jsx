import React from 'react';
import Marquee from 'react-fast-marquee';
import kid1 from '../assets/images/kids1.jpg'
import kid2 from '../assets/images/kids2.jpg'
import kid3 from '../assets/images/kids3.jpeg'
import kid4 from '../assets/images/kids4.jpg'
import kid5 from '../assets/images/kids5.jpg'
import kid6 from '../assets/images/kids6.jpg'

const Gallery = () => {
    return (
        <div>
            <div className='my-5'>
                <h2 className=' text-3xl text-accent font-serif font-bold text-center'> Toys Gallery By Age</h2>
                <Marquee speed={50} pauseOnClick={true} >
                    <div className="card w-96 bg-base-100 shadow-xl">
                        
                            <img src={kid1} alt="" />
                       
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">0-18 Months</h2>
                            
                            <div className="card-actions">
                                <button className="btn btn-primary">show More Toys</button>
                            </div>
                        </div>
                    </div>

                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                        <img src={kid2} alt="" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">19-36 Months</h2>
                            
                            <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>

                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                        <img src={kid3} alt="" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">3-5 Years</h2>
                        
                            <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>

                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                        <img src={kid4} alt="" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">6-9 Years</h2>
                        
                            <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>

                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                        <img src={kid5} alt="" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">10-11 Years</h2>
                      
                            <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>

                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                        <img src={kid6} alt="" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">12+ Years</h2>
                         
                            <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>

                </Marquee>

            </div>
        </div>
    );
};

export default Gallery;