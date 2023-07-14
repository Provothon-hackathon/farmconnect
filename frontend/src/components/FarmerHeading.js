import React from 'react'

const FarmerHeading = ({farmer}) => {


  return (
    <div className="cart-heading" >
      <h2>Farmer Name : {farmer.name}</h2>
      <h4>
        Pending Orders :{farmer.orders && farmer.orders.length} 
      </h4>

    </div>
  )
}

export default FarmerHeading