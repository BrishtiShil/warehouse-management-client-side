import React from 'react';
import { useForm } from "react-hook-form";

const AddInventory = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = `https://nameless-ravine-50425.herokuapp.com/inventory`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };
    return (
        <div className='w-50 mx-auto'>
            <h2>Please add a inventory</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Photo URL' type="img" {...register("img")} />
                <input className='mb-2' placeholder='suplierName' type="text" {...register("suplierName")} />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                <input type="submit" value="Add item" />
            </form>
        </div>
    );
};

export default AddInventory;