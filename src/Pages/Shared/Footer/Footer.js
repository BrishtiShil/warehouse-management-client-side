import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer>
            <p className='my-5 text-center'>copyright @ {year}</p>
        </footer>
    );
};

export default Footer;