import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const CheckoutCard = ({cart,user}) => {

    const [productCount, setProductCount] = useState(cart.quantity);
    const history = useHistory()

    const increment = async () => {
        const config = {
            headers: {
              Authorization: `Bearer ${user.token}`
            }
          }
          try {
            const url = `/inc-cart-qty?id=${cart.id}`
            const { data } = await axios.get(url, config)
            console.log(data)
            history.push('/cart')
          } catch (error) {
            alert('error')
            console.log(error)
          }
    }

    const decrement = () => {
        if (+productCount > 1) {
            const newCount = +productCount - 1
            setProductCount(+newCount)
        }
    }
    const image = cart.product.images.length>0?cart.product.images[0]:''
    console.log(cart)

    return (
        <div
            className="card card-cart mb-3"
        >
            <div className="row g-0">
                <div className="col-md-4 cart-img-div">
                    <img
                        src={image}
                        className="img-fluid rounded-start"
                        alt="..."
                    />
                </div>
                <div className="col-md-8 cart-body-div">
                    <div className="card-body">
                        <h5

                            className="card-title"
                        >{cart.product.name}</h5>
                        <div className="cart-card-row">
                            <span
                            >Price:
                                <h6

                                    className="card-title"
                                    style={{ display: "inline-block", color: "#38c400" }}
                                >Rs {cart.product.price}</h6
                                ></span>
                            <span>
                                Qty:
                                <div
                                    className="btn-group"
                                    role="group"
                                    aria-label="Basic outlined example"
                                >
                                    <button
                                        type="button"
                                        className="btn btn-outline-primary"
                                        onClick={decrement}
                                    >-
                                    </button>
                                    <input
                                        type="button"
                                        className="btn btn-outline"
                                        style={{ borderTop: "1px solid black", borderBottom: "1px solid black",cursor:"auto" }}
                                        aria-readonly="true"
                                        value={productCount}
                                    />
                                    <button
                                        type="button"
                                        className="btn btn-outline-primary"
                                        onClick={increment}
                                    >+
                                    </button>
                                </div>
                            </span>
                        </div>
                        <span
                        >Subtotal:
                            <h6
                                className="card-title"
                                style={{ display: "inline-block", color: "#38c400" }}
                            > Rs 40</h6></span>
                        <form
                            action="/remove-from-cart"
                            method="POST"
                            style={{ alignSelf: "flex-end" }}
                        >
                            <input
                                type="hidden"
                                name="sku"
                            />
                            <button type="submit" className="btn btn-danger">
                                Remove from cart
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CheckoutCard