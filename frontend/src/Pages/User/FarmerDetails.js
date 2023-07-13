import React from 'react'
import Navbar from '../../components/Navbar'
import ProductCard from '../../components/ProductCard'

import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'


const FarmerDetails = () => {

  const history = useHistory()

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    console.log(history.location.pathname)
    console.log("MMM")
    if (userInfo) {
      if (userInfo.role === "USER" && history.location.pathname.includes('admin')) {
        history.push('/')
      }

      if (userInfo.role === "ADMIN" && !history.location.pathname.includes('admin')) {
        history.push('/admin')
      }
    } else {
      history.push('/login')
    }

  }, [])


  return (
    <>
      <Navbar searchBar={true} admin={false} />

      <div className='container mt-5  d-flex justify-content-center align-items-center'>

        <div className="card">
          <div className="card-header">
            Farmer Name
          </div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>A well-known quote, contained in a blockquote element.</p>
              <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
            </blockquote>
          </div>
        </div>
      </div>

      <div className="container d-flex justify-content-center align-items-center flex-wrap mt-5">


        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </>

  )
}

export default FarmerDetails