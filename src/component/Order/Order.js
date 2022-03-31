import React from "react";
import useCart from "../../CustomHooks/useCart";
import useProducts from "../../CustomHooks/useProducts";
import ShopSidebar from "../ShopSidebar/ShopSidebar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "./Order.css";
import {
  addLocalStrge,
  getLocalStorageId,
  removeLocalStrge,
} from "../LocalStroge/LocalStroge";
import { Link } from "react-router-dom";

const Order = () => {
  const [products, setData] = useProducts();
  const [cart, setCart] = useCart(products);

  const handleRemove = (item) => {
    const rest = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(rest);
    removeLocalStrge(item.id);
  };

  const clearLocalDB = () => {
    localStorage.clear();
    setCart([]);
  };
  return (
    <div>
      <div className="product container">
        <div className="product-body">
          {cart.map((cartItem) => (
            <div className="card" key={cartItem.id}>
              <img
                src={cartItem.img}
                alt="Avatar"
                style={{ width: "100%", heigth: "100%" }}
              />
              <div className="container">
                <h4>
                  <b>{cartItem.name}</b>
                </h4>
                <p>{cartItem.price}</p>
                <p>This Item Number: {cartItem.quantity}</p>
              </div>
              <button
                className="product-body-footer"
                onClick={() => handleRemove(cartItem)}
              >
                Remove To Cart{" "}
                <FontAwesomeIcon className="icon" icon={faTrash} />
              </button>
            </div>
          ))}
        </div>
        <div className="product-sidebar">
          <ShopSidebar cart={cart} clearLocalDB={clearLocalDB}>
            <Link to="/shop">
              <button className="remove-order">
                Add Shop{" "}
                <FontAwesomeIcon className="icon" icon={faArrowRight} />
              </button>
            </Link>
          </ShopSidebar>
        </div>
      </div>
    </div>
  );
};

export default Order;
