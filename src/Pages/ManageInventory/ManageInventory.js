import React from 'react';

const ManageInventory = ({ manageInventory }) => {
    const { name, suplierName, img, price, quantity } = manageInventory;
    return (
        <div className='inventory'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p>Quentity: {quantity}</p>
            <p>Suplier Name: {suplierName}</p>
        </div>
    );
};

export default ManageInventory;