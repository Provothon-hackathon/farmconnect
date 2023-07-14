import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import axios from 'axios'

const FarmerCard = ({ farmer, user }) => {

    const [products, setProducts] = useState([])

    useEffect(() => {

        fetchProducts()

    }, [])


    const fetchProducts = async () => {
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }

        try {
            const url = `/${farmer.id}/products`
            const { data } = await axios.get(url, config)
            setProducts(data)
            // console.log(data)
        } catch (error) {
            alert('error')
            console.log(error)
        }
    }


    return (
        <div className="card text-black m-3" style={{ maxWidth: "18rem" }}>
            <div className="card-header text-white" style={{ background: "#5ec343" }}>
                <h3>{farmer.name}</h3> </div>

            <div className="card-body">
                <p>
                    <b>Available Products</b>: {products.length}
                </p>

                <ul className="list-group list-group-flush w-100 " >
                    {products.length>0 &&

                        <li className="list-group-item border-white "
                            style={{ borderRadius: "6px", background: "#6400b1", color: "#fff" }} >
                            Few Products are
                        </li>
                    }
                    {products.length > 0 &&
                        products.slice(0, 3).map((p) => {
                            return (

                                <li className="list-group-item border-white text-white "
                                    style={{ background: "#5ec343", borderRadius: "6px", }} >
                                    <span>
                                        <b>
                                            {p.name} :
                                        </b>
                                    </span>
                                    <span>
                                        Rs{p.price}
                                    </span>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="d-grid gap-2 col-6 mx-auto" style={{ width: "100%" }} >
                    <Link to={`/farmer/${farmer.id}`} state={{ name: farmer.name, email: farmer.email }}>
                        <button type="button" className="btn " style={{ width: "100%", background: "#6400b1", color: "#fff" }}>View Shop</button>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default FarmerCard