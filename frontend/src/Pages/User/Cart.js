import React from 'react'
import CartHeading from '../../components/CartHeading'
import CheckoutCard from '../../components/CheckoutCard'
import Navbar from '../../components/Navbar'

const Cart = () => {
  return (
    <>
      <Navbar searchBar={false} admin={false} />
      <CartHeading />
        
      <div class="container">
      <div class="cart-container">
        <div class="cart-cards">

          <CheckoutCard />
          <CheckoutCard />
          <CheckoutCard />
          <CheckoutCard />
        </div>
      </div>
    </div>
      
    </>
  )
}

export default Cart