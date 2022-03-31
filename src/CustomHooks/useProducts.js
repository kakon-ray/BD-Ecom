import React, { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setData] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return [products, setData];
};

export default useProducts;
