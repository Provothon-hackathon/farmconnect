import React, { useState, useEffect } from 'react'
import CartHeading from '../../components/CartHeading'
import CheckoutCard from '../../components/CheckoutCard'
import Navbar from '../../components/Navbar'

import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import axios from 'axios'

const Cart = () => {

  const history = useHistory()
  const [cart, setCart] = useState([])

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo) {
      if (userInfo.role === "USER" && history.location.pathname.includes('admin')) {
        history.push('/')
      }

      if (userInfo.role === "ADMIN" && !history.location.pathname.includes('admin')) {
        history.push('/admin')
      }
      getCart(userInfo)
    } else {
      history.push('/login')
    }

  }, [])

  const getCart = async (user) => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }

    try {
      const url ="/cart"
      const { data } = await axios.get(url, config)
      console.log(data)
      setCart(data)
    } catch (error) {
      alert('error')
      console.log(error)
    }

  }




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