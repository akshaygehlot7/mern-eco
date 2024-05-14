import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "../Components/Layout/About/About";
import Home from "../Components/Home/Home";
import Contact from "../Components/Layout/Contact/Contact";
import ProductDetails from "../Components/Product/ProductDetails";
import Products from "../Components/Product/Products";
import Search from "../Components/Product/Search";
import LoginSignUp from "../Components/User/LoginSignUp";
import Profile from "../Components/User/Profile";
import UpDateProfile from "../Components/User/UpDateProfile";
import UpdatePassword from "../Components/User/UpdatePassword";
import ForgotPassword from "../Components/User/ForgotPassword";
import ResetPassword from "../Components/User/ResetPassword";
import Cart from "../Components/Cart/Cart";
import Shipping from "../Components/Cart/Shipping";
import Payment from "../Components/Cart/Payment";
// import ProtectedRoute from "../Components/Route/ProtectedRoute";
// import { useSelector } from "react-redux";
import axios from "axios";
// import {Elements} from '@stripe/react-stripe-js';
// import {loadStripe} from '@stripe/stripe-js';
import ConfirmOrder from "../Components/Cart/ConfirmOrder";
import OrderSuccess from "../Components/Cart/OrderSuccess";
import MyOrders from "../Components/Order/MyOrders";
import Dashboard from "../Components/Admin/Dashboard";
import OrderDetails from "../Components/Order/OrderDetails";
import ProductList from "../Components/Admin/ProductList";
import NewProduct from "../Components/Admin/NewProduct";
import UpdateProduct from "../Components/Admin/UpdateProduct";
import OrderList from "../Components/Admin/OrderList";
import ProcessOrder from "../Components/Admin/ProcessOrder";
import UsersList from "../Components/Admin/UsersList";
import UpdateUser from "../Components/Admin/UpdateUser";
import ProductReviews from "../Components/Admin/ProductReviews";

// import { useSelector } from "react-redux";

 
const Routers = () => {
  // vishal028@gmail.com
  // Akshaygehlot003@gmail.com
  // joti1234@gmail.com
  // indian card number = 4000003560000008
  // const { users } = useSelector((state) => state.allUsers);
  
  // console.log(users);
  
  // const [stripeApiKey, setStripeApiKey] = useState("");

  // async function getStripeApiKey () {
  //   const { data } = await axios.get("/api/v1/stripeapikey");

  //   setStripeApiKey(data.stripeApiKey);
  // }

  // useEffect(() => {
  //   getStripeApiKey();
  // }, []);

  return (
    <div>
      {/* {stripeApiKey && ( */}
        {/* // <Elements stripe={loadStripe(stripeApiKey)}> */}
          <Routes>
          <Route path="/process/payment" element={<Payment />} /> 
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:keyword" element={<Products />} />
            <Route path="/search" element={<Search />} />
            <Route path="/login" element={<LoginSignUp />} />
            <Route path="/account" element={<Profile />} />
            <Route path="/me/update" element={<UpDateProfile />} />
            <Route path="/password/update" element={<UpdatePassword />} />
            <Route path="/password/forgot" element={<ForgotPassword />} />
            <Route path="/password/reset/:token" element={<ResetPassword />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/order/confirm" element={<ConfirmOrder />} />
             <Route path="/success" element={<OrderSuccess />} />
            <Route path="/orders" element={<MyOrders />} />
            <Route path="/order/:id" element={<OrderDetails />} />
            <Route isAdmin={true} path="/admin/dashboard" element={<Dashboard />}/>
            <Route path="/admin/products" isAdmin={true} element={<ProductList/>}/>
            <Route path="/admin/product" isAdmin={true} element={<NewProduct/>}/>
            <Route path="/admin/product/:id" isAdmin={true} element={<UpdateProduct/>}/>
            <Route path="/admin/orders" isAdmin={true} element={<OrderList/>}/>
            <Route path="/admin/order/:id" isAdmin={true} element={<ProcessOrder/>}/>
            <Route path="/admin/users" isAdmin={true} element={<UsersList/>}/>
            <Route path="/admin/user/:id" isAdmin={true} element={<UpdateUser />}/>
            <Route path="/admin/reviews" isAdmin={true} element={<ProductReviews />}/>
        {/* <Route path="/admin/products" isAdmin={true} element={ProductList}/>
        <Route path="/admin/product" isAdmin={true} element={NewProduct}/>

        <Route path="/admin/product/:id" isAdmin={true} element={UpdateProduct}/>
        <Route path="/admin/orders" isAdmin={true} element={OrderList} />

        <Route path="/admin/order/:id" isAdmin={true} element={ProcessOrder}/>
        <Route path="/admin/users" isAdmin={true} element={UsersList}/>

        <Route path="/admin/user/:id" isAdmin={true} element={UpdateUser}/>

        <Route path="/admin/reviews" isAdmin={true} element={ProductReviews}/> */}

            {/* {stripeApiKey && (<Elements stripe={loadStripe(stripeApiKey)}>
           <Route path="/process/payment" element={<Payment />} />
          </Elements>)} */}

            {/* {isAuthenticated && <Profile />} */}
          </Routes>
          {/* </Elements> */}
        {/* )} */}
    </div>
  );
};

export default Routers;
