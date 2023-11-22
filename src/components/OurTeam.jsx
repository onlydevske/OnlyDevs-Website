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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member) => (
          <div key={member.name} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-4 border-b-4 border-blue-600 rounded-full mx-auto w-32 h-32 overflow-hidden">
              <img className="w-full h-full object-cover rounded-full" src={member.imageUrl} alt={member.name} />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm">{member.role}</p>
              <p className="text-gray-600 mt-1">{member.bio}</p>
              <div className="flex mt-4 space-x-3">
                <a href={member.social.facebook} target="_blank" rel="noopener noreferrer"><FaFacebookF className="text-blue-600" /></a>
                <a href={member.social.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter className="text-blue-400" /></a>
                <a href={member.social.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedinIn className="text-blue-500" /></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
