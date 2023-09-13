// import { useState, useEffect } from 'react';

const url = 'https://jsonplaceholder.typicode.com/todos';

import useFetch from '../utils/useFetch';

const CustomHooks = () => {
  const { loading, products } = useFetch(url);
  console.log(products);
  //   console.log('yam', yam);

  return (
    <div>
      <h2>{loading ? 'loading...' : 'data'}</h2>
    </div>
  );
};

export default CustomHooks;
