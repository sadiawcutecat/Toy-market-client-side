import React, { useEffect, useState } from 'react';
import useTitle from './useTitle';

const AllToys = () => {
    useTitle('AllToys')

    const [allToys, setToys] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:5000/api/allToys`);
            if (response.ok) {
                const data = await response.json();
                setToys(data);
            } else {
                // Error occurred while fetching data
                console.error('Error fetching data!');
            }
        };

        fetchData();
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {
                allToys?.map(alltoy => <>
                    <div>

                        <div className="card w-96 h-auto bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={alltoy.photo} alt="toy img" className="rounded-xl h-32" />
                            </figure>

                            <div className="card-body items-center text-center ">
                                <h2 className="card-title text-orange-500 className='font-bold font-serif'">{alltoy.toys_name}</h2>
                                <p className='font-bold font-serif'>Seller-Name: {alltoy.seller_name}</p>
                                <p className='font-bold font-serif'>Sub-category: {alltoy.sub_category}</p>
                                <p className='font-bold font-serif'>Price: $ {alltoy.price}</p>
                                <p className='font-bold font-serif'>Available-Quantity: {alltoy.quantity}</p>
                                <div className="card-actions">
                                    <button className="btn btn-accent className='font-bold font-serif'">View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>)
            }
        </div>

    );
};

export default AllToys;
