import React, { useEffect } from "react";
import "./Home.css";

import ProductCard from "./ProductCard.js";
import { CgMouse } from "react-icons/cg";
import MetaData from "../Layout/MetaData.js";
import { clearErrors, getProduct } from "../../actions/productAction.js";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Layout/Loader/Loader.js";
import { useAlert } from "react-alert";

import refrigerator from "../../Assets/images/refrigerator.jpg"
import washingmachine from "../../Assets/images/washing-machine.jpg"
import microwaves from "../../Assets/images/microwaves.jpg"
import air from "../../Assets/images/air.jpg"

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <MetaData title="ECOMMERCE" />

          <div className="banner">
            <h1>Welcome to Ecommerce</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>

          {/* <h2 className="homeHeading">Featured Products</h2>
          <div className="container" id="container">
            <img src={air} alt="air" />
            <p>Air conditioners</p>
          </div> */}

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard product={product} key={product._id} />
                // key={product._id}
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
