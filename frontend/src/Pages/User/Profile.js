import React from 'react'
import Navbar from '../../components/Navbar'

import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { useEffect, useState } from 'react'

import axios from 'axios'

const Profile = () => {
  const history = useHistory()
  const [user, setUser] = useState(null)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")



  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    console.log(history.location.pathname)
    if (userInfo) {
      if (userInfo.role === "USER" && history.location.pathname.includes('admin')) {
        history.push('/')
      }

      if (userInfo.role === "ADMIN" && !history.location.pathname.includes('admin')) {
        history.push('/admin')
      }
      setUser(userInfo)
      getUserDetails(userInfo)
    } else {
      history.push('/login')
    }

  }, [])



  const getUserDetails = async (user) => {

    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }

    try {
      const { data } = await axios.get(`/profile?name=${name}&email=${email}&address=${address}`, config)
      setName(data.name)
      setEmail(data.email)
      setAddress(data.address)
    } catch (error) {
      alert('error')
      console.log(error)
    }
  }


  const handleSubmit = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }

    try {
      const { data } = await axios.post('/profile', { email, name, address }, config)
      console.log(data)
    }
    catch (error) {
      console.log(error);
      alert(error)
    }
  }

  return (
    <>
      <Navbar searchBar={false} admin={false} />
      {
        user &&
        <section class="py-5">
          <div class="container px-4 px-lg-5 my-5">
            <div class="row gx-4 gx-lg-5 align-items-center">
              <div class="col-md-6">
                <img class="card-img-top mb-5 mb-md-0" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="..." />&nbsp;&nbsp;
              </div>
              <div class="col-md-6">
                <form onSubmit={handleSubmit}>

                  <div className="form-group">
                    <label for="productName"><h3 class="display-8 fw-bolder">Email</h3></label>&nbsp;
                    <input type="email" class="form-control" disabled={true} name="email" aria-describedby="emailHelp" value={email} />
                  </div>&nbsp;&nbsp;
                  <div class="form-group">
                    <label for="productName"><h3 class="display-8 fw-bolder">Name</h3></label>&nbsp;
                    <input type="text" class="form-control" name="name" aria-describedby="emailHelp" value={name} onChange={(e) => setName(e.target.value)} />
                  </div>&nbsp;&nbsp;
                  <div class="form-group">
                    <label for="productName"><h3 class="display-8 fw-bolder">Address</h3></label>&nbsp;
                    {user && user.addresses && user.addresses.length > 0 &&

                      user.addresses.map((a) => {
                        return <><input type="text" class="form-control" id="oldAddresses" disabled="true" aria-describedby="emailHelp" value={a} />&nbsp;</>
                      })
                    }
                    <input type="text" class="form-control" name="address" aria-describedby="emailHelp" placeholder="Add new address" value={address} onChange={(e) => setAddress(e.target.value)} />
                  </div>&nbsp;&nbsp;
                  <div class="d-flex">

                  </div>
                </form>
                <div class="d-flex me-3">
                  <button onClick={handleSubmit} class="btn btn-outline-dark flex-shrink-0">Update User Details</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      }
    </>
  )
}

export default Profile