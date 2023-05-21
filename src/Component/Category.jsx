import React, { useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const Category = () => {
    const [toy, setToy] = useState(null);
    const fun = () => {
        setToy("dsfhdshfdhfhdhdhjkjkjkjkjkj");
    }
    return (

        <div className="w-full mt-10 mb-8">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-accent font-serif mb-2">Shop by category</h2>
                <p className="text-2xl text-orange-500 font-serif font-bold">Explore a wide range of Disney Dolls.</p>
                <p className="mb-2 mt-2">
                    <span className="text-orange-500 font-serif font-bold">Welcome!!</span> to our Toy Market, Where dolls are based on the iconic princess characters <br /> from Disney movies such as Cinderella, Snow White, Ariel, Belle, and many more. They often feature elaborate costumes and accessories.
                </p>


            </div>

            <Tabs >
                <TabList className="flex bg-orange-200 mt-10" >
                    <Tab className="py-2 px-4 cursor-pointer bg-orange-200 border-b-2 border-transparent hover:border-gray-400">
                        Frozen Dolls
                    </Tab>
                    <Tab className="py-2 px-4 cursor-pointer bg-orange-200 border-b-2 border-transparent hover:border-gray-400">
                        Animation Characters

                    </Tab>
                    <Tab className="py-2 px-4 cursor-pointer bg-orange-200 border-b-2 border-transparent hover:border-gray-400">
                        Donald Duck
                    </Tab>
                </TabList>

                <TabPanel>
                    <div className='flex justify-center gap-16 mt-11'>
                        <div className="card w-80 h-auto bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="https://i.ibb.co/Z2PRsnt/frozen4.jpg" alt="" className="rounded-xl h-32" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title  text-orange-500 font-bold font-serif">Frozen Anna</h2>
                                <p>Price :$ 5599</p>
                                <div className='flex gap-4'>
                                    <Rating
                                        placeholderRating={4.5}
                                        readonly
                                        emptySymbol={<FaRegStar></FaRegStar>}
                                        placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                                        fullSymbol={<FaStar></FaStar>}
                                    />
                                    <p> 4.5</p>
                                </div>
                                <div className="card-actions">
                                    <button className="btn btn-outline btn-accent font-serif font-bold">View Details</button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-80 h-auto bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="https://i.ibb.co/Lgr7gn8/frozen5.jpg" alt="" className="rounded-xl h-32" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title  text-orange-500 font-bold font-serif">Frozen Elsa</h2>
                                <p>Price :$ 8949</p>
                                <div className='flex gap-4'>
                                    <Rating
                                        placeholderRating={5.0}
                                        readonly
                                        emptySymbol={<FaRegStar></FaRegStar>}
                                        placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                                        fullSymbol={<FaStar></FaStar>}
                                    />
                                    <p>5.0</p>
                                </div>
                                <div className="card-actions">
                                    <button className="btn btn-outline btn-accent font-serif font-bold">View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </TabPanel>
                <TabPanel>
                <div className='flex justify-center gap-16'>
                        <div className="card w-80 h-auto bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="https://i.ibb.co/DGpjfsW/anim4.jpg" alt="" className="rounded-xl h-32" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title  text-orange-500 font-bold font-serif">Ben Ten</h2>
                                <p>Price :$ 6799</p>
                                <div className='flex gap-4'>
                                    <Rating
                                        placeholderRating={5.0}
                                        readonly
                                        emptySymbol={<FaRegStar></FaRegStar>}
                                        placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                                        fullSymbol={<FaStar></FaStar>}
                                    />
                                    <p> 5.0</p>
                                </div>
                                <div className="card-actions">
                                    <button className="btn btn-outline btn-accent font-serif font-bold">View Details</button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-80 h-auto bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="https://i.ibb.co/pbj2mNX/anim3.jpg" alt="" className="rounded-xl h-32" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title  text-orange-500 font-bold font-serif">Anim Character</h2>
                                <p>Price :$ 3899</p>
                                <div className='flex gap-4'>
                                    <Rating
                                        placeholderRating={4.0}
                                        readonly
                                        emptySymbol={<FaRegStar></FaRegStar>}
                                        placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                                        fullSymbol={<FaStar></FaStar>}
                                    />
                                    <p>4.0</p>
                                </div>
                                <div className="card-actions">
                                    <button className="btn btn-outline btn-accent font-serif font-bold">View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='flex justify-center gap-16'>
                        <div className="card w-80 h-auto bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="https://i.ibb.co/PzJ5LHQ/duck2.png" alt="" className="rounded-xl h-32" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-orange-500 font-bold font-serif">Donald Duck1</h2>
                                <p>Price :$ 8000</p>
                                <div className='flex gap-4'>
                                    <Rating
                                        placeholderRating={5.0}
                                        readonly
                                        emptySymbol={<FaRegStar></FaRegStar>}
                                        placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                                        fullSymbol={<FaStar></FaStar>}
                                    />
                                    <p> 5.0</p>
                                </div>
                                <div className="card-actions">
                                    <button className="btn btn-outline btn-accent font-serif font-bold">View Details</button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-80 h-auto bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="https://i.ibb.co/55zFNP5/duck4.jpg" alt="" className="rounded-xl h-32" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title  text-orange-500 font-bold font-serif">Donald Duck2</h2>
                                <p>Price :$ 3000</p>
                                <div className='flex gap-4'>
                                    <Rating
                                        placeholderRating={4.3}
                                        readonly
                                        emptySymbol={<FaRegStar></FaRegStar>}
                                        placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                                        fullSymbol={<FaStar></FaStar>}
                                    />
                                    <p>4.3</p>
                                </div>
                                <div className="card-actions">
                                    <button className="btn btn-outline btn-accent font-serif font-bold">View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
            </Tabs>
           
        </div>
    );
};

export default Category;