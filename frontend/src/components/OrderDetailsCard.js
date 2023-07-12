import React from 'react'

const CheckoutCard = (props) => {
    return (
        <div className="card w-75 m-3">
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">
                    <b >Price  : </b>
                    <span>{props.price}</span>
                </p>
                <p className="card-text">
                    <b>Quantity : </b>
                    <span>
                        {props.quantity}
                    </span>
                </p>
                <p className="card-text">
                    <b >Total  : </b>
                    <span>{props.quantity*props.price}</span>
                </p>
                <p className="card-text">
                    <b >Status  : </b>
                    <span>{props.status}</span>
                </p>
            </div>
        </div>

    )
}

export default CheckoutCard