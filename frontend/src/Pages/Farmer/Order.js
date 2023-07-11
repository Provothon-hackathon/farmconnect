import React from 'react'
import Navbar from '../../components/Navbar'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'


const Order = () => {
  return (
    <>
        <Navbar searchBar={false} admin={true} />
        <div className='container mt-5' >

                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Order Id</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Cost</th>
                            <th scope="col">Placed On</th>
                            <th scope="col">Expected Delivery</th>
                            <th scope="col">Info</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>100</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>
                                <Link to={`/admin/order-details/5`}>
                                <button type="button" class="btn btn-info">
                                    View
                                </button>
                                </Link>

                            </td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>100</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>
                                <Link to={`/admin/order-details/5`}>
                                <button type="button" class="btn btn-info">
                                    View
                                </button>
                                </Link>

                            </td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>100</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>
                                <Link to={`/admin/order-details/5`}>
                                <button type="button" class="btn btn-info">
                                    View
                                </button>
                                </Link>

                            </td>
                        </tr>

                       
                    </tbody>
                </table>


            </div>
    </>
  )
}

export default Order