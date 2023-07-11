import React from 'react'
import Navbar from '../../components/Navbar'
import ProductCard from '../../components/ProductCard'

const UserHomePage = () => {
  return (
    <>
      <Navbar searchBar={true} admin={false}/>
      <div className="container d-flex justify-content-center align-items-center flex-wrap mt-5">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
    </>
  )
}

export default UserHomePage