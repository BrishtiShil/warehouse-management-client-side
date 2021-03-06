import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ManageInventory from '../ManageInventory/ManageInventory';

const ManageInventories = () => {
    const [manageInventories, setManageInventories] = useState([]);

    useEffect(() => {
        fetch('https://nameless-ravine-50425.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setManageInventories(data));
    }, [])
    return (
        <div className='container'>
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