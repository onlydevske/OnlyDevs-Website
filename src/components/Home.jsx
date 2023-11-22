// Home.js
import React from 'react';
import Header from './Header';
import HomeImg from '../images/africa.png';

export default function Home() {
    return (
        <>
         <div className="flex flex-col min-h-screen overflow-hidden">
            <section className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-teal-400 text-gray-800 dark:text-white">
                <div className="container mx-auto px-8 flex flex-wrap items-center justify-center">
                    {/* Content */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center items-start">
                        <h1 className="text-3xl md:text-4xl leading-tight mb-6 font-bold tracking-tighter">
                            Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-yellow-300 to-pink-500">OnlyDevs</span>, the community for developers!
                        </h1>
                        <p className="text-lg mb-6">
                            Dive into a world where coding comes alive, share your knowledge, and learn from the best in a community that champions growth and innovation.
                        </p>
                        <div className="flex w-full md:w-auto">
                            <input type="email" placeholder="Enter your email" className="p-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            <button className="bg-pink-500 text-white rounded-r-lg px-6 py-2 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500">Join Us</button>
                        </div>
                    </div>
                    {/* Image */}
                    <div className="w-full md:w-1/2 flex justify-center pt-6 md:pt-0">
                        <img src={HomeImg} alt="Map of Africa" className="max-h-[600px] object-contain" />
                    </div>
                </div>
            </section>
        </div>
        </>
       
    );
}
