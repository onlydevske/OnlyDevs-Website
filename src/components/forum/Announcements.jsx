import React from 'react';


const announcements = [
    { id: 1, title: 'Scheduled Maintenance on April 10th', date: 'April 5th' },
    { id: 2, title: 'New Features in Our Community Platform', date: 'April 12th' },
    { id: 3, title: 'Community Guidelines Update', date: 'April 15th' },
  ];
export default function Announcements() {
  return (
    <>
        <div className="bg-white p-4 rounded-md shadow-md mb-6">
          {announcements.map((announcement) => (
            <div key={announcement.id} className="flex justify-between items-center bg-yellow-100 p-2 rounded-lg mb-2">
              <span className="font-medium">{announcement.title}</span>
              <span className="text-xs">{announcement.date}</span>
            </div>
          ))}
        </div>
    </>
  );
}
