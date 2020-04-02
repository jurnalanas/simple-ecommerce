import React, { useContext } from 'react';
import ProductItem from './ProductItem';
import { AuthContext } from '../../shared/context/auth-context';

const ProductList = () => {
  const auth = useContext(AuthContext);
  if (auth.products.length < 1) {
    return (
      <div>
        <h2>No Products found</h2>
      </div>
    )
  }

  return (
    <>
      {auth.products.map(product => (
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
