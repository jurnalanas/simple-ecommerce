import React from 'react';
import ProductList from './ProductList';

const contentContainter = "flex flex-row flex-wrap flex-grow mt-2"

const Contents = () => {
  return (
    <div className={`${contentContainter}`}>
      <ProductList/>
    </div>
  )
}

export default Contents;
