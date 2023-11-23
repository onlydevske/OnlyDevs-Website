import React from 'react';

export default function Categories() {
  return (
    <>
         <div className="w-1/4 bg-white p-4 rounded-md shadow-md">
            <ul>
              {categories.map((category) => (
                <li key={category} className="py-2 text-indigo-600 hover:text-indigo-800 cursor-pointer">{category}</li>
              ))}
            </ul>
          </div>
    </>
  );
}
