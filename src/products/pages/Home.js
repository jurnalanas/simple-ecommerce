import React from "react";
import Navbar from "../../components/Navbar";
import FloatingBar from "../../components/FloatingBar";

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
