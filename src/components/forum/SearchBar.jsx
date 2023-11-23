import React from 'react';

export default function Searchbar() {
  return (
    <>
         <div className="flex justify-between items-center mb-6">
          <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition duration-300">Create New Discussion</button>
          <input type="search" placeholder="Search discussions..." className="border border-gray-300 p-2 rounded w-1/3" />
        </div>
    </>
  );
}
