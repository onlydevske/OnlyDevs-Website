import React from 'react';

const Stories = () => {
    // Sample images, replace with actual images for each story
    const storyImages = {
        story1: '/path/to/story1-image.jpg',
        story2: '/path/to/story2-image.jpg',
        story3: '/path/to/story3-image.jpg'
    };

    return (
        <section className="bg-white py-8">
            <div className="container mx-auto flex flex-wrap">
                <h2 className="w-full font-semibold text-2xl mb-5 text-gray-800">
                    Our Members' Stories
                </h2>
                {/* Story 1 */}
                <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                    <div className="h-full bg-gray-100 rounded-lg overflow-hidden text-center relative">
                        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={storyImages.story1} alt="Story 1" />
                        <div className="p-6">
                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                                FROM BUGS TO FEATURES
                            </h2>
                            <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                                Jane Doe's Journey with Open Source
                            </h1>
                            <p className="leading-relaxed mb-3">
                                Jane shares her incredible journey from being a novice in programming to a contributor to major open-source projects.
                            </p>
                            <a className="text-indigo-500 inline-flex items-center">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
                {/* Story 2 */}
                <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                    <div className="h-full bg-gray-100 rounded-lg overflow-hidden text-center relative">
                        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={storyImages.story2} alt="Story 2" />
                        <div className="p-6">
                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                                THE CODE WARRIOR
                            </h2>
                            <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                                Alex's 30 Days of Code Challenge
                            </h1>
                            <p className="leading-relaxed mb-3">
                                Alex took on a coding challenge that not only improved his skills but also landed him his dream job.
                            </p>
                            <a className="text-indigo-500 inline-flex items-center">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
                {/* Story 3 */}
                <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                    <div className="h-full bg-gray-100 rounded-lg overflow-hidden text-center relative">
                        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={storyImages.story3} alt="Story 3" />
                        <div className="p-6">
                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                                DESIGN MEETS CODE
                            </h2>
                            <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                                Michael's UI/UX Breakthrough
                            </h1>
                            <p className="leading-relaxed mb-3">
                                Discover how Michael bridged the gap between design and development, creating stunning, functional websites.
                            </p>
                            <a className="text-indigo-500 inline-flex items-center">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stories;
