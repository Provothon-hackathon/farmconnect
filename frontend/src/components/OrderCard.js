import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const OrderCard = ({ order,key }) => {

    console.log(order)
    const [total, setTotal] = useState(0)
    useEffect(() => {
        let t =0;
        order.subOrders.map((o)=>{
            t += o.product.price*o.quantity
        })
        setTotal(t)
    }, [])
    


    return (

        <div class="card my-4">
            {/* <div class="card-header">
                Product Name
            </div> */}
            <div class="card-body">
                <p className="card-text">
                    <b >Total Price  : </b>
                    <span>Rs {total}</span>
                </p>
                <p className="card-text">
                    <b>Number of Different Product : </b>
                    <span className='px-3 py-2 '>{order.subOrders.length}</span>
                </p>
                <p className="card-text">
                    <b>Status : </b>
                    <span className='px-3 py-2 '>{order.status}</span>
                </p>
                <p className="card-text">
                    <b>Date : </b>
                    <span className='px-3 py-2 '>{order.date.split("T")[0]}</span>
                </p>
                {/* <p className="card-text">
                    <b >Order Placed on  : </b>
                    <span>12/12/2023</span>
                </p>
                <p className="card-text">
                    <b >Expected Delievry  : </b>
                    <span>19/12/2023</span>
                </p> */}
                <Link to={`/order/${order.id}`}>
                    <button type="button" class="btn btn-info">Details</button>
                </Link>

            </div>
        </div>


    )
}

export default OrderCard