import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-teal-500 p-4">
      <div className="flex">
        <div className="mx-2 px-1 bg-white border-solid border-1">
          <span>prev</span>
        </div>
        <input type="search" className="w-full bg-purple-white shadow rounded border-0 p-2" placeholder="Search by name..." />
      </div>
    </nav>
  )
}

export default Navbar;
