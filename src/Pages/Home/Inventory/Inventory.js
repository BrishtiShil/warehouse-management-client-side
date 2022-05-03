import React from 'react';
import './Inventory.css';

const Inventory = ({ inventory }) => {
    const { name, suplierName, img, price, description, quantity } = inventory;
    return (
        <div className='inventory'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p>Quentity: {quantity}</p>
            <p>Suplier Name: {suplierName}</p>
            <p>Details: {description}</p>
            <button>Update</button>
        </div>
    );
};

export default Inventory;