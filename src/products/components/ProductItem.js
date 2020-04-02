import React from 'react';
import { Link } from 'react-router-dom';
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHeart
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(
  faHeart,
);

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
          {props.loved > 0 &&
            <FontAwesomeIcon icon={faHeart} />
          }
        </div>
      </Link>
    </div>
  )
}

export default ProductItem;
