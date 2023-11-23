import React from 'react';

const recommended = [
  { id: 1, title: 'React 18: What are the new features?', upvotes: 75 },
  { id: 2, title: 'Exploring GraphQL: A Beginner\'s Guide', upvotes: 65 },
  { id: 3, title: 'Understanding Async/Await in JavaScript', upvotes: 60 },
];

export default function Recommendations() {
  return (
    <div className="w-full md:w-1/4 bg-white p-4 rounded-md shadow-md">
      <h4 className="font-bold mb-4">Recommended</h4>
      {recommended.map((discussion) => (
        <div key={discussion.id} className="mb-2">
          <h5 className="text-indigo-600 hover:text-indigo-800 cursor-pointer">{discussion.title}</h5>
          <p className="text-xs">Upvotes: {discussion.upvotes}</p>
        </div>
      ))}
    </div>
  );
}
