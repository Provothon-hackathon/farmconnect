import React from 'react'
import Navbar from '../../components/Navbar'
import OrderCard from '../../components/OrderCard'

const Order = () => {
  return (
    <>
      <Navbar searchBar={false} admin={false}/>
      <div className='container mt-5'>
        <OrderCard/>
        <OrderCard/>
        <OrderCard/>
        <OrderCard/>
        <OrderCard/>
        <OrderCard/>
        <OrderCard/>

      </div>
    </>
  )
}

export default Order