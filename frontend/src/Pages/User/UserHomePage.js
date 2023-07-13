import React from 'react'
import Navbar from '../../components/Navbar'
import FarmerCard from '../../components/FarmerCard'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

import { useEffect, useLocation } from 'react'

const UserHomePage = () => {

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
    }
  }, [])


  return (
    <>
      <Navbar searchBar={true} admin={false} />
      <div className="container d-flex justify-content-center align-items-center flex-wrap mt-5 py-5">
        <FarmerCard />
        <FarmerCard />
        <FarmerCard />
        <FarmerCard />
        <FarmerCard />
        <FarmerCard />

      </div>
    </>
  )
}

export default UserHomePage