import error from '../assets/images/404-error.jpg'

const Error = () => {
    return (
        <div className='flex justify-center'>
            <img className='h-[500px] w-[500px] ' src={error} alt="" />
        </div>
    );
};

export default Error;