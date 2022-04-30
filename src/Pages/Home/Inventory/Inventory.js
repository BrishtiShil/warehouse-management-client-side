import React from 'react';
import './Inventory.css';

const Inventory = ({ inventory }) => {
    const { name, suplierName, img, price, description, quentity } = inventory;
    return (
        <div className='inventory'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p>Quentity: {quentity}</p>
            <p>Suplier Name: {suplierName}</p>
            <p>Details: {description}</p>
        </div>
    );
};

export default Inventory;