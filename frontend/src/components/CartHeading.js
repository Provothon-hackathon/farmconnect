import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const CartHeading = ({ total, user }) => {

  const history = useHistory()

  const handleSubmit = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
    try {
      const url = `/checkout`
      const { data } = await axios.post(url, {}, config)
      history.push('/')
    } catch (error) {
      alert('error')
      console.log(error)
    }
  }

  return (
    <div className="cart-heading" >
      <h2>Your Cart</h2>
      <h2>
        Grand Total:
        <span style={{ color: "#38c400" }}>Rs {total}</span>
      </h2>
      <button className="btn btn-primary checkout-btn" onClick={handleSubmit} >
        <div className="cart-notif">
          <span className="material-symbols-outlined">
            shopping_cart_checkout
          </span>
          Proceed to Buy
        </div>
      </button>
    </div>
  )
}

export default CartHeading