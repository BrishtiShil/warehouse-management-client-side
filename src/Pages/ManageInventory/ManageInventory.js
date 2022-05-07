import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ManageInventory = ({ manageInventory }) => {
    const { name, suplierName, description, img, price, quantity } = manageInventory;

    return (
        <div className='inventory'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
            <h5>Suplier Name: {suplierName}</h5>
            <p><strong>Details:</strong> {description}</p>
            <Link to={`/update/${manageInventory._id}`}><button>Delivered</button></Link>

        </div>
    );
};

export default ManageInventory;