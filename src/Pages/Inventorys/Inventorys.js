import React, { useEffect, useState } from 'react';
import Inventory from '../Home/Inventory/Inventory';
import './Inventorys.css';

const Inventorys = () => {
    const [inventorys, setInventorys] = useState([]);

    useEffect(() => {
        fetch('https://nameless-ravine-50425.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setInventorys(data));
    }, [])
    return (
        <div className='container' >
            <h1 className='inventory-title mt-5'>Our Inventory</h1>
            <div className='inventory-container'>
                {
                    inventorys.slice(0, 6).map(inventory => <Inventory
                        key={inventory._id}
                        inventory={inventory}
                    ></Inventory>)
                }
            </div>
        </div>
    );
};

export default Inventorys;