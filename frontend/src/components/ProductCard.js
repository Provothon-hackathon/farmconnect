import axios from 'axios';
import React, { useState } from 'react';

const ProductCard = ({ product, user }) => {

    const [loading, setLoading] = useState(false)

    const handleAddToCart = async () => {

        setLoading(true)
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }
        try {
            const url = `/add-to-cart?id=${product.id}`
            const { data } = await axios.post(url, {  }, config)
            alert("Success")
        } catch (error) {
            alert('error')
            console.log(error)
        }finally{
            setLoading(false)
        }


    }

    const image = product.images.length > 0 ? product.images[0] : ''
    return (
        <div className="card m-2 bg-light" style={{ width: "18rem" }}>
            <img src={image} className="card-img-top" style={{height:"12rem"}} alt="..." />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">
                    <i>
                        {product.description}
                    </i>
                </p>
                <div>
                    <h2 style={{color:"#229b00"}}> 	&#8377;{product.price} </h2>
                </div>
                <div>

                    {product.categories.length > 0 && product.categories.map((cat,i) => {
                        return <span key={i} className="badge rounded-pill m- px-3 py-2 text-bg-secondary">{cat}</span>

                    })}
                </div>
                <button loading={loading} className="btn" disabled={product.quantity <= 0}  style={{width:"100%" ,background:"#6400b1",color:"#fff"}}  onClick={handleAddToCart} >{product.quantity > 0 ? "Add To Cart" : "Out of Stock"}</button>
            </div>
        </div>
    )
}

export default ProductCard