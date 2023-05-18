import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';

const ExtraSecond = () => {
    const [comments, setComment] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/customerComment')
            .then(res => res.json())
            .then(data => {
                setComment(data.Comments);

            })
            .catch(error => console.log(error))
    }, [])
    return (
        <div >
           <div className='text-center'>
           <h1 className='text-5xl text-accent font-serif font-bold' >What They Say</h1>
            <p className='font-serif mt-3 text-orange-500'>CUSTOMER TESTIMONIALS</p>
           </div>
            <div className='flex justify-center gap-20 my-12'>
            {comments.map(comment => (
                <p key={comment.id}>
                    <div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body p-5">
                                <div className="card-actions justify-start">

                                    <img className='rounded' src={comment.img} alt="" />
                                    
                                    <div className='flex-col ms-1 mt-2'>
                                    <h3 className=' text-2xl text-accent font-serif font-bold '>{comment.name}</h3>
                                        <Rating
                                            placeholderRating={comment?.ratings}
                                            readonly
                                            emptySymbol={<FaRegStar></FaRegStar>}
                                            placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                                            fullSymbol={<FaStar></FaStar>}
                                        />
                                        
                                    </div>


                                </div>
                                <p>{comment.comment}</p>
                            </div>
                        </div>
                    </div>
                </p>
            ))}
            </div>
           
        </div>
    );
};

export default ExtraSecond;