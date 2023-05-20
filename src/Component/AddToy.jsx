import React from 'react';

const AddToy = () => {
    return (
        //     - Picture URL of the toy,
        // - Name,
        // - seller name (if available from the logged in user)
        // - seller email (info from the logged in user)
        // - Sub-category ( For example: if the website is based on Educational and learning toys, the sub-categories can be Math Toys, Language Toys, and Science Toys.)
        // - Price, 
        // - Rating, 
        // - Available quantity
        // - Detail description
        <div>
            <div className="hero  bg-base-200">
                <div className="w-2/3 hero-content flex-col lg:flex-col">

                    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-3xl text-center text-accent font-bold">Add A Toy</h1>
                            <form >
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
                                        <input type="text" name='seller name' placeholder="seller name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text">Seller Email</span>
                                        </label>
                                        <input type="email" name='seller email' placeholder="seller email" className="input input-bordered" />
                                    </div>
                                </div>
                                <div className='flex gap-6 font-bold'>
                                    <div className="form-control w-1/2">
                                       
                                    <label className='mt-2' for="category">Sub-Category</label>
                                          <select className='h-12 mt-2 input input-bordered' name="Sub-category" id='sub-category' >
                                        
                                          <option value="frozen dolls">frozen dolls</option>
                                          <option value="animation characters">animation characters</option>
                                          <option value="donald duck">donald duck</option>
                                      </select>
                                       
                                      
                                        {/* <label className="label">
                                            <span className="label-text">Sub-Category</span>
                                        </label>
                                        <input type="text" name='sub' placeholder="sub-category" className="input input-bordered" /> */}
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
                                <button className=" my-9 btn btn-block btn-accent text-white font-serif font-bold">ADD A TOY</button>

                                {/* <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />

                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-accent  text-white font-seriffont bold" type="submit" value="ADD A Toy" />
                                </div> */}

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddToy;