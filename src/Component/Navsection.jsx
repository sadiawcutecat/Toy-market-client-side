import { Link, useNavigate } from "react-router-dom";
import {FaUserCircle } from 'react-icons/fa';
import logo from '../assets/images/logo.png'
import { useContext } from "react";
import { AuthContext } from "./provider/AuthProvider";


const Navsection = () => {
    

    const {user, handleSignOut} = useContext(AuthContext)
    return (
      
            <div className="navbar bg-accent font-bold px-4">
                <div className="navbar-start">
                    <img className="h-9 w-9" src={logo} alt="" />
                    <a className="text-3xl text-white ms-4">TOY MAGIC</a>
                </div>
                <div className="navbar-center  lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white">
                        <Link to='/'><li><a>Home</a></li></Link>
                        {user && <Link to='/AllToys'><li><a>All Toys</a></li></Link>}
                        {user && <Link to='/myToys'> <li><a>My Toys</a></li></Link>}
                        {user &&  <Link to='/AddToys'><li><a>Add A Toy</a></li></Link>}
                       
                           
                        <Link to='/blogs'><li><a>Blogs</a></li></Link>
                       </ul>
                </div>
                <div className="navbar-end gap-2">
                    {user && <FaUserCircle style={{ fontSize: '2rem' }} className="text-white" />}
                
                {
                    user?<Link to='/signout'>
                    <button  onClick={()=>handleSignOut()} className="text-white py-2 px-5 border border-white">Sing Out</button>
                    </Link>
                     :
                     <Link to='/login'>
                     <button className="text-white py-2 px-5 border border-white">login</button>
                     </Link>
                }
               
               
                
                </div>
            </div>
       
    );
};

export default Navsection;