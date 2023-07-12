import React from 'react'
import "../../css/updateproduct.css"
import Navbar from '../../components/Navbar'
const UpdateProduct = () => {
  return (
    <div>
      
      <Navbar searchBar={false} admin={true} />
      <section class="py-5">
        <div class="container px-4 px-lg-5 my-5">
          <div class="row gx-4 gx-lg-5 align-items-center">
            <div class="col-md-6"><img class="card-img-top mb-5 mb-md-0" src="https://1.bp.blogspot.com/-4oXPsZoo_O4/WI4ubVPyYNI/AAAAAAAATuY/8L7YgM9Y45glnJUR103QUsU8Q1aLS02dQCLcB/s1600/Modiji-01.png" alt="..." /></div>
            <div class="col-md-6">
              <form>
                
              <div class="small mb-1">Product ID</div>
                <div class="form-group">
                  <label for="productName"><h3 class="display-8 fw-bolder">Product Name</h3></label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" />
                </div>
                <div class="form-group">
                  <label for="productName"><h3 class="display-8 fw-bolder">Product Price</h3></label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter price" />
                </div>
                <div class="form-group">
                  <label for="productName"><h3 class="display-8 fw-bolder">Product Description</h3></label>
                  
                  <textarea class="form-control" aria-label="With textarea"></textarea>
                </div>
                <div class="form-group">
                  <label for="productName"><h3 class="display-8 fw-bolder">Product Stock</h3></label>
                  <input class="form-control text-center me-3" id="inputQuantity" type="num" value="1" />
                </div>
                <div class="d-flex me-3">
                <button type="submit" class="btn btn-outline-dark flex-shrink-0">Update Product</button>
                </div>
                <div class="d-flex">
                  
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default UpdateProduct