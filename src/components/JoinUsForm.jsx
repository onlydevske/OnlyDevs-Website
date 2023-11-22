import React from 'react';

export default function JoinUsForm() {
    return (
        <div className="max-w-lg mx-auto rounded overflow-hidden shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Join Us</h2>
            <form>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                        Name
                    </label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your name"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                        Message
                    </label>
                    <textarea 
                    id="message"
                    name="message"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Tell Us why you want to join OnlyDevs"
                    ></textarea>
                </div>
                <div className="flex items-center justify-center">
                    <button 
                    className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}



            // {/* Stories section */}
            // <section className="bg-gray-100 dark:bg-gray-800">
            //     <div className="container mx-auto px-8 py-16">
            //         <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Latest Stories</h2>
            //         <Stories />
            //     </div>
            // </section>

            // {/* News section */}
            // <section className="bg-white dark:bg-gray-900">
            //     <div className="container mx-auto px-8 py-16">
            //         <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Developer News</h2>
            //         <News />
            //     </div>
            // </section>

            // {/* Join us section */}
            // <section className="container mx-auto px-8 py-16">
            //     <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Become a Member</h2>
            //     <JoinUsForm />
            // </section>

            // {/* Footer */}
            // {/* You can include a Footer component here */}