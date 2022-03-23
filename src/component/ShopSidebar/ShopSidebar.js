import React from "react";
import "./ShopSldebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ShopSidebar = ({ cart }) => {
  //   console.log(cart);

  // array reduce mathod usegin totalprice in the props cart
  const totalPrice = cart.reduce((total, current) => {
    return total + current.price;
  }, 0);

  const totalShipingCarj = cart.reduce((total, current) => {
    return total + current.shipping;
  }, 0);

  const totalText = (totalPrice * 10) / 100;

  const grandTotal = totalPrice + totalShipingCarj + totalText;

  return (
    <div className="cart-siderbar-design">
      <h1 className="Order">Order Summery</h1>
      <div className="order-body">
        <h3>Selected Items: {cart.length}</h3>
        <h3>Total Price: ${totalPrice}</h3>
        <h3>Total Shipping Charge: ${totalShipingCarj}</h3>
        <h3>Tax: ${totalText}</h3>
        <h3>Grand Total: ${grandTotal}</h3>
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
