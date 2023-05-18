import React from 'react';
import choose from '../assets/images/choose.jpg'
import plan from '../assets/images/plan.jpg'
import swap from '../assets/images/swap.jpg'
import { FaArrowCircleRight } from 'react-icons/fa';

const ExtraFirst = () => {
    return (


        <div>
            <h1 className='text-accent text-5xl text-center font-bold font-serif mt-8 mb-8'>How To Buy ?</h1>
            <div className='flex justify-center gap-28 my-11'>
                <div>
                    <img className='h-[180px] w-48 rounded-full' src={choose} alt="" />
                    <div className='my-6'>
                        <h3 className='text-accent text-3xl font-bold font-serif my-2 '>Choose A Toy</h3>
                        <p className='font-serif'>pick from over 1000 of the <br /> latest must haves</p>
                    </div>
                </div>
                <div >
                    <img className='h-[180px] w-48 rounded-full' src={plan} alt="" />
                    <div className='my-6'>
                        <h3 className='text-accent text-3xl font-bold font-serif my-2 '>Plan and Learn</h3>
                        <p className='font-serif'>Kid-led Discovery that builds <br /> confidens and sparks magination</p>
                    </div>
                </div>

                <div>
                    <img className='h-[180px] w-48 rounded-full' src={swap} alt="" />
                    <div className='my-6'>
                        <h3 className='text-accent text-3xl font-bold font-serif my-2  '>Swap and Repeat</h3>
                        <p className='font-serif'>Return any unloved toy and <br /> swap it for somting else</p>
                    </div>
                </div>

            </div>
            <div className='text-center mb-8'>
                <button className="btn btn-lg gap-2 bg-accent text-white font-bold border-none ">
                    Go To Buy
                    <FaArrowCircleRight />

                </button>
            </div>
        </div>




    );
};

export default ExtraFirst;