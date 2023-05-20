import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './provider/AuthProvider';
import useTitle from './useTitle';

const Signup = () => {
    
    useTitle('Signup');

    const { createUser } = useContext(AuthContext);

    const handleSignup = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error))

    }
    return (
        <div>
            <div className="hero  bg-base-200">
                <div className="w-1/3 hero-content flex-col lg:flex-col">

                    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-3xl text-center text-accent font-bold">Sign Up</h1>
                            <form onSubmit={handleSignup}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                    <label className="label">

                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="url" name='photo' placeholder="photo url" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-accent text-white font-serif font bold" type="submit" value="SignUp" />
                                </div>

                            </form>

                            <p className='text-center'>Already have an account? please <Link className='text-orange-500 font-bold font-serif' to="/login">Login</Link></p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;


// import React, { useContext } from 'react'
// import { Link } from 'react-router-dom';
// import { AuthContext } from './provider/AuthProvider';


// const Signup = () => {
    
//     const {createUser} = useContext(AuthContext);

//     const handleSignUp = event => {
//         event.preventDefault();
//         const form  = event.target;
//         const name = form.name.value;
//         const email = form.email.value;
//         const password = form.password.value;
//         console.log(name,email,password);

//         createUser(email, password)
//         .then(result => {
//             const user = result.user;
//             console.log(user)
//         })
//         .catch(error => console.log(error))
//     }
//   return (
    
//     <div className="hero min-h-screen bg-base-200">
//     <div className="hero-content flex-col lg:flex-row-reverse">
//         <div className="text-center lg:text-left">
//             <h1 className="text-5xl font-bold">Login now!</h1>
//             <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
//         </div>

//         <form onSubmit={handleSignUp}>
//         <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//             <div className="card-body">
//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text">Name</span>
//                     </label>
//                     <input type="text" name='name' placeholder="name" className="input input-bordered" />
//                 </div>
//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text">Email</span>
//                     </label>
//                     <input type="text" name='email' placeholder="email" className="input input-bordered" />
//                 </div>
//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text">Password</span>
//                     </label>
//                     <input type="text" name='password' placeholder="password" className="input input-bordered" />
//                     <label className="label">
//                         <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//                     </label>
//                 </div>
//                 <div className="form-control mt-6">
//                     <button className="btn btn-primary">Signup</button>

//                     <p>
//                         <Link to="/login">Login</Link>
//                     </p>
//                 </div>
//             </div>
//         </div>
//         </form>
        
        
//     </div>
// </div>
//   )
// }

// export default Signup
