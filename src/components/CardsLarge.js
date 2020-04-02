import React from 'react';

const CardsLarge = () => {
  return (
    <div className="m-3 overflow-hidden rounded w-full">
      <img
        className="w-full"
        src="https://tailwindcss.com/img/card-top.jpg"
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4 bg-white">
        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
        <p>{process.env.REACT_APP_API_HOST}</p>
      </div>
    </div>
  );
}

export default CardsLarge;
