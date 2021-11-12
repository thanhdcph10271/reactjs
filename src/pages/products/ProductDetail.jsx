import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { read } from '../../api/productAPI';

const ProductDetail = () => {
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    
    const getProduct = async () => {
        const {data} = await read(id);
        setProduct(data)
    }

    useEffect(() => {
        getProduct()
    }, [])

    return (
        <div className="container">
            {product !== null && <div className="row">
                <div className="col-3">
                    <img width="500"  src={product.img} alt="" />
                </div>

                <div className="col-8">
                    <h1>{product.name}</h1>
                    <h3>{product.price}</h3>
                </div>
            </div>}
        </div>
    )
}

export default ProductDetail
