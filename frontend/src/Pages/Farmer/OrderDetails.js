import React from 'react'
import Navbar from '../../components/Navbar'
import OrderDetailsCard from '../../components/OrderDetailsCard'

const OrderDetails = () => {
  return (
    <>
        <Navbar searchBar={false} admin={true} />
        <div className='container mt-5' >
        <OrderDetailsCard name="Product Name" price="100" quantity="1" status="Complete"/>
        <OrderDetailsCard name="Product Name" price="100" quantity="1" status="Complete"/>
        <OrderDetailsCard name="Product Name" price="100" quantity="1" status="Complete"/>
        <OrderDetailsCard name="Product Name" price="100" quantity="1" status="Complete"/>
      </div>
    </>
  )
}

export default OrderDetails
