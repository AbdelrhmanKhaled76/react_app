import React from 'react';
import { CombSpinner } from 'react-spinners-kit';

const Loading = () => {
    return (
        <div className='h-100 w-100 position-fixed d-flex justify-content-center align-items-center bg-black'>
            <CombSpinner />
        </div>
    );
}

export default Loading;
