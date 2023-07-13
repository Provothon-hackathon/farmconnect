import React from 'react'
import { useState } from 'react'


const CheckoutCard = () => {

    const [productCount, setProductCount] = useState(2);

    const increment = () => {
        const newCount = productCount + 1
        setProductCount(+newCount)
    }

    const decrement = () => {
        if (+productCount > 1) {
            const newCount = +productCount - 1
            setProductCount(+newCount)
        }
    }

    return (
        <div
            className="card card-cart mb-3"
        >
            <div className="row g-0">
                <div className="col-md-4 cart-img-div">
                    <img
                        src="https://plus.unsplash.com/premium_photo-1663051160162-e004fc97891e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=679&q=80"
                        className="img-fluid rounded-start"
                        alt="..."
                    />
                </div>
                <div className="col-md-8 cart-body-div">
                    <div className="card-body">
                        <h5

                            className="card-title"
                        >Aaloo Pyaaz Tamatar</h5>
                        <div className="cart-card-row">
                            <span
                            >Price:
                                <h6

                                    className="card-title"
                                    style={{ display: "inline-block", color: "#38c400" }}
                                >Rs 20</h6
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