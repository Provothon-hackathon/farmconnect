import React from 'react'

const CheckoutCard = ({ order }) => {

    console.log(order)

    return (
        <div className="card w-75 m-3">
            <div className="card-body">
                <h5 className="card-title">{order.product.name}</h5>
                <p className="card-text">
                    <b >Price  : </b>
                    <span>
                        Rs {order.product.price}
                    </span>
                </p>
                <p className="card-text">
                    <b>Quantity : </b>
                    <span>
                        {order.quantity}
                    </span>
                </p>
                <p className="card-text">
                    <b >Total  : {order.product.price * order.quantity}  </b>
                    <span></span>
                </p>
            </div>
        </div>

    )
}

export default CheckoutCard