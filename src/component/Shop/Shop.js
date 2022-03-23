import React, { useEffect, useState } from "react";
import Header from "../Header.js/Header";
import "./Shop.css";
import ShopCard from "./ShopCard";

const Shop = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const handleClick = (item) => {
    console.log(item);
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
          <div>
            <h1>Hello</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
