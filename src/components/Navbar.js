import React from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(
  faCoffee
);

const Navbar = () => {
  return (
    <nav className="bg-teal-500 p-4">
      <div className="max-w-xl mx-auto flex">
        <div className="mx-2 px-1">
          <FontAwesomeIcon icon={faCoffee} size="2x" />
        </div>
        <input
          type="search"
          className="w-full bg-purple-white shadow rounded border-0 p-2"
          placeholder="Search by name..."
        />
      </div>
    </nav>
  );
}

export default Navbar;
