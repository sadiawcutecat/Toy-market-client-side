import React from 'react';
import banner1 from '../assets/images/banner-1.png'
import banner2 from '../assets/images/banner-2.png'
import banner3 from '../assets/images/banner-3.png'
import banner4 from '../assets/images/banner-4.png'

const Header = () => {
    return (
        <div>
            <div className="carousel ">
                <div id="item1" className="carousel-item">
                    <img src={banner1} className="w-[50vw] h-[600px]" />
                    <div className='mt-60 px-20 w-[50vw] h-[600px] '>
                        <h1 className='text-4xl text-accent font-serif font-bold'>Sheriff Woody Toy </h1>
                        <p className='my-4 font-serif text-orange-500'>Sheriff Woody is a fictional character and the main protagonist <br />
                         in Pixar's animated film series "Toy Story".</p>
                         <button className="btn btn-accent sm:btn-sm md:btn-md lg:btn-lg font-serif text-white font-bold">View More</button>
                    </div>
                </div>
                <div id="item2" className="carousel-item">
                    <img src={banner2} className="w-[50vw] h-[600px]" />
                    <div className='mt-60 px-20 w-[50vw] h-[600px] '>
                        <h1 className='text-4xl text-accent font-serif font-bold'>Frozen Toy </h1>
                        <p className='my-4 font-serif  text-orange-500'>"Frozen" is a popular animated musical film produced by Walt Disney Animation Studios."Frozen" is known for its memorable musical numbers.</p>
                        <button className="btn btn-accent sm:btn-sm md:btn-md lg:btn-lg font-serif text-white font-bold">View More</button>
                    </div>
                </div>
                <div id="item3" className="carousel-item">
                    <img src={banner3} className="w-[50vw] h-[600px]" />
                    <div className='mt-60 px-20 w-[50vw] h-[600px] '>
                        <h1 className='text-4xl text-accent font-serif font-bold'>Donald Duck Toy </h1>
                        <p className='my-4 font-serif  text-orange-500'>Donald Duck is a beloved Disney character known for his distinctive voice, humorous antics, and signature temper. Donald Duck is known for his energetic and often easily frustrated personality.</p>
                        <button className="btn btn-accent sm:btn-sm md:btn-md lg:btn-lg font-serif text-white font-bold">View More</button>
                    </div>
                </div>
                <div id="item4" className="carousel-item">
                    <img src={banner4} className="w-[50vw] h-[600px]" />
                    <div className='mt-60 px-20 w-[50vw] h-[600px] '>
                        <h1 className='text-4xl text-accent font-serif font-bold'>Disney princes Toy </h1>
                        <p className='my-4 font-serif  text-orange-500'>Disney Princes refer to the male protagonists in Disney animated films who play romantic and heroic roles. some notable Disney Princes: Prince Charming (Cinderella), Prince Phillip (Sleeping Beauty), Beast/Prince Adam (Beauty and the Beast), Prince Eric (The Little Mermaid), Aladdin (Aladdin), Li Shang (Mulan). </p>
                         <button className="btn btn-accent sm:btn-sm md:btn-md lg:btn-lg font-serif text-white font-bold">View More</button>
                    </div>
                </div>
            </div>
            <div className="flex justify-center  py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Header;