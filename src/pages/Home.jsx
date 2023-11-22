import React from 'react';
import Header from '../components/Header';
import HomeImg from '../images/africa.png';

export default function Home() {
    return (
        <>
            <div className="flex flex-col min-h-screen overflow-hidden">
                <Header />
                <section className="flex items-center justify-center min-h-screen bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 text-gray-800 dark:text-gray-900">
                    <div className="container mx-auto px-8 flex flex-wrap items-center justify-center">
                        {/* Content */}
                        <div className="w-full md:w-1/2 flex flex-col justify-center items-start">
                            <h1 className="text-3xl md:text-4xl leading-tight mb-6 font-bold tracking-tighter text-gray-900">
                                Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400">OnlyDevs</span>, the community for developers!
                            </h1>
                            <p className="text-lg mb-6 text-gray-800">
                                Dive into a world where coding comes alive, share your knowledge, and learn from the best in a community that champions growth and innovation.
                            </p>
                            <div className="flex w-full md:w-auto">
                                <input type="email" placeholder="Enter your email" className="p-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-yellow-600 bg-yellow-500 text-gray-900" />
                                <button className="bg-yellow-600 text-white rounded-r-lg px-6 py-2 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-700">Join Us</button>
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
