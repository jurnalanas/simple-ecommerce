import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHeart,
  faAngleLeft
} from "@fortawesome/free-solid-svg-icons";
import PageDrawer from "../UIElements/PageDrawer";
import jsonData from "../../util/mockData";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(
  faHeart,
  faAngleLeft
);

const Navbar = () => {
  let history = useHistory();
  const [mockData, setMockData] = useState(jsonData);
  const [isDrawerOpen, setDrawerIsOpen] = useState(false)

  const searchData = (e) => {
    let queryData = [];
    console.log(jsonData)
    if (e.target.value !== '') {
      jsonData.forEach(item => {
        if (item['title'].toLowerCase().indexOf(e.target.value) !== -1) {
          if (queryData.length < 10) {
            queryData.push(item)
          }
        }
      })
    }
    setMockData(queryData);
  }

  const openDrawerHandler = (e) => {
    setDrawerIsOpen(e.target.value.length > 0)
  };

  return (
    <>
      <nav className="bg-teal-500 p-4">
        <div className="max-w-xl mx-auto flex">
          <button className="mx-2 px-1 m-auto" onClick={() => history.goBack()}>
            <FontAwesomeIcon icon={faAngleLeft} size="2x" />
          </button>
          <input
            type="search"
            className="w-full bg-purple-white shadow rounded border-0 p-2"
            placeholder="Search by name..."
            onChange={searchData && openDrawerHandler}
          />
        </div>
      </nav>
      <PageDrawer show={isDrawerOpen} items={mockData} />
    </>
  );
}

export default Navbar;
