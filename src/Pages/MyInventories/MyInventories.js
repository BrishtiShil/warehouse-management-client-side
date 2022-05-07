import React from 'react';
import './MyInventories.css';
import useInventories from '../../hooks/useInventories';
// import delete from '../../../images/social/delete.png';

const MyInventories = () => {
    const [inventorys, setInventorys] = useInventories();

    const handleDelete = id => {
        const proceed = window.confirm('Are You Sure?');
        if (proceed) {
            const url = `http://localhost:5000/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = inventorys.filter(inventory => inventory._id !== id)
                    setInventorys(remaining);
                })
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>My Item</h2>
            <div className='review-item'>
                {
                    inventorys.map(inventory => <div key={inventory._id}>
                        <h4>{inventory.name}   <button onClick={() => handleDelete(inventory._id)}>delete
                            {/* <img src={delete} alt="" /> */}
                        </button></h4>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyInventories;