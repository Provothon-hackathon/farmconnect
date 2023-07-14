import React from 'react'
import Navbar from '../../components/Navbar'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

import axios from 'axios'

const AdminHome = () => {

    const history = useHistory()
    const [products, setProducts] = useState([])



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
            fetchProducts(userInfo)
        }
    }, [])

    const fetchProducts = async (user)=> {
        const config = {
            headers: {
              Authorization: `Bearer ${user.token}`
            }
          }
      
          try {
            const { data } = await axios.get('/admin/products', config)
            setProducts(data)
            console.log(data)
          } catch (error) {
            alert('error')
            console.log(error)
          }
    }

    return (
        <>
            <Navbar searchBar={true} admin={true} />
            <div className='container mt-5' >

                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                            <th scope="col">Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>
                                <Link to={`/admin/update-product/5`}>
                                    <button type="button" class="btn btn-warning">
                                        Upadte
                                    </button>
                                </Link>

                            </td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>
                                <Link to={`/admin/update-product/5`}>
                                    <button type="button" class="btn btn-warning">
                                        Upadte
                                    </button>
                                </Link>

                            </td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>
                                <Link to={`/admin/update-product/5`}>
                                    <button type="button" class="btn btn-warning">
                                        Upadte
                                    </button>
                                </Link>

                            </td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>
                                <Link to={`/admin/update-product/5`}>
                                    <button type="button" class="btn btn-warning">
                                        Upadte
                                    </button>
                                </Link>

                            </td>
                        </tr>
                        {products.length>0 && 
                            products.map((p) => {
                                return (
                                <>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>{p.name}</td>
                                    <td>{p.quantity}</td>
                                    <td>{p.price}</td>
                                    <td>
                                        <Link to={`/admin/update-product/${p.id}`}>
                                            <button type="button" class="btn btn-warning">
                                                Update
                                            </button>
                                        </Link>

                                    </td>
                                </tr>
                                </>)
                            })

                        }
                    </tbody>
                </table>


            </div>
        </>

    )
}

export default AdminHome