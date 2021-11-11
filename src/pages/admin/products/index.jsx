import React from 'react'
import { Link } from 'react-router-dom'

const AminProducts = ({products, handleRemoveProduct}) => {
    return (
        <>
        <div className="d-flex justify-content-between">
            <h1>Products Manager</h1>

            <Link className="btn btn-primary" to="/admin/product/add">Add new</Link>
        </div>
        
        <table class="table">
            <thead>
                <tr>
                <th scope="col">STT</th>
                <th scope="col">Name</th>
                <th scope="col">Image</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {products.map( (item, i) => <tr key={item.id+1111}>
                    <th scope="row">{i+1 }</th>
                    <td>{item.name}</td>
                    <td>
                        <img src={item.img} alt="" style={{width: "5rem"}} />
                    </td>
                    <td>{item.price}</td>
                    <td>
                        <Link className="btn btn-primary" to={`/admin/product/${item.id}/update`}>Update</Link>
                        <button className="btn btn-danger" onClick={() => handleRemoveProduct(item.id)}>Remove</button>
                    </td>
                </tr>)}
            </tbody>
        </table>
        </>
    )
}

export default AminProducts
