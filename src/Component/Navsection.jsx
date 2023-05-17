import { Link } from "react-router-dom";


const Navsection = () => {
    return (
        <div>
            <div className="navbar bg-accent font-bold">
                <div className="navbar-start">
                    
                    <a className="text-3xl text-white">TOY MAGIC</a>
                </div>
                <div className="navbar-center  lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white">
                        <Link to='/'><li><a>Home</a></li></Link>
                        <Link to='AllToys'><li><a>All Toys</a></li></Link>
                        <Link to='myToys'> <li><a>My Toys</a></li></Link>
                        <Link to='AddToys'><li><a>Add A Toy</a></li></Link>
                        <Link to='blogs'><li><a>Blogs</a></li></Link>
                       </ul>
                </div>
                <div className="navbar-end">
                <button className="text-white py-2 px-5 border border-white">login</button>
                </div>
            </div>
        </div>
    );
};

export default Navsection;