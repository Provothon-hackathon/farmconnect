import React, { useState, useEffect } from 'react'
import CartHeading from '../../components/CartHeading'
import CheckoutCard from '../../components/CheckoutCard'
import Navbar from '../../components/Navbar'

import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import axios from 'axios'

const Cart = () => {

  const history = useHistory()
  const [cart, setCart] = useState([])
  const [user, setUser] = useState(null)

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo) {
      if (userInfo.role === "USER" && history.location.pathname.includes('admin')) {
        history.push('/')
      }

      if (userInfo.role === "ADMIN" && !history.location.pathname.includes('admin')) {
        history.push('/admin')
      }
      setUser(userInfo)
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
      const url = "/cart"
      const { data } = await axios.get(url, config)
      setCart(data)
    } catch (error) {
      alert('error')
      console.log(error)
    }

  }

  const upadteCart = async ()=>{
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }

    try {
      const url = "/cart"
      const { data } = await axios.get(url, config)
      setCart(data)
    } catch (error) {
      alert('error')
      console.log(error)
    }
  }



  return (
    <>
      <Navbar searchBar={false} admin={false} />
      {cart &&
        <CartHeading user={user} total={cart.total} />
      }

      <div class="container">
        <div class="cart-container">
          <div class="cart-cards">
            {!cart && <h1>Cart is Empty</h1>}
            {cart && cart.cart && cart.cart.map((c)=>{
              return <CheckoutCard upadteCart={setCart} user={user} key={c.id} cart={c} />
            })}
          </div>
        </div>
      </div>

    </>
  )
}

export default Cart