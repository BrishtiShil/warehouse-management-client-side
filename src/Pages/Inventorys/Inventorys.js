import React, { useEffect, useState } from 'react';
import Inventory from '../Home/Inventory/Inventory';
import './Inventorys.css';

const Inventorys = () => {
    const [inventorys, setInventorys] = useState([]);
    useEffect(() => {
        fetch('inventory.json')
            .then(res => res.json())
            .then(data => setInventorys(data));
    }, [])
    return (
        <div >
            <h1 className='inventory-title mt-5'>Our Inventory</h1>
            <div className='inventory-container'>
                {
                    inventorys.map(inventory => <Inventory
                        key={inventory.id}
                        inventory={inventory}
                    ></Inventory>)
                }
            </div>
        </div>
    );
};

export default Inventorys;