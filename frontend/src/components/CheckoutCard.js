import React from 'react'

const CheckoutCard = () => {
    return (
        <div
            class="card card-cart mb-3"
        >
            <div class="row g-0">
                <div class="col-md-4 cart-img-div">
                    <img
                        src="https://plus.unsplash.com/premium_photo-1663051160162-e004fc97891e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=679&q=80"
                        class="img-fluid rounded-start"
                        alt="..."
                    />
                </div>
                <div class="col-md-8 cart-body-div">
                    <div class="card-body">
                        <h5

                            class="card-title"
                        >Aaloo Pyaaz Tamatar</h5>
                        <div class="cart-card-row">
                            <span
                            >Price:
                                <h6

                                    class="card-title"
                                    style={{ display: "inline-block", color: "#38c400" }}
                                >Rs 20</h6
                                ></span>
                            <span>
                                Qty:
                                <div
                                    class="btn-group"
                                    role="group"
                                    aria-label="Basic outlined example"
                                >
                                    <a
                                        type="button"
                                        class="btn btn-outline-primary"
                                    >-</a
                                    >
                                    <button
                                        type="button"
                                        class="btn btn-outline"
                                        style={{ borderTop: "1px solid black", borderBottom: "1px solid black" }}
                                        aria-readonly="true"
                                    >2</button>
                                    <a
                                        type="button"
                                        class="btn btn-outline-primary"
                                    >+</a
                                    >
                                </div>
                            </span>
                        </div>
                        <span
                        >Subtotal:
                            <h6
                                class="card-title"
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
                            <button type="submit" class="btn btn-danger">
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