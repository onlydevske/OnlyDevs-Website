import React from 'react';
import { FaFacebookF, FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa';
// Sample array of contributor data
const contributors = [
  {
    id: 1,
    name: 'Jane Doe',
    bio: 'Full Stack Developer with a passion for open source.',
    photo: 'https://pbs.twimg.com/profile_images/1716131001028456448/zIUdM8_1_400x400.jpg', // Placeholder path to the contributor's photo
    socials: {
      github: 'https://github.com/janedoe',
      linkedin: 'https://www.linkedin.com/in/janedoe',
      twitter: 'https://twitter.com/janedoe',
    },
  },
  {
    id: 2,
    name: 'Jane Doe',
    bio: 'Full Stack Developer with a passion for open source.',
    photo: 'https://pbs.twimg.com/profile_images/1716131001028456448/zIUdM8_1_400x400.jpg', // Placeholder path to the contributor's photo
    socials: {
      github: 'https://github.com/janedoe',
      linkedin: 'https://www.linkedin.com/in/janedoe',
      twitter: 'https://twitter.com/janedoe',
    },
  },
  {
    id: 3,
    name: 'Jane Doe',
    bio: 'Full Stack Developer with a passion for open source.',
    photo: 'https://pbs.twimg.com/profile_images/1716131001028456448/zIUdM8_1_400x400.jpg', // Placeholder path to the contributor's photo
    socials: {
      github: 'https://github.com/janedoe',
      linkedin: 'https://www.linkedin.com/in/janedoe',
      twitter: 'https://twitter.com/janedoe',
    },
  },
  {
    id: 4,
    name: 'Jane Doe',
    bio: 'Full Stack Developer with a passion for open source.',
    photo: 'https://pbs.twimg.com/profile_images/1716131001028456448/zIUdM8_1_400x400.jpg', // Placeholder path to the contributor's photo
    socials: {
      github: 'https://github.com/janedoe',
      linkedin: 'https://www.linkedin.com/in/janedoe',
      twitter: 'https://twitter.com/janedoe',
    },
  },
  {
    id: 5,
    name: 'Jane Doe',
    bio: 'Full Stack Developer with a passion for open source.',
    photo: 'https://pbs.twimg.com/profile_images/1716131001028456448/zIUdM8_1_400x400.jpg', // Placeholder path to the contributor's photo
    socials: {
      github: 'https://github.com/janedoe',
      linkedin: 'https://www.linkedin.com/in/janedoe',
      twitter: 'https://twitter.com/janedoe',
    },
  },
  {
    id: 6,
    name: 'Jane Doe',
    bio: 'Full Stack Developer with a passion for open source.',
    photo: 'https://pbs.twimg.com/profile_images/1716131001028456448/zIUdM8_1_400x400.jpg', // Placeholder path to the contributor's photo
    socials: {
      github: 'https://github.com/janedoe',
      linkedin: 'https://www.linkedin.com/in/janedoe',
      twitter: 'https://twitter.com/janedoe',
    },
  },
  {
    id: 6,
    name: 'Jane Doe',
    bio: 'Full Stack Developer with a passion for open source.',
    photo: 'https://pbs.twimg.com/profile_images/1716131001028456448/zIUdM8_1_400x400.jpg', // Placeholder path to the contributor's photo
    socials: {
      github: 'https://github.com/janedoe',
      linkedin: 'https://www.linkedin.com/in/janedoe',
      twitter: 'https://twitter.com/janedoe',
    },
  },
  {
    id: 6,
    name: 'Jane Doe',
    bio: 'Full Stack Developer with a passion for open source.',
    photo: 'https://pbs.twimg.com/profile_images/1716131001028456448/zIUdM8_1_400x400.jpg', // Placeholder path to the contributor's photo
    socials: {
      github: 'https://github.com/janedoe',
      linkedin: 'https://www.linkedin.com/in/janedoe',
      twitter: 'https://twitter.com/janedoe',
    },
  },
  {
    id: 6,
    name: 'Jane Doe',
    bio: 'Full Stack Developer with a passion for open source.',
    photo: 'https://pbs.twimg.com/profile_images/1716131001028456448/zIUdM8_1_400x400.jpg', // Placeholder path to the contributor's photo
    socials: {
      github: 'https://github.com/janedoe',
      linkedin: 'https://www.linkedin.com/in/janedoe',
      twitter: 'https://twitter.com/janedoe',
    },
  },
  {
    id: 6,
    name: 'Jane Doe',
    bio: 'Full Stack Developer with a passion for open source.',
    photo: 'https://pbs.twimg.com/profile_images/1716131001028456448/zIUdM8_1_400x400.jpg', // Placeholder path to the contributor's photo
    socials: {
      github: 'https://github.com/janedoe',
      linkedin: 'https://www.linkedin.com/in/janedoe',
      twitter: 'https://twitter.com/janedoe',
    },
  },
  {
    id: 6,
    name: 'Jane Doe',
    bio: 'Full Stack Developer with a passion for open source.',
    photo: 'https://pbs.twimg.com/profile_images/1716131001028456448/zIUdM8_1_400x400.jpg', // Placeholder path to the contributor's photo
    socials: {
      github: 'https://github.com/janedoe',
      linkedin: 'https://www.linkedin.com/in/janedoe',
      twitter: 'https://twitter.com/janedoe',
    },
  },
  // ... Add more contributor objects
];

export default function Contributors() {
  return (
    <div className="bg-blue-50 min-h-screen p-8">
    <h1 className="text-center text-3xl text-gray-800 font-bold mb-8">Our Contributors</h1>
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 gap-2">
      {contributors.map((contributor, index) => (
        <div 
          key={index} 
          className="bg-white rounded-lg overflow-hidden shadow-md p-4 border border-gray-200 transform hover:scale-110 transition duration-300 ease-in-out"
        >
          <img 
            src={contributor.photo} 
            alt={`Photo of ${contributor.name}`} 
            className="w-48 h-48 object-cover rounded-full transition-all duration-300 ease-in-out hover:opacity-90"
          />
          <div className="p-4 text-center">
            <h2 className="font-semibold text-xl mb-2">{contributor.name}</h2>
            <p className="text-gray-600 mb-4">{contributor.bio}</p>
            <div className="flex justify-center gap-4">
              <a href={contributor.socials.facebook} target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="text-yellow-600" />
              </a>
              <a href={contributor.socials.twitter} target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-yellow-500" />
              </a>
              <a href={contributor.socials.github} target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-gray-700" />
              </a>
              <a href={contributor.socials.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="text-blue-700" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}
