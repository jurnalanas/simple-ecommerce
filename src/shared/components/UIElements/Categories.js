import React from 'react';

const CATEGORIES_ITEM = [
    {
      "imageUrl": "https://img.icons8.com/bubbles/2x/t-shirt.png",
      "id": 21,
      "name": "Baju"
    },
    {
      "imageUrl": "https://img.icons8.com/flat_round/2x/long-shorts.png",
      "id": 42,
      "name": "Celana"
    },
    {
      "imageUrl": "https://img.icons8.com/flat_round/2x/summer-hat.png",
      "id": 11,
      "name": "Topi"
    },
    {
      "imageUrl": "https://img.icons8.com/color/2x/red-purse.png",
      "id": 91,
      "name": "Tas"
    },
    {
      "imageUrl": "https://img.icons8.com/cute-clipart/2x/apple-watch-apps.png",
      "id": 131,
      "name": "Jam Tangan"
    }
  ];

const Categories = () => {
  return (
    <div className="bg-white border-b-2">
      <div className="max-w-xl mx-auto overflow-hidden">
        <div className="bg-white flex mx-2 overflow-x-scroll p-2 text-center text-gray-700 text-sm w-full whitespace-no-wrap">
          { CATEGORIES_ITEM.map((item) => (
            <div
              className="align-middle inline-block overflow-hidden rounded mx-4 flex-1"
              key={item.id}
            >
              <img
                className="m-auto"
                style={{width: '30px'}}
                src={item.imageUrl}
                alt={item.name}
              />
              <div>{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
