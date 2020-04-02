import React from "react";
import Navbar from "../../shared/components/Navigation/Navbar";
import Contents from "../components/Contents";
import FloatingBar from "../../shared/components/Navigation/FloatingBar";
import Categories from "../../shared/components/UIElements/Categories";


function Products() {
  return (
    <>
      <div>
        <Navbar />
        <Categories/>
        <div className="container max-w-xl mx-auto">
          <div className="px-4 mb-16 text-gray-800 leading-normal w-">
            <Contents />
          </div>
        </div>
      <FloatingBar/>
      </div>
    </>
  );
}

export default Products;
