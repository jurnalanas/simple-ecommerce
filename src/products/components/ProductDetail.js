import React from 'react';
import { Link } from 'react-router-dom';


const ProductDetail = (props) => {
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
      <div className="flex">
        <div className="font-bold h-12 ml-auto p-auto px-4 text-2xl text-right">{props.price}</div>
        <div className="h-12">
          <Link
            className="bg-teal-500 border-b-4 border-teal-600 font-bold hover:border-blue px-4 py-2 rounded text-white"
            to={`/profile/add/${props.id}`}
          >
            Buy
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
}

export default ProductDetail;


