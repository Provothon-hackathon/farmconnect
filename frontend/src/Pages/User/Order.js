import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import OrderCard from '../../components/OrderCard'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import axios from 'axios'

const Order = () => {

  const history = useHistory()
  const [order, setOrder] = useState([])

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    console.log(history.location.pathname)
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


  const getCart = async (user)=>{

    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }

    try {
      const { data } = await axios.get('/orders', config)
      console.log(data)
      setOrder(data)
    } catch (error) {
      alert('error')
      console.log(error)
    }

  }

  return (
    <>
      <Navbar searchBar={false} admin={false} />
      <div className='container mt-5'>
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />

      </div>
    </>
  )
}

export default Order