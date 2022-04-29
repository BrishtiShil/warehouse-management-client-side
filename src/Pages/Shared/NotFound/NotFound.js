import React from 'react';
import error from '../../../images/error.png';

const NotFound = () => {
    return (
        <div>
            <h2 className='text-primary text-center'>This site can't be reached</h2>
            <img className='mx-auto d-block' src={error} alt="" />
        </div>
    );
};

export default NotFound;