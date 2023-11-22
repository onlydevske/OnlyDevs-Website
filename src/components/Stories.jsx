import React from 'react';

const Stories = () => {
    return (
        <section className="bg-white py-8">
            <div className="container mx-auto flex flex-wrap">
                <h2 className="w-full font-semibold text-2xl mb-5 text-gray-800">
                    Our Members' Stories
                </h2>
                {/* Story 1 */}
                <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                    <div className="h-full bg-gray-100 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                            FROM BUGS TO FEATURES
                        </h2>
                        <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                            Jane Doe's Journey with Open Source
                        </h1>
                        <p className="leading-relaxed mb-3">
                            Jane shares her incredible journey from being a novice in programming to a contributor to major open-source projects. Find out how our community helped her achieve her goals.
                        </p>
                        <a className="text-indigo-500 inline-flex items-center">
                            Learn More
                        </a>
                    </div>
                </div>
                {/* Story 2 */}
                <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                    <div className="h-full bg-gray-100 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                            THE CODE WARRIOR
                        </h2>
                        <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                            Alex's 30 Days of Code Challenge
                        </h1>
                        <p className="leading-relaxed mb-3">
                            Alex took on a coding challenge that not only improved his skills but also landed him his dream job. Dive into his month-long coding adventure.
                        </p>
                        <a className="text-indigo-500 inline-flex items-center">
                            Learn More
                        </a>
                    </div>
                </div>
                {/* Story 3 */}
                <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                    <div className="h-full bg-gray-100 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                            DESIGN MEETS CODE
                        </h2>
                        <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                            Michael's UI/UX Breakthrough
                        </h1>
                        <p className="leading-relaxed mb-3">
                            Discover how Michael bridged the gap between design and development, creating stunning, functional websites, and how OnlyDevs provided the platform for his portfolio.
                        </p>
                        <a className="text-indigo-500 inline-flex items-center">
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stories;
