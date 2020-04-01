import React from "react";
import Navbar from "./components/Navbar";
import Contents from "./components/Contents";
import FloatingBar from "./components/FloatingBar";

function App() {
  return (
    <>
      <div>
        <Navbar />
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
