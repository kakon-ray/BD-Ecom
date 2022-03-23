import React, { useEffect, useState } from "react";
import Header from "../Header.js/Header";
import ShopSidebar from "../ShopSidebar/ShopSidebar";
import "./Shop.css";
import ShopCard from "./ShopCard";

const Shop = () => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const handleClick = (item) => {
    const newCartItem = [...cart, item];
    setCart(newCartItem);
  };

  return (
    <>
      <Header />
      <div className="product">
        <div className="product-body">
          {data.map((item) => {
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
