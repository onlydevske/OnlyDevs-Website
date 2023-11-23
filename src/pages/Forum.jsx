import React from 'react';
import Announcements from '../components/forum/Announcements';
import Searchbar from '../components/forum/SearchBar';
import Categories from '../components/forum/Categories';
import DiscussionsList from '../components/forum/DiscussionsList';

const Forum = () => {

const announcements = [
  { id: 1, title: 'Scheduled Maintenance on April 10th', date: 'April 5th' },
  { id: 2, title: 'New Features in Our Community Platform', date: 'April 12th' },
  { id: 3, title: 'Community Guidelines Update', date: 'April 15th' },

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
        <Announcements/>

        {/* Actions Bar */}
       <Searchbar/>

        {/* Main Content Section */}
        <div className="flex gap-4">
          {/* Categories Sidebar */}
         <Categories/>

          {/* Discussions List */}
        <DiscussionsList/>

          {/* Recommended Sidebar */}
         
        </div>
      </div>
    </div>
  );
};

export default Forum;
