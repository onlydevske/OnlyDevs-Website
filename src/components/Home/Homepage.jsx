import React from 'react';
import HomeImg from '../../images/africa.png';

export default function HomePage() {
  return (
    <>
      <style>
        {`
          @keyframes heartbeat {
            0% {
              transform: scale(1);
            }
            14% {
              transform: scale(1.3);
            }
            28% {
              transform: scale(1);
            }
            42% {
              transform: scale(1.3);
            }
            70% {
              transform: scale(1);
            }
          }
          .heartbeat {
            animation: heartbeat 2s infinite;
            display: inline-block;
            color: #fde047; /* This is a placeholder for your theme's yellow color */
          }
        `}
      </style>
      <div className="flex flex-col min-h-screen overflow-hidden">
        <section className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
          <div className="container mx-auto px-8 flex flex-wrap items-center justify-center">
            <div className="w-full md:w-1/2 flex flex-col  justify-center items-start space-y-6">
              <h1 className="text-3xl md:text-4xl leading-tight mb-6 font-bold  tracking-tighter">
                Join <span className="heartbeat">OnlyDevs</span>, the community for developers!
              </h1>
              <p className="text-lg mb-6">
                Dive into a world where coding comes alive, share your knowledge, and learn from the best in a community that champions growth and innovation. Designed with love and passion by developers, for developers.
              </p>
              <div className="flex w-full md:w-auto">
                <input type="email" placeholder="Enter your email" className="p-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-white text-gray-800" />
                <button className="bg-yellow-600 text-gray-900 rounded-r-lg px-6 py-2 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-700">Join Us</button>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center pt-6 md:pt-0">
              <img src={HomeImg} alt="Map of Africa" className="max-h-[600px] object-contain" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
