import React, { useEffect, useState } from "react";
import { getLocalStorageId } from "../component/LocalStroge/LocalStroge";

// this is a custom hook this hook use find localstroge value and display show

const useCart = (products) => {
  const [cart, setCart] = useState([]);

  // localstroge data display show
  useEffect(() => {
    const localStorageId = getLocalStorageId();

    let localStorageValue = [];
    for (let dataItem in localStorageId) {
      const cartProduct = products.find((item) => item.id === dataItem);

      if (cartProduct) {
        // get localstroge product value
        const quantity = localStorageId[dataItem];
        cartProduct.quantity = quantity;
        // console.log(cartProduct);
        localStorageValue.push(cartProduct);
      }
    }
    setCart(localStorageValue);
  }, [products]);

  return [cart, setCart];
};

export default useCart;
