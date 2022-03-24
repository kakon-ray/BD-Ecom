/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from "react";
import Header from "../Header.js/Header";
import { addLocalStrge, getLocalStorageId } from "../LocalStroge/LocalStroge";

import ShopSidebar from "../ShopSidebar/ShopSidebar";
import "./Shop.css";
import ShopCard from "./ShopCard";

const Shop = () => {
  const [products, setData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  // localstroge data display show
  useEffect(() => {
    const localStorageId = getLocalStorageId();

    let localStorageValue = [];
    for (let dataItem in localStorageId) {
      const cartProduct = products.find((item) => item.id === dataItem);

      if (cartProduct) {
        const quantity = localStorageId[dataItem];
        cartProduct.quantity = quantity;
        cartProduct.quantity = localStorageId[dataItem];

        // console.log(cartProduct);
        localStorageValue.push(cartProduct);
      }
    }
    setCart(localStorageValue);
  }, [products]);

  const handleClick = (item) => {
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

    // location.reload();
  };
  console.log(cart);

  return (
    <>
      <Header />
      <div className="product">
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
                handleClick={handleClick}
              />
            );
          })}
        </div>
        <div className="product-sidebar">
          <ShopSidebar cart={cart} />
        </div>
      </div>
    </>
  );
};

export default Shop;
