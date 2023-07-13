import React from 'react'
import Navbar from '../../components/Navbar'
import ProductCard from '../../components/ProductCard'
import FarmerCard from '../../components/FarmerCard'

const UserHomePage = () => {
  return (
    <>
      <Navbar searchBar={true} admin={false}/>
      <div className="container d-flex justify-content-center align-items-center flex-wrap mt-5 py-5">
        <FarmerCard/>
        <FarmerCard/>
        <FarmerCard/>
        <FarmerCard/>
        <FarmerCard/>
        <FarmerCard/>

      </div>
    </>
  )
}

export default UserHomePage