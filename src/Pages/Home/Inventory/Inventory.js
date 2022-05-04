import React from 'react';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import './Inventory.css';

const Inventory = ({ inventory }) => {
    const { id, name, suplierName, img, price, description, quantity } = inventory;
    //     const navigate=useNavigate();
    //     const navigateToInventoryDetails=id=>{
    // navigate(``)
    //     }
    return (
        <div className='inventory'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p>Quentity: {quantity}</p>
            <p>Suplier Name: {suplierName}</p>
            <p>Details: {description}</p>
            <Link to="/login"><button className='btn btn-secondary'>Update</button></Link>
        </div>
    );
};

export default Inventory;