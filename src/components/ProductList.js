import React from 'react';
import ProductItem from './ProductItem';

const ProductList = props => {
  if (props.items.length === 0) {
    return (
      <div>
        <h2>No Products found</h2>
      </div>
    )
  }

  return (
    <>
      {props.items.map(product => (
        <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          loved={product.loved}
          description={product.description}
          image={product.imageUrl}
        />
      ))}
    </>
  )
}

export default ProductList;
