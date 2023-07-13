import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const navstyle = {
    fontFamily: "'Kalam', cursive",
    fontSize: '24px',
    color: 'white',
};

const Navbar = ({ searchBar, admin }) => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" style={navstyle}>
                    FarmConnect
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    {
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li>
                                <form
                                    className={searchBar ? 'd-flex' : 'd-none'}
                                    role="search"
                                    action="/search"
                                    method="get"

                                >
                                    <input
                                        class="form-control me-2"
                                        type="search"
                                        placeholder="Search"
                                        aria-label="Search"
                                        name="query"
                                    />
                                    <button class="btn search-btn btn-outline-success" type="submit">
                                        Search
                                    </button>
                                </form>
                            </li>
                        </ul>
                    }


                    {admin === false &&
                        <div className="nav-btns">

                            <a href="/orders" class="btn btn-primary">
                                <div class="cart-notif">
                                    <span class="material-symbols-outlined"> package </span>
                                    Orders
                                </div>
                            </a>
                            <a href="/profile" class="btn btn-primary">
                                <div class="cart-notif">
                                    <span class="material-symbols-outlined"> account_circle </span>
                                    Profile
                                </div>
                            </a>
                            <a href="/cart" class="btn btn-primary">
                                <div class="cart-notif">
                                    <span class="material-symbols-outlined"> shopping_cart </span>
                                    Cart
                                    <span
                                        class="badge rounded-pill"
                                    >3</span>
                                </div>
                            </a>
                        </div>
                    }

                    {admin &&
                        <div className="nav-btns">

                            <a href="/admin/add-product" class="btn btn-primary">
                                <div class="cart-notif">
                                    <span class="material-symbols-outlined"> add_circle </span>
                                    Add Product
                                </div>
                            </a>
                            <a href="/admin/orders" class="btn btn-primary">
                                <div class="cart-notif">
                                    <span class="material-symbols-outlined"> package </span>
                                    Orders
                                    <span
                                        class="badge rounded-pill"
                                    >3</span>
                                </div>
                            </a>
                            <a href="/logout" class="btn btn-danger">
                                <div class="cart-notif">
                                    <span class="material-symbols-outlined"> logout </span>
                                    Logout
                                </div>
                            </a>
                        </div>
                    }


                </div>
            </div>
        </nav>
    )
}

export default Navbar