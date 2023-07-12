import { Route } from 'react-router-dom'

// User Pages
import UserHomePage from './Pages/User/UserHomePage';
import FarmerDetails from './Pages/User/FarmerDetails'
import Order from './Pages/User/Order'
import OrderDetails from './Pages/User/OrderDetails'
import Profile from './Pages/User/Profile'
import Cart from './Pages/User/Cart'


// Admin Pages

import AdminHome from './Pages/Farmer/AdminHome';
import AddProduct from './Pages/Farmer/AddProduct';
import AdminOrder from './Pages/Farmer/Order';
import UpdateProduct from './Pages/Farmer/UpdateProduct';
import AdminOrderDetails from './Pages/Farmer/OrderDetails';
import Login from './Pages/authentication/Login';
import Signup from './Pages/authentication/Signup';

function App() {
  return (
    <>
      {/* Authentication */}
      <Route  path="/login" component={Login} exact />
      <Route  path="/signup" component={Signup} exact />
      {/* User Side */}

      <Route  path="/" component={UserHomePage} exact />
      <Route  path="/farmer/:farmerID" component={FarmerDetails} exact />
      <Route  path="/cart" component={Cart} exact />
      <Route  path="/profile" component={Profile} exact />
      <Route  path="/orders" component={Order} exact />
      <Route  path="/order/:orderID" component={OrderDetails} exact />


      {/* Farmer Side */}
      <Route  path="/admin" component={AdminHome} exact />
      <Route  path="/admin/update-product/:productId" component={UpdateProduct} exact />
      <Route  path="/admin/add-product" component={AddProduct} exact />
      <Route  path="/admin/orders" component={AdminOrder} exact />
      <Route  path="/admin/order-details/:id" component={AdminOrderDetails} exact />

    </>
  );
}

export default App;
