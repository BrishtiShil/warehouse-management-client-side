import React from 'react';
import { Link } from 'react-router-dom';
import './Inventory.css';

const Inventory = ({ inventory }) => {
    const { name, suplierName, img, price, description, quantity } = inventory;
    return (
        <div className='inventory'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p>Quentity: {quantity}</p>
            <h5>Suplier Name: {suplierName}</h5>
            <p><strong>Details: </strong>{description}</p>
            <Link to="/login"><button className='btn btn-secondary'>Update</button></Link>
        </div>
    );
};

export default Inventory;