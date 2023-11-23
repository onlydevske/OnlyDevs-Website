import React from 'react';


const discussions = [
    { id: 1, title: 'How to integrate TypeScript in a React project?', upvotes: 42, category: 'TypeScript', replies: 8 },
    { id: 2, title: 'Best practices for state management in Vue.js', upvotes: 35, category: 'Vue.js', replies: 5 },
    { id: 3, title: 'Has anyone tried the new Deno runtime?', upvotes: 27, category: 'Deno', replies: 3 },
  
  ];
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
