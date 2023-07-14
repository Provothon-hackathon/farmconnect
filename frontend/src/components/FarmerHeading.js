import React from 'react'

const FarmerHeading = ({farmer}) => {


  return (
    <div className="cart-heading" >
      <h2 className='text-center w-100'> {farmer.name}</h2>
    </div>
  )
}

export default FarmerHeading