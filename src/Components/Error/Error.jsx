import React, { useEffect } from 'react';
import toast from 'react-hot-toast';


const Error = () => {

    useEffect(()=>{
        toast.error('you probably trying to access a page while you are not loged in or you are trying to access a non existing page', 
        {duration : 6000, position : "top-center"})
    }, []);

    return (
        <div className='vh-100'>
            <div className='h-100 d-flex justify-content-center align-items-center flex-column'>
                <img src="/images/6909923.jpg" alt="" className='w-75 h-100' />
            </div>
        </div>
    );
}

export default Error;
