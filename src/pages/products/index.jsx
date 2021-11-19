import React, { useEffect, useState } from 'react'

import {Link,Outlet} from 'react-router-dom';
import { list } from '../../api/productAPI';

const Products = ({products}) => {
    

    return (
        <div className="container">
                <h1>Sản phẩm</h1>
            <div className="row ">
                {products.map((item,index) => <div className="col-md-3" key={index+100000}>
                            <div className="card">
                                <img src={item.img} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-price">{item.price}$</p>
                                        <Link to={`/product/${item.id}`} className="btn btn-primary">Chi tiết </Link>
                                    </div>
                            </div>
                            
                        </div>)}
            </div>
        </div>
    )
}

export default Products
