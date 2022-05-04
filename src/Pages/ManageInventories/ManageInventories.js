import React, { useEffect, useState } from 'react';
import ManageInventory from '../ManageInventory/ManageInventory';

const ManageInventories = () => {
    const [manageInventories, setManageInventories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setManageInventories(data));
    }, [])
    return (
        <div className='container'>
            <h1 className='inventory-title mt-5'>All Management Inventories</h1>
            <div className='inventory-container'>
                {
                    manageInventories.map(manageInventory => <ManageInventory
                        key={manageInventory._id}
                        manageInventory={manageInventory}
                    ></ManageInventory>)
                }
            </div>
        </div>
    );
};

export default ManageInventories;