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
        cartProduct.quentity = localStorageId[dataItem];

        // console.log(cartProduct);
        localStorageValue.push(cartProduct);
      }
    }
    setCart(localStorageValue);
  }, [products]);

  const handleClick = (item) => {
    const newCartItem = [...cart, item];
    setCart(newCartItem);
    addLocalStrge(item.id);
  };

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
