import React from 'react';


const Categories = props => {
  return (
    <div className="bg-white border-b-2">
      <div className="max-w-xl mx-auto overflow-hidden">
        <div className="bg-white flex mx-2 overflow-x-scroll p-2 text-center text-gray-700 text-sm w-full whitespace-no-wrap">
          { props.items.map((item) => (
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
