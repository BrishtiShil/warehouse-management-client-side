import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateInventory = () => {
    const { id } = useParams();
    const [inventory, setInventory] = useState({});

    useEffect(() => {
        const url = `https://nameless-ravine-50425.herokuapp.com/inventory/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data));
    }, []);

    return (
        <div>
            <h2>Quantity:{inventory.quantity}</h2>
        </div>
    );
};

export default UpdateInventory;