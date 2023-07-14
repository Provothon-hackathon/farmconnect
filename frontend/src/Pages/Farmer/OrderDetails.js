import React from 'react'
import Navbar from '../../components/Navbar'
import OrderDetailsCard from '../../components/OrderDetailsCard'

import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { useEffect, useState } from 'react'

import axios from 'axios'

const OrderDetails = () => {
  const history = useHistory()
  const [user, setUser] = useState(null)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")



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
      setUser(userInfo)
      getUserDetails(userInfo)
    } else {
      history.push('/login')
    }

  }, [])



  const getUserDetails = async (user) => {

    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }

    try {
      const { data } = await axios.get(`/profile?name=${name}&email=${email}&address=${address}`, config)
      setName(data.name)
      setEmail(data.email)
      setAddress(data.address)
    } catch (error) {
      alert('error')
      console.log(error)
    }
  }


  const handleSubmit = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }

    try {
      const { data } = await axios.post('/profile', { email, name, address }, config)
      console.log(data)
    }
    catch (error) {
      console.log(error);
      alert(error)
    }
  }


  return (
    <>
        <Navbar searchBar={false} admin={true} />
        <div className='container mt-5' >
        <OrderDetailsCard name="Product Name" price="100" quantity="1" status="Complete"/>&nbsp;
        <OrderDetailsCard name="Product Name" price="100" quantity="1" status="Complete"/>
        <OrderDetailsCard name="Product Name" price="100" quantity="1" status="Complete"/>
        <OrderDetailsCard name="Product Name" price="100" quantity="1" status="Complete"/>
      </div>
    </>
  )
}

export default OrderDetails
