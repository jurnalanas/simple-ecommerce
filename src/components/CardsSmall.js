import React from 'react';

const CardsSmall = () => {
  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex">
      <div className="bg-cover flex-none lg:rounded-l overflow-hidden text-center w-1/3" style={{backgroundImage: 'url(https://tailwindcss.com/img/card-left.jpg)'}} title="Woman holding a mug">
      </div>
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
          <p className="text-gray-700 text-base">Lorem.</p>
        </div>
      </div>
    </div>
  )
}

export default CardsSmall;
