import React, { useState } from 'react'
import { create } from '../../../api/productAPI';
import { useNavigate } from 'react-router-dom';

const AddProduct = ({ handleAddPoduct }) => {
    const [name, setName] = useState("");
    const [img, setImg] = useState("");
    const [price, setPrice] = useState("");
    const navigate = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();
        if(!name){
            alert("Name is require.");
            return;
        }
        if(!img){
            alert("Image link is require.");
            return;
        }
        if(!price){
            alert("Price is require.");
            return;
        }

        const condition = {
            name: name,
            img: img,
            price: price
        }

        const {data} = await create(condition);
        handleAddPoduct(data);
        navigate('/admin/products')
    }
    return (
        <>
        <div className="d-flex justify-content-between">
            <h1>Add product</h1>

            <div></div>
        </div>
        <form>
            <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} placeholder="Name product" />
                </div>
            </div> 
            
            <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Image</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" onChange={(e) => setImg(e.target.value)} placeholder="Link image product" />
                </div>
            </div> 
            
            <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Price</label>
                <div className="col-sm-10">
                    <input type="number" className="form-control" onChange={(e) => setPrice(e.target.value)} placeholder="Price product" />
                </div>
            </div> 
            
            <button onClick={handleClick} className="btn btn-primary">Add</button>
        </form> 
        </>
    )
}

export default AddProduct
