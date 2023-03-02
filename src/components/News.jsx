import React from 'react';

const News = () => {
    return (
        <section className="bg-white py-8">
            <div className="container mx-auto flex flex-wrap">
                <h2 className="w-full font-semibold text-2xl mb-5">
                    Announcements
                </h2>
                <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                    <div className="h-full bg-gray-100 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                        <h2 className="tracking-wildets text-xs title-font font-medium text-gray-500 mb-1">
                        HTML FOR IOT
                        </h2>
                        <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                            This is not breaking news
                        </h1>
                        <p className="leading-relaxed mb-3">
                            Haha
                        </p>
                        <a className="text-yellow-500 inline-flex items-center">
                            Learn More
                        </a>
                    </div>
                </div>
                <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                    <div className="h-full bg-gray-100 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                        404 ERA
                        </h2>
                        <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                            Intern deploys successfully.
                        </h1>
                        <p className="leading-relaxed mb-3">
                            Events happened on a Friday.
                        </p>
                        <a className="text-yellow-500 inline-flex items-center">
                            Learn More
                        </a>
                    </div>
                </div>
                <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                    <div className="h-full bg-gray-100 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                            Aliens Confirm
                        </h2>
                        <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                            It's real, you can master Js.
                        </h1>
                        <p className="leading-relaxed mb-3">
                            Lorem Ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <a className="text-yellow-500 inline-flex items-center">
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default News;