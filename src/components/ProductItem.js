import React from 'react';

const ProductItem = props => {
  return (
    <div className="m-3 overflow-hidden rounded w-full">
      <img
        className="w-full"
        src={props.image}
        alt={props.title}
      />
      <div className="px-6 py-4 bg-white">
        <div className="font-bold text-xl mb-2">{props.title}</div>
      </div>
    </div>
  )
}

export default ProductItem;
