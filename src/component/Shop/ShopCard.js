import React from "react";

const ShopCard = (props) => {
  return (
    <>
      <div className="flex-col">
        <div className="img-container">
          <img src={props.img} alt="" className="img" />
        </div>
        <div className="header-area">
          <h4>
            {props.name.split("").length < 5
              ? props.name
              : props.name.split("").slice(0, 20).join("")}
          </h4>
          <span className="price">Price: {props.price}</span>
        </div>

        <div className="footer-area">
          <p>{props.category}</p>
          <p>{props.seller}</p>
        </div>
        <div className="product-body-footer">
          <p>Add to Cart</p>
        </div>
      </div>
    </>
  );
};

export default ShopCard;
