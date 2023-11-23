import React from 'react';

export default function componentName() {
  return (
    <>
         <div className="w-1/4 bg-white p-4 rounded-md shadow-md">
            <h4 className="font-bold mb-4">Recommended</h4>
            {recommended.map((discussion) => (
              <div key={discussion.id} className="mb-2">
                <h5 className="text-indigo-600 hover:text-indigo-800 cursor-pointer">{discussion.title}</h5>
                <p className="text-xs">Upvotes: {discussion.upvotes}</p>
              </div>
            ))}
          </div>
    </>
  );
}
