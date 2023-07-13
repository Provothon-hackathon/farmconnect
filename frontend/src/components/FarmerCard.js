import React from 'react'

const FarmerCard = () => {
    return (
        <div className="card text-white m-3" style={{ maxWidth: "18rem", backgroundColor: "#0fc81b" }}>
            <div className="card-header" style={{ backgroundColor: "#047c0c" }}>Farmer Name</div>
            <div className="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <ul class="list-group list-group-flush w-100 " >
                    <li class="list-group-item border-white bg-warning" style={{fontWeight:"60"}} >Some Products</li>
                    <li class="list-group-item text-white border-white" style={{ backgroundColor: "#047c0c" }} >An item</li>
                    <li class="list-group-item text-white border-white" style={{ backgroundColor: "#047c0c" }} >An item</li>
                </ul>
                <div class="d-grid gap-2 col-6 mx-auto">
                    <button type="button" class="btn btn-warning">View Shop</button>
                </div>
            </div>
        </div>

    )
}

export default FarmerCard