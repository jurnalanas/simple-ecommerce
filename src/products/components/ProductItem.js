import React from 'react';
import { Link } from 'react-router-dom';


const ProductItem = props => {
  return (
    <div className="m-3 overflow-hidden rounded w-full">
      <Link
        to={`/product/${props.id}`}
      >
        <img
          className="w-full"
          src={props.image}
          alt={props.title}
        />
        <div className="px-6 py-4 bg-white">
          <div className="font-bold text-xl mb-2">{props.title}</div>
        </div>
      </Link>
    </div>
  )
}

export default ProductItem;
