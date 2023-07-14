import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import FarmerCard from '../../components/FarmerCard'
import Navbar from '../../components/Navbar'

import axios from 'axios'

const UserHomePage = () => {

  const history = useHistory()
  const [farmer, setFarmer] = useState([])
  const [user, setUser] = useState(null)

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
      getFarmers(userInfo)
    } else {
      history.push('/login')
    }

  }, [])


  const getFarmers = async (user) => {

    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }

    try {
      const { data } = await axios.get('/farmers', config)
      // console.log(data)
      setFarmer(data)
    } catch (error) {
      alert('error')
      console.log(error)
    }
  }






  return (
    <>
      <Navbar searchBar={true} admin={false} />
      <div className="container d-flex justify-content-start align-items-center flex-wrap mt-5 ">

        {farmer.length===0 && <h1>No Farmer</h1>}

        {farmer.length>0 &&
        
          farmer.map((f)=>{
            return <FarmerCard key={f.id} farmer={f} user={user} />
          })
        }

      </div>
    </>
  )
}

export default UserHomePage