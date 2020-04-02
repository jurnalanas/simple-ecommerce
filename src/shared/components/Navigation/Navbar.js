import React, { useState } from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHeart,
  faAngleLeft
} from "@fortawesome/free-solid-svg-icons";
import CardsSmall from "../UIElements/CardsSmall";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(
  faHeart,
  faAngleLeft
);

const Navbar = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(!drawerIsOpen);
  };

  return (
    <>
      <nav className="bg-teal-500 p-4">
        <div className="max-w-xl mx-auto flex">
          <div className="mx-2 px-1 m-auto">
            <FontAwesomeIcon icon={faAngleLeft} size="2x" />
          </div>
          <input
            type="search"
            className="w-full bg-purple-white shadow rounded border-0 p-2"
            placeholder="Search by name..."
            onKeyUp={openDrawerHandler}
          />
        </div>
      </nav>
      <CardsSmall show={drawerIsOpen} />
    </>
  );
}

export default Navbar;
