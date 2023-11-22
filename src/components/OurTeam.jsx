import React from 'react';
import { FaFacebookF, FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Jane Doe',
    role: 'Community Leader',
    bio: 'Jane leads our community efforts with a passion for open collaboration.',
    imageUrl: 'https://pbs.twimg.com/profile_images/1716131001028456448/zIUdM8_1_400x400.jpg',
    social: {
      facebook: 'https://facebook.com/jane.doe',
      twitter: 'https://twitter.com/jane.doe',
      github: 'https://github.com/jane-doe',
      linkedin: 'https://linkedin.com/in/janedoe'
    }
  },
  {
    name: 'Jane Doe',
    role: 'Community Leader',
    bio: 'Jane leads our community efforts with a passion for open collaboration.',
    imageUrl: 'https://pbs.twimg.com/profile_images/1716131001028456448/zIUdM8_1_400x400.jpg',
    social: {
      facebook: 'https://facebook.com/jane.doe',
      twitter: 'https://twitter.com/jane.doe',
      github: 'https://github.com/jane-doe',
      linkedin: 'https://linkedin.com/in/janedoe'
    }
  },
  {
    name: 'Jane Doe',
    role: 'Community Leader',
    bio: 'Jane leads our community efforts with a passion for open collaboration.',
    imageUrl: 'https://pbs.twimg.com/profile_images/1716131001028456448/zIUdM8_1_400x400.jpg',
    social: {
      facebook: 'https://facebook.com/jane.doe',
      twitter: 'https://twitter.com/jane.doe',
      github: 'https://github.com/jane-doe',
      linkedin: 'https://linkedin.com/in/janedoe'
    }
  },
  {
    name: 'Jane Doe',
    role: 'Community Leader',
    bio: 'Jane leads our community efforts with a passion for open collaboration.',
    imageUrl: 'https://pbs.twimg.com/profile_images/1716131001028456448/zIUdM8_1_400x400.jpg',
    social: {
      facebook: 'https://facebook.com/jane.doe',
      twitter: 'https://twitter.com/jane.doe',
      github: 'https://github.com/jane-doe',
      linkedin: 'https://linkedin.com/in/janedoe'
    }
  },
];

export default function OurTeam() {
  return (
    <div className="container mx-auto px-4 py-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
      {teamMembers.map((member) => (
        <div key={member.name} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
          <div className="p-4 border-b-8 border-yellow-200 rounded-full mx-auto w-40 h-40 overflow-hidden shadow-xl">
            <img className="w-full h-full object-cover rounded-full" src={member.imageUrl} alt={member.name} style={{ boxShadow: '0 4px 6px rgba(250, 225, 0, 0.5), 0 2px 4px rgba(250, 225, 0, 0.6)' }} />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-sm">{member.role}</p>
            <p className="text-gray-600 mt-1">{member.bio}</p>
            <div className="flex justify-center mt-4 space-x-3">
              <a href={member.social.facebook} target="_blank" rel="noopener noreferrer"><FaFacebookF className="text-yellow-600" /></a>
              <a href={member.social.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter className="text-yellow-500" /></a>
              <a href={member.social.github} target="_blank" rel="noopener noreferrer"><FaGithub className="text-gray-700" /></a>
              <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedinIn className="text-blue-700" /></a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}
