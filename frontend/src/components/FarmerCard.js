import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const FarmerCard = ({ farmer }) => {
    console.log(farmer)
    return (
        <div className="card text-black m-3" style={{ maxWidth: "18rem" }}>
            <div className="card-header text-white" style={{ background:"#5ec343" }}>
                <h3>{farmer.name}</h3> </div>
                
            <div className="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <ul class="list-group list-group-flush w-100 " >
                    <li class="list-group-item border-white text-white " style={{ fontWeight: "60",background:"#5ec343",borderRadius:"6px", }} >Some Products</li>
                </ul>
                <div class="d-grid gap-2 col-6 mx-auto" style={{width:"100%"}} >
                    <Link to={`/farmer/${farmer.id}`} state={{ name: farmer.name, email: farmer.email }}>
                        <button type="button" class="btn " style={{width:"100%" ,background:"#6400b1",color:"#fff"}}>View Shop</button>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default FarmerCard