import React from 'react'

const CheckoutCard = () => {
    return (
        <div className="card w-75 m-3">
            <div className="card-body">
                <h5 className="card-title">Product Name</h5>
                <p className="card-text">
                    <b >Price  : </b>
                    <span>100</span>
                </p>
                <p className="card-text">
                    <b>Quantity : </b>
                    <span>
                    <button  className="btn btn-danger"  >-</button>
                    </span>
                    <span className='px-3 py-2 bg-secondary-subtle '>1</span>
                    <span>
                    <button  className="btn btn-danger">+</button>
                    </span>
                </p>
                <p className="card-text">
                    <b >Total  : </b>
                    <span>100</span>
                </p>
                <button  className="btn btn-danger">Remove</button>
            </div>
        </div>

    )
}

export default CheckoutCard