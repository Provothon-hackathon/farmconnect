import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import OrderDetailsCard from '../../components/OrderDetailsCard'

import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import axios from 'axios'

const OrderDetails = () => {


  const history = useHistory()
  const [order, setOrder] = useState([])
  const { orderID } = useParams()
  console.log(orderID)
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
      getOrder(userInfo)
    } else {
      history.push('/login')
    }
  }, [])



  const getOrder = async (user) => {

    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }

    try {
      const url = `/orders/${orderID}`
      const { data } = await axios.get(url, config)
      // console.log(data.subOrders)
      setOrder(data.subOrders)
    } catch (error) {
      alert('error')
      console.log(error)
    }

  }

  return (
    <>
      <Navbar searchBar={false} admin={false} />
      <div className='container mt-5' >
        {/* {order.length>0 && order.map(o=>console.log(o.product))} */}
        {order.length > 0 && 
          order.map((o)=>{
            return <OrderDetailsCard key={o.id} order={o} />
          })
        }
      </div>
    </>
  )
}

export default OrderDetails
