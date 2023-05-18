import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './provider/AuthProvider';

const Login = () => {

const {signIn} = useContext(AuthContext)

const handleLogin = event =>{
    event.preventDefault();
    const form = event.target;
            
            const email = form.email.value;
            const password = form.password.value;
          
            console.log(email,password);
            signIn(email, password)
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
                            <h1 className="text-3xl text-center font-bold">Login now!</h1>
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-accent  text-white font-seriffont bold" type="submit" value="Login" />
                                </div>

                            </form>
                            <p>New to TOY MAGIC? please <Link className='text-orange-500 font-bold font-serif' to="/signup">Sign Up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;