import React from 'react';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const navstyle = {
    fontFamily: "'Kalam', cursive",
    fontSize: '24px',
    color: 'white',
};

const Navbar = ({ searchBar, admin, cartSize}) => {

    const history = useHistory()
    const link = history.location.pathname.includes('admin')?'/admin':'/'
    const handleLogout = ()=>{
        localStorage.removeItem('userInfo')
        history.push('\login')
    }

    return (
        <nav className="navbar sticky-top navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" to={link} style={navstyle}>
                    FarmConnect
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    {
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li>
                                <form
                                    className={searchBar ? 'd-flex' : 'd-none'}
                                    role="search"
                                    action="/search"
                                    method="get"

                                >
                                    <input
                                        className="form-control me-2"
                                        type="search"
                                        placeholder="Search"
                                        aria-label="Search"
                                        name="query"
                                    />
                                    <button className="btn search-btn btn-outline-success" type="submit">
                                        Search
                                    </button>
                                </form>
                            </li>
                        </ul>
                    }


                    {admin === false &&
                        <div className="nav-btns">

                            <Link to="/orders" className="btn btn-primary">
                                <div className="cart-notif">
                                    <span className="material-symbols-outlined"> package </span>
                                    Orders
                                </div>
                            </Link>
                            {/* <Link to="/profile" className="btn btn-primary">
                                <div className="cart-notif">
                                    <span className="material-symbols-outlined"> account_circle </span>
                                    Profile
                                </div>
                            </Link> */}
                            <Link to="/cart" className="btn btn-primary">
                                <div className="cart-notif">
                                    <span className="material-symbols-outlined"> shopping_cart </span>
                                    Cart
                                    <span
                                        className="badge rounded-pill"
                                    >3</span>
                                </div>
                            </Link>
                            <button  className="btn btn-danger" onClick={handleLogout}>
                                <div className="cart-notif">
                                    <span className="material-symbols-outlined"> logout </span>
                                    Logout
                                </div>
                            </button>
                        </div>
                    }

                    {admin &&
                        <div className="nav-btns">

                            <Link href="/admin/add-product" className="btn btn-primary">
                                <div className="cart-notif">
                                    <span className="material-symbols-outlined"> add_circle </span>
                                    Add Product
                                </div>
                            </Link>
                            <Link href="/admin/orders" className="btn btn-primary">
                                <div className="cart-notif">
                                    <span className="material-symbols-outlined"> package </span>
                                    Orders
                                    <span
                                        className="badge rounded-pill"
                                    >3</span>
                                </div>
                            </Link>
                            <button  className="btn btn-danger" onClick={handleLogout}>
                                <div className="cart-notif">
                                    <span className="material-symbols-outlined"> logout </span>
                                    Logout
                                </div>
                            </button>
                        </div>
                    }


                </div>
            </div>
        </nav>
    )
}

export default Navbar