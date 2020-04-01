import React from "react";
import Navbar from "./components/Navbar";
import Contents from "./components/Contents";
import FloatingBar from "./components/FloatingBar";
import CategoriesComponent from "./components/Categories";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <CategoriesComponent/>
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

export default App;
