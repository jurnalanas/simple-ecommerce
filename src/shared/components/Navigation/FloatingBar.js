import React from 'react';
import { Link } from 'react-router-dom';

const FloatingBar = () => {
  return (
    <div className="fixed bg-teal-500 bottom-0 mx-auto p-4 w-full">
      <div className="align-center flex flex-wrap font-bold items-center justify-center m-auto max-w-xl text-white">
        <div className="flex-1 text-center cursor-pointer">
          <Link
            to="/"
            className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4"
          >Home</Link>
        </div>
        <div className="flex-1 text-center cursor-pointer">
          <Link
            to="/products"
            className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4"
          >Feed</Link>
        </div>
        <div className="flex-1 text-center cursor-pointer">
          <Link
            to="/Products"
            className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4"
          >Cart</Link>
        </div>
        <div className="flex-1 text-center cursor-pointer">
          <Link
            to="/profile"
            className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4"
          >Profile</Link>
        </div>
      </div>
    </div>
  )
}

export default FloatingBar;
