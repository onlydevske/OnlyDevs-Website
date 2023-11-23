import React from 'react';

export default function DiscussionsList() {
  return (
    <>
          <div className="flex-1">
            {discussions.map((discussion) => (
              <div key={discussion.id} className="bg-white p-4 rounded-md shadow-md mb-4">
                <h3 className="font-bold">{discussion.title}</h3>
                <p className="text-gray-600">{discussion.category}</p>
                <p className="text-gray-600">Upvotes: {discussion.upvotes}</p>
              </div>
            ))}
          </div>
    </>
  );
}
