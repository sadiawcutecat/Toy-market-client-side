import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './provider/AuthProvider';
import useTitle from './useTitle';

const AddToy = () => {
    useTitle('AddToy')
    const { user } = useContext(AuthContext);

    const handleAddToy = event => {
       
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        console.log(name);
        const photo = form.photo.value;
        console.log(photo);
        const seller_name = form.seller_name.value;
        console.log(seller_name);
        const sub_category = form.sub_category.value;
        console.log(sub_category);
        const price = form.price.value;
        console.log(price);
        const rating = form.rating.value;
        console.log(rating);
        const quantity = form.quantity.value
        console.log(quantity);
        const email = form.seller_email.value
        console.log(email);

        const toys = {
            toys_name: name,
            photo,
            seller_name,
            email,
            sub_category,
            price,
            rating,
            quantity
        }

        console.log(toys);

        fetch(`http://localhost:5000/api/toys`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toys)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // if (data.insertedId) {
                //     <div className="alert alert-success shadow-lg">
                //         <div>
                //             <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                //             <span>Toys Added Successfully</span>
                //         </div>
                //     </div>
                // }
            })

    }



    return (

        <div>
            <div className="hero  bg-base-200">
                <div className="w-2/3 hero-content flex-col lg:flex-col">

                    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-3xl text-center text-accent font-bold">Add A Toy</h1>
                            <form onSubmit={handleAddToy}>
                                <div className='flex gap-6 font-bold '>
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" name='name' placeholder="name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text">Photo Url</span>
                                        </label>
                                        <input type="url" name='photo' placeholder="photo url" className="input input-bordered" />
                                    </div>
                                </div>
                                <div className='flex gap-6 font-bold '>
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text">Seller Name</span>
                                        </label>
                                        <input type="text" name='seller_name' placeholder="seller name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text">Seller Email</span>
                                        </label>
                                        <input type="email" name='seller_email' value={user?.email} placeholder="seller email" className="input input-bordered " disabled />
                                    </div>
                                </div>
                                <div className='flex gap-6 font-bold'>
                                    <div className="form-control w-1/2">

                                        <label className='mt-2' for="category">Sub-Category</label>
                                        <select className='h-12 mt-2 input input-bordered' name="sub_category" id='sub-category' >

                                            <option value="frozen dolls">frozen dolls</option>
                                            <option value="animation characters">animation characters</option>
                                            <option value="donald duck">donald duck</option>
                                        </select>

                                    </div>
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input type="number" name='price' placeholder="Price" className="input input-bordered" />
                                    </div>
                                </div>
                                <div className='flex gap-6 font-bold '>
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text">Rating</span>
                                        </label>
                                        <input type="number" name='rating' placeholder="rating" className="input input-bordered" />
                                    </div>
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text">Available quantity</span>
                                        </label>
                                        <input type="text" name='quantity' placeholder="quantity" className="input input-bordered" />
                                    </div>
                                </div>
                                <div className='flex justify-center mt-6'>
                                    <button className="btn btn-wide btn-accent btn-outline font-bold font-serif ">Details description</button>
                                </div>
                                <button type='submit' className=" my-9 btn btn-block btn-accent text-white font-serif font-bold">
                                    ADD A TOY</button>


                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddToy;