import React, { useState } from 'react'
import { useParams } from 'react-router'
import { read, update } from '../../../api/productAPI';
import { useNavigate } from 'react-router-dom';

const UpdateProduct = ({products, handleUpdateProduct}) => {
    const { id } = useParams();
    const [product, setProduct] = useState(products.filter( item => item.id === id)[0]);
    const [name, setName] = useState("");
    const [img, setImg] = useState("");
    const [price, setPrice] = useState("");
    const navigate = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();

        const condition = {
            id: id,
            name: name ? name : product.name,
            img: img ? img : product.img,
            price: price ? price : product.price
        }

        const {data} = await update(condition);
        handleUpdateProduct(data);
        navigate('/admin/products')
    }

    return (
        <>
        <div className="d-flex justify-content-between">
            <h1>Update product</h1>

            <div></div>
        </div>
        <form>
            <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} placeholder="Name product" defaultValue={product.name} />
                </div>
            </div> 
            
            <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Image</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" onChange={(e) => setImg(e.target.value)} placeholder="Link image product" defaultValue={product.img} />
                </div>
            </div> 
            
            <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Price</label>
                <div className="col-sm-10">
                    <input type="number" className="form-control" onChange={(e) => setPrice(e.target.value)} placeholder="Price product" defaultValue={product.price} />
                </div>
            </div> 
            
            <button type="submit" onClick={handleClick} className="btn btn-primary">Update</button>
        </form> 
        </>
    )
}

export default UpdateProduct
