import React from 'react';
import Announcements from '../components/forum/Announcements';
import Searchbar from '../components/forum/SearchBar';
import Categories from '../components/forum/Categories';
import DiscussionsList from '../components/forum/DiscussionsList';
import Recommendations from '../components/forum/Recommendations';

export default function Forum () {
  return (
    <div className="bg-gray-100 min-h-screen mt-16">
      <div className="container mx-auto px-4 py-8">
        <Announcements  />
        <Searchbar  />
        <div className="flex gap-4">
          <Categories />
          <DiscussionsList  />
          <Recommendations  />
        </div>
      </div>
    </div>
  );
};

