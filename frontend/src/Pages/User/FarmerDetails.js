import React from 'react'
import Navbar from '../../components/Navbar'
import ProductCard from '../../components/ProductCard'

import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const FarmerDetails = () => {

  const { farmerId } = useParams()
  const [products, setProducts] = useState([])
  const [user, setUser] = useState(null)
  const [farmer, setFarmer] = useState("")
  const history = useHistory()

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo) {
      if (userInfo.role === "USER" && history.location.pathname.includes('admin')) {
        history.push('/')
      }

      if (userInfo.role === "ADMIN" && !history.location.pathname.includes('admin')) {
        history.push('/admin')
      }
      setUser(userInfo)
      getProducts(userInfo)
      getFarmer(userInfo)
    } else {
      history.push('/login')
    }

  }, [])

  const getFarmer = async (user) => {
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${user.token}`
    //   }
    // }

    // try {
    //   const url = `/farmers/${farmerId}`
    //   const { data } = await axios.get(url, config)
    //   console.log(data)
    //   setFarmer(data)
    // } catch (error) {
    //   alert(error)
    //   console.log(error)
    // }
  }

  const getProducts = async (user) => {


    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }

    try {
      const url = `/${farmerId}/products`
      const { data } = await axios.get(url, config)
      setProducts(data)
    } catch (error) {
      alert('error')
      console.log(error)
    }

  }


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
        {products.length === 0 && <h1>No Product</h1>}
        {products.length > 0 &&

          products.map((p) => {
            return <ProductCard user={user} key={p.id} product={p} />
          })

        }
      </div>
    </>

  )
}

export default FarmerDetails