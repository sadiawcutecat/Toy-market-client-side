import { Link } from 'react-router-dom';
import error from '../assets/images/404-error.jpg'

const Error = () => {
    return (
        <div>
            <div className='flex justify-center'>
            <img className='h-[500px] w-[500px] ' src={error} alt="" />
        </div>
     <div className='flex justify-center'>
     <Link to="/"><button className='btn btn-accent'>Back to home</button></Link>
     </div>
        </div>

    );
};

export default Error;