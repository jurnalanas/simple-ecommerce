import React from 'react';

const CartItem = props => {

  return (
    <div className="flex w-full my-2">
      <div className="bg-cover flex-none lg:rounded-l overflow-hidden text-center w-1/3" style={{backgroundImage: `url(${props.image})`}} title="Woman holding a mug">
      </div>
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">{props.title}</div>
          <p className="text-gray-700 text-base truncate max-w-xs">{props.description}</p>
        </div>
      </div>
    </div>
  )
}

export default CartItem;
