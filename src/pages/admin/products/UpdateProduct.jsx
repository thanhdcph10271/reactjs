import React, { useState } from 'react'
import { useParams } from 'react-router'
import { read, update } from '../../../api/productAPI';
import { useNavigate } from 'react-router-dom';
import { useForm} from 'react-hook-form';
 
const UpdateProduct = ({products, handleUpdateProduct}) => {
    
    
    const { id } = useParams();

    const [product, setProduct] = useState(products.filter(item=>item.id==id)[0]);
    console.log(product)
  
    const {register,
        handleSubmit,
        formState:{errors}
        } = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) =>{
        const dataUpdate ={
            id:parseInt(id),
            ...data
        }   
      
        handleUpdateProduct(dataUpdate);
        console.log(dataUpdate)
        navigate('/admin/products')
        // console.log(dataUpdate)
    }
   
    return (
        <>
        <div className="d-flex justify-content-between">
            <h1>Update product</h1>

            <div></div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control"{...register('name',{required:true})} placeholder="Name product" defaultValue={product.name} />
                </div>
            </div> 
            
            <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Image</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control"{...register('img',{required:true})} placeholder="Link image product" defaultValue={product.img} />
                </div>
            </div> 
            
            <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Price</label>
                <div className="col-sm-10">
                    <input type="number" className="form-control"{...register('price',{required:true})}  placeholder="Price product" defaultValue={product.price} />
                </div>
            </div> 
            
            <button type="submit"  className="btn btn-primary">Update</button>
        </form> 
        </>
    )
}

export default UpdateProduct
