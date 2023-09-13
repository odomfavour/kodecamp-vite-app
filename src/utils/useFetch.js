import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch(url);
    const products = await response.json();
    setProducts(products);
    setLoading(false);
  };

  console.log(products);

  useEffect(() => {
    getProducts();
  }, [url]);

  return { loading, products };
};

// export const yam = [];

export default useFetch;
