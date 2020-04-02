import React from "react";
import Navbar from "../../shared/components/Navigation/Navbar";
import FloatingBar from "../../shared/components/Navigation/FloatingBar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container max-w-xl mx-auto">
        <div className="px-4 mb-16 text-gray-800 leading-normal w-">
        </div>
      </div>
    <FloatingBar/>
    </div>
  );
}

export default Home;
