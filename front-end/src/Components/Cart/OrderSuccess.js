import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import "./orderSuccess.css";
import { Typography } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import MetaData from "../Layout/MetaData";
import CheckoutSteps from "./CheckoutSteps";

const OrderSuccess = () => {
  // const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  // const { user } = useSelector((state) => state.user);
  // console.log(shippingInfo, cartItems, user);
  // const location = useLocation();
  // const { order } = location.state;
  // const shippingCharges = subtotal > 1000 ? 0 : 200;

  // const tax = subtotal * 0.18;

  // const totalPrice = subtotal + tax + shippingCharges;
  // const address = `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.pinCode}, ${shippingInfo.country}`;

  return (
    <div>
      <div className="orderSuccess">
      <CheckCircleIcon />

      <Typography>Your Order has been Placed successfully </Typography>
      <Link to="/orders">View Orders</Link>
    </div>
      {/* <div>
        <MetaData title="ConfirmOrder" />
        <CheckoutSteps activeStep={3} />
        <div className="iconcheck">
          <CheckCircleIcon />
          <Typography>Your Order has been Placed successfully </Typography>
        </div>
        <div className="receive-message">
          <Typography className="thanks">THANK YOU</Typography>
          <p className="receive">
            We received your order and will start preparing your package right
            away. You will receive a confirmation email in a moment.
          </p>
        </div>
        <div className="confirmOrderPage">
          <div>
            <div className="confirmCartItems">
              <Typography>Your Cart Items:</Typography>
              <div className="confirmCartItemsContainer">
                {cartItems &&
                  cartItems.map((item) => (
                    <div key={item.product}>
                      <img src={item.image} alt="Product" />
                      <Link to={`/product/${item.product}`}>
                        {item.name}
                      </Link>{" "}
                      <span>
                        {item.quantity} X ₹{item.price} ={" "}
                        <b>₹{item.price * item.quantity}</b>
                      </span>
                    </div>
                  ))}
              </div>
            </div>
            <div className="confirmshippingArea">
              <Typography>Delivery Details</Typography>

              <div className="confirmshippingAreaBox">
                <Typography>Shipping address</Typography>
                <div>
                  <p>Address:</p>
                  <span>{address}</span>
                </div>
              </div>
              <div className="confirmshippingAreaBox">
                <Typography>Contact information</Typography>
                <div>
                  <p>Name:</p>
                  <span>{user.name}</span>
                </div>
                <div>
                  <p>Email:</p>
                  <span>{user.email}</span>
                </div>
                <div>
                  <p>Phone:</p>
                  <span>{shippingInfo.phoneNo}</span>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          {/* <div>
            <div className="orderSummary">
              <Typography>Order Summery</Typography>
              <div>
                <div>
                  <p>Subtotal:</p>
                  <span>₹{order.itemsPrice}</span>
                </div>
                <div>
                  <p>GST:</p>
                  <span>₹{order.taxPrice}</span>
                </div>
              </div>

              <div className="orderSummaryTotal">
                <p>
                  <b>Total:</b>
                </p>
                <span>₹{order.totalPrice}</span>
              </div>
              <Link to="/products">
              <button>keep shopping</button></Link>
            </div>
          </div> */}
        {/* </div> */}
      {/* </div>  */}
    </div>
  );
};

export default OrderSuccess;
