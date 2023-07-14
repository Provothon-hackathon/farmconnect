import React from 'react'
import Navbar from '../../components/Navbar'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { useEffect, useState } from 'react'

import axios from 'axios'

const AddProduct = () => {
    const history = useHistory()

    const [farmerId, setFarmer] = useState("")
    const [user, setLoggedUser] = useState()
    const [name, setName] = useState("")
    const [quantity, setQuantity] = useState(0)
    const [price, setPrice] = useState(0)
    const [description,setDescription] = useState("")
    const [images, setImages] = useState([])
    const [categories, setCategories] = useState([])


    useEffect(() => {
        setLoggedUser(JSON.parse(localStorage.getItem("userInfo")));
        setFarmer(user)
      }, [])

    const handleSubmit = async () => {
        const config = {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${user.token}`
          }
        }
    
        try {
          const { data } = await axios.post('/admin/add-product', { farmerId, quantity, name, description, price, categories, images }, config)
          console.log(data)
          history.push('/admin')
        }
        catch (error) {
          console.log(error);
          alert(error)
        }
      }




    return (
        <>
            <Navbar searchBar={false} admin={true} />
            <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
            <div className="row gx-4 gx-lg-5 align-items-center">
                <div className="col-md-6">
                <form>

                    <div className="form-group">
                    <label ><h3 className="display-8 fw-bolder">Product Name</h3></label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className="form-group">
                    <label ><h3 className="display-8 fw-bolder">Product Price</h3></label>
                    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter price" onChange={(e)=>setPrice(e.target.value)}/>
                    </div>
                    <div className="form-group">
                    <label ><h3 className="display-8 fw-bolder">Product Description</h3></label>

                    <textarea className="form-control" placeholder='Enter Product Description' aria-label="With textarea" onChange={(e)=>setDescription(e.target.value)}></textarea>
                    </div>
                    <div className="form-group">
                    <label ><h3 className="display-8 fw-bolder">Product Stock</h3></label>
                    <input className="form-control" id="inputQuantity" type="number" placeholder='Enter Quantity' onChange={(e)=>setQuantity(e.target.value)}/>
                    </div>
                    <div className="form-group">
                    <label ><h3 className="display-8 fw-bolder">Product Image</h3></label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter image url" onChange={(e)=>setImages([e.target.value])}/>
                    </div>
                    <div className="form-group">
                    <label ><h3 className="display-8 fw-bolder">Product Category</h3></label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Category" onChange={(e)=>setCategories([e.target.value])}/>
                    </div>
                    <div className="d-flex me-3">
                    <button type="submit" className="btn btn-outline-dark flex-shrink-0" onClick={handleSubmit}>Add Product</button>
                    </div>
                    <div className="d-flex">

                    </div>
                </form>
                </div>
            </div>
            </div>
      </section>
        </>
    )
}

export default AddProduct