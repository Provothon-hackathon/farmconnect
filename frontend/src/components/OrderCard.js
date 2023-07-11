import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const OrderCard = () => {
    return (

        <div class="card my-4">
            <div class="card-header">
                Product Name
            </div>
            <div class="card-body">
                <p className="card-text">
                    <b >Total Price  : </b>
                    <span>100</span>
                </p>
                <p className="card-text">
                    <b>Quantity : </b>
                    <span className='px-3 py-2 '>1</span>
                </p>
                <p className="card-text">
                    <b >Order Placed on  : </b>
                    <span>12/12/2023</span>
                </p>
                <p className="card-text">
                    <b >Expected Delievry  : </b>
                    <span>19/12/2023</span>
                </p>
                <Link to={`/order/3`}>
                    <button type="button" class="btn btn-info">Details</button>
                </Link>

            </div>
        </div>


    )
}

export default OrderCard