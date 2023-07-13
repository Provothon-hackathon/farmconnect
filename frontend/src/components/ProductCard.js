import React,{useState} from 'react';
import axios from 'axios';

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
            const url = '/add-to-cart'
            const { data } = await axios.post(url, { id: product.id }, config)
            alert("Success")
        } catch (error) {
            alert('error')
            console.log(error)
        }finally{
            setLoading(false)
        }


    }

    const image = product.images.length > 0 ? product.images[0] : ''
    console.log(product)
    return (
        <div className="card m-2 bg-light" style={{ width: "18rem" }}>
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">
                    <i>
                        {product.description}
                    </i>
                </p>
                <div>
                    <span><b> Price </b></span>
                    <span> 	&#8377;{product.price} </span>
                </div>
                <div>
                    <span><b> Quantity </b></span>
                    <span> 	 {product.quantity} </span>
                </div>
                <div>

                    {product.categories.length > 0 && product.categories.map((cat,i) => {
                        return <span key={i} class="badge rounded-pill m- px-3 py-2 text-bg-secondary">{cat}</span>

                    })}
                </div>
                <button loading={loading} className="btn btn-warning" onClick={handleAddToCart} >Add To Cart</button>
            </div>
        </div>
    )
}

export default ProductCard