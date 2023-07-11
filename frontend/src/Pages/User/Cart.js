import React from 'react'
import Navbar from '../../components/Navbar'
import CheckoutCard from '../../components/CheckoutCard'

const Cart = () => {
  return (
    <>
      <Navbar searchBar={false} admin={false}/>
      <div className='container mt-5'>
        <div className="card">
          <h5 class="card-header">CheckOut</h5>
          <div className="card-body">
            <h5 className="card-title">Total</h5>
            <p className="card-text">6000</p>
            <button href="#" className="btn btn-primary">Place Order</button>
          </div>
        </div>
      <div className='container mt-5' >
          <CheckoutCard />
          <CheckoutCard />
          <CheckoutCard />
          <CheckoutCard />
      </div>
      </div>
    </>
  )
}

export default Cart