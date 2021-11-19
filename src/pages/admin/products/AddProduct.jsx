import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = ({ handleAddPoduct }) => {
    
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState:{errors}
        }=useForm();

    const onSubmit = (data) => {
        handleAddPoduct(data);
        navigate('/admin/products')
        toast.success('them thanh cong');
    };
    return (
        <>
        <div className="d-flex justify-content-between">
            <h1>Add product</h1>

            <div></div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row mb-3">
                <label className="col-sm-2 col-form-label" >Name</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" {...register("name",{required:true})} laceholder="Name product" />
                </div>
            </div> 
            
            <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Image</label>
                <div className="col-sm-10">
                    <input type="text"  className="form-control" {...register("img",{required:true})} aceholder="Link image product" />
                </div>
            </div> 
            
            <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Price</label>
                <div className="col-sm-10">
                    <input type="number" className="form-control" {...register("price",{required:true})} placeholder="Price product" />
                </div>
            </div> 
            
            <button className="btn btn-primary">Add</button>
        </form> 
        </>
    )
}

export default AddProduct
