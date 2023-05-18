import React from 'react';
import choose from '../assets/images/choose.jpg'
import plan from '../assets/images/plan.jpg'
import swap from '../assets/images/swap.jpg'

const ExtraFirst = () => {
    return (


        <div>
            <h1 className='text-accent text-5xl text-center font-bold font-serif mt-8 '>How To Buy ?</h1>
            <div className='flex justify-center gap-20'>
                <div className='my-6'>
                    <img className='h-[180px] w-48 rounded-full' src={choose} alt="" />
                    <div className=''>
                        <h3 className='text-accent text-3xl font-bold font-serif  '>Choose A Toy</h3>
                        <p className='font-serif'>pick from over 1000 of the <br /> latest must haves</p>
                    </div>
                </div>
                <div>
                    <img className='h-[180px] w-48' src={plan} alt="" />
                    <div className=''>
                        <h3 className='text-accent text-3xl font-bold font-serif  '>Plan and Learn</h3>
                        <p className='font-serif'>Kid-led Discovery that builds <br /> confidens and sparks magination</p>
                    </div>
                </div>

                <div>
                    <img className='h-[180px] w-48' src={swap} alt="" />
                    <div className=''>
                        <h3 className='text-accent text-3xl font-bold font-serif  '>Swap and Repeat</h3>
                        <p className='font-serif'>Return any unloved toy and swap it for somting else</p>
                    </div>
                </div>
                
            </div>
            </div>




            );
};

            export default ExtraFirst;