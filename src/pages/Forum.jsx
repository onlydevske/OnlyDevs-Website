import React from 'react';

const Forum = () => {

const announcements = [
  { id: 1, title: 'Scheduled Maintenance on April 10th', date: 'April 5th' },
  { id: 2, title: 'New Features in Our Community Platform', date: 'April 12th' },
  { id: 3, title: 'Community Guidelines Update', date: 'April 15th' },

];


const discussions = [
  { id: 1, title: 'How to integrate TypeScript in a React project?', upvotes: 42, category: 'TypeScript', replies: 8 },
  { id: 2, title: 'Best practices for state management in Vue.js', upvotes: 35, category: 'Vue.js', replies: 5 },
  { id: 3, title: 'Has anyone tried the new Deno runtime?', upvotes: 27, category: 'Deno', replies: 3 },

];

const categories = [
  'General',
  'Announcements',
  'Events',
  'Support',
  'Off-Topic',
  'TypeScript',
  'Vue.js',
  'Deno',
];

const recommended = [
  { id: 1, title: 'React 18: What are the new features?', upvotes: 75 },
  { id: 2, title: 'Exploring GraphQL: A Beginner\'s Guide', upvotes: 65 },
  { id: 3, title: 'Understanding Async/Await in JavaScript', upvotes: 60 },
];


  return (
    <div className="bg-gray-100 min-h-screen mt-16">
      <div className="container mx-auto px-4 py-8">
        {/* Announcements Section */}
        <div className="bg-white p-4 rounded-md shadow-md mb-6">
          {announcements.map((announcement) => (
            <div key={announcement.id} className="flex justify-between items-center bg-yellow-100 p-2 rounded-lg mb-2">
              <span className="font-medium">{announcement.title}</span>
              <span className="text-xs">{announcement.date}</span>
            </div>
          ))}
        </div>

        {/* Actions Bar */}
        <div className="flex justify-between items-center mb-6">
          <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition duration-300">Create New Discussion</button>
          <input type="search" placeholder="Search discussions..." className="border border-gray-300 p-2 rounded w-1/3" />
        </div>

        {/* Main Content Section */}
        <div className="flex gap-4">
          {/* Categories Sidebar */}
          <div className="w-1/4 bg-white p-4 rounded-md shadow-md">
            <ul>
              {categories.map((category) => (
                <li key={category} className="py-2 text-indigo-600 hover:text-indigo-800 cursor-pointer">{category}</li>
              ))}
            </ul>
          </div>

          {/* Discussions List */}
          <div className="flex-1">
            {discussions.map((discussion) => (
              <div key={discussion.id} className="bg-white p-4 rounded-md shadow-md mb-4">
                <h3 className="font-bold">{discussion.title}</h3>
                <p className="text-gray-600">{discussion.category}</p>
                <p className="text-gray-600">Upvotes: {discussion.upvotes}</p>
              </div>
            ))}
          </div>

          {/* Recommended Sidebar */}
          <div className="w-1/4 bg-white p-4 rounded-md shadow-md">
            <h4 className="font-bold mb-4">Recommended</h4>
            {recommended.map((discussion) => (
              <div key={discussion.id} className="mb-2">
                <h5 className="text-indigo-600 hover:text-indigo-800 cursor-pointer">{discussion.title}</h5>
                <p className="text-xs">Upvotes: {discussion.upvotes}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forum;
