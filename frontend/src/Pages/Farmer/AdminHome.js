import React from 'react'
import Navbar from '../../components/Navbar'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'


const AdminHome = () => {
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
                    </tbody>
                </table>


            </div>
        </>

    )
}

export default AdminHome