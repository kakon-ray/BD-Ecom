/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useCart from "../../CustomHooks/useCart";
import useProducts from "../../CustomHooks/useProducts";

import { addLocalStrge, getLocalStorageId } from "../LocalStroge/LocalStroge";

import ShopSidebar from "../ShopSidebar/ShopSidebar";
import "./Shop.css";
import ShopCard from "./ShopCard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Shop = () => {
  const [products, setData] = useProducts();
  const [cart, setCart] = useCart(products);

  const addToCart = (item) => {
    let newCart = [];
    const exists = cart.find((product) => product.id === item.id);

    if (!exists) {
      item.quantity = 1;
      newCart = [...cart, item];
      // console.log(newCart);
    } else {
      const rest = cart.filter((product) => product.id !== item.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
      // console.log(newCart);
    }

    setCart(newCart);
    // console.log(cart);
    addLocalStrge(item.id);
  };
  const clearLocalDB = () => {
    localStorage.clear();
    setCart([]);
  };
  return (
    <>
      <div className="product container">
        <div className="product-body">
          {products.map((item) => {
            return (
              <ShopCard
                key={item.id}
                img={item.img}
                name={item.name}
                category={item.category}
                seller={item.seller}
                price={item.price}
                item={item}
                addToCart={addToCart}
              />
            );
          })}
        </div>
        <div className="product-sidebar">
          <ShopSidebar cart={cart} clearLocalDB={clearLocalDB}>
            <Link to="/order">
              <button className="remove-order">
                Remove Product{" "}
                <FontAwesomeIcon className="icon" icon={faArrowRight} />
              </button>
            </Link>
          </ShopSidebar>
        </div>
      </div>
    </>
  );
};

export default Shop;
