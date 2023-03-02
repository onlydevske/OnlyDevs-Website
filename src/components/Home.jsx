import React from 'react'
import Header from './Header'
import Stories from './Stories'
import News from './News'
import JoinUsForm from './JoinUsForm'

export default function Home() {
    return (
        <div>
        <section className="black-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"><strong>OnlyDevs</strong></h1>
                    <p className="mb-8 leading-relaxed">Looking for a dev community that's actually worth your time? Look no further than OnlyDevs, the hottest club in town for tech enthusiasts. We've got everything you need to up your coding game, minus the boring lectures and long-winded discussions.
                    </p>
                    <p className="mb-8 leading-relaxed">
                        Join our community and you'll finally have a place to connect with like-minded techies, trade code snippets, and maybe even pick up a few jokes (yes, we actually have a sense of humor). Plus, you'll never have to suffer through another dull meetup again – our events are the stuff legends are made of.
                        <p>
                        
                       </p>
                        Come have some fun with <strong>OnlyDevs</strong>. Your coding skills will thank you.
                    </p>
                    <p className="text-sm mt-2 black-500 mb-8 w-full"><strong>
                            So what are you waiting for?
                        </strong></p>
                    <div className="flex lg:flex-row md:flex-col">
                        <JoinUsForm/>
                        {/* <button className=" bg-yellow-500  inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                            <span className="ml-4 flex items-center flex-col leading-none">
                                <span className="title-font black-500  font-bold">Join US</span>
                            </span>
                        </button> */}
                        <button className=" bg-yellow-500  inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none">
                            <span className="ml-4 flex items-centerflex-col leading-none">
                                <span className="title-font black-500  font-bold">Our Events</span>
                            </span>
                        </button>
                    </div>
                    
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <div className="flex flex-row">
                        <div className="w-1/2">
                            <img className="object-cover object-center rounded" alt="hero1" src="https://dummyimage.com/180x150" />
                        </div>
                        <div className="w-1/2">
                            <img className="object-cover object-center rounded" alt="hero2" src="https://dummyimage.com/180x150" />
                        </div>
                        <div className="w-1/2">
                            <img className="object-cover object-center rounded" alt="hero3" src="https://dummyimage.com/180x150" />
                        </div>
                        <div className="w-1/2">
                            <img className="object-cover object-center rounded" alt="hero4" src="https://dummyimage.com/180x150" />
                        </div>
                    </div>
                </div>
            </div>
           
        </section>
        <News/>
        </div>
    )
}
