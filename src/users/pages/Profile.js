import React from "react";
import Navbar from "../../shared/components/Navigation/Navbar";
import FloatingBar from "../../shared/components/Navigation/FloatingBar";
import CartItem from "../components/CartItem";

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className="container max-w-lg mx-auto my-2">
        <div className="px-4 mb-16 text-gray-800 leading-normal w-full">
          <CartItem />
        </div>
      </div>
      <FloatingBar/>
    </div>
  );
}

export default Profile;
