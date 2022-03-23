import React from "react";
import "./ShopSldebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ShopSidebar = ({ cart }) => {
  return (
    <div>
      <h1 className="Order">Order Summery</h1>
      <div className="order-body">
        <h3>Selected Items: {cart.length}</h3>
        <h3>Total Price:: {cart.length}</h3>
        <h3>Total Shipping Charge: {cart.length}</h3>
        <h3>Tax: {cart.length}</h3>
        <h3>Grand Total: {cart.length}</h3>
      </div>
      <div>
        <button className="clear-cart">
          Clear Cart <FontAwesomeIcon className="icon" icon={faTrash} />
        </button>
        <p>
          <button className="remove-order">
            Remove Order{" "}
            <FontAwesomeIcon className="icon" icon={faArrowRight} />
          </button>
        </p>
      </div>
    </div>
  );
};

export default ShopSidebar;
