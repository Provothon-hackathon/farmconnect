import React from 'react'

const CartHeading = () => {
    return(
    <div class="cart-heading" >
    <h2>Your Cart</h2>
    <h2>
      Grand Total:
      <span style={{ color: "#38c400" }}>Rs 120</span>
    </h2>
    <form action="/checkout" method="POST">
      <button class="btn btn-primary checkout-btn" type="submit">
        <div class="cart-notif">
          <span class="material-symbols-outlined">
            shopping_cart_checkout
          </span>
          Proceed to Buy
        </div>
      </button>
    </form>
  </div>
    )
}

export default CartHeading