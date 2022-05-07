import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateInventory = () => {
    const { id } = useParams();
    const [inventory, setInventory] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data));
    }, []);

    // const updateQuantity = event => {
    //     event.preventDefault();
    //     let quantity;
    //     const newQuantity = event.target.updateValue.value;
    //     const addQuantity = parseInt(newQuantity) + parseInt(quantity);
    //     console.log('new', addQuantity);

    //     const url = `http://localhost:5000/inventory/${id}`
    //     fetch(url, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(addQuantity)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log('success', data);
    //             event.target.reset();
    //         })
    // }

    return (
        <div>
            <h2>Quantity:{inventory.quantity}</h2>
        </div>
    );
};

export default UpdateInventory;