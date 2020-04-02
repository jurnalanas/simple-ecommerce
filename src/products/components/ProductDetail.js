import React from 'react';

const ProductDetail = props => {
  return (
    <div className="m-3 overflow-hidden rounded w-full">
      <img
        className="w-full"
        src={props.image}
        alt={props.title}
      />
      <div className="px-6 py-4 bg-white">
        <div className="font-bold text-xl mb-2">{props.title}</div>
        <p className="text-gray-700 text-base">
          {props.description}
        </p>
      </div>
    </div>
  );
}

export default ProductDetail;
