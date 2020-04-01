import React from 'react';

const FloatingBar = () => {
  return (
    <div className="fixed bg-teal-500 bottom-0 mx-auto p-4 w-full">
      <div className="align-center flex flex-wrap font-bold items-center justify-center m-auto max-w-xl text-white">
        <div className="flex-1 text-center cursor-pointer">Home</div>
        <div className="flex-1 text-center cursor-pointer">Feed</div>
        <div className="flex-1 text-center cursor-pointer">Cart</div>
        <div className="flex-1 text-center cursor-pointer">Profile</div>
      </div>
    </div>
  )
}

export default FloatingBar;
