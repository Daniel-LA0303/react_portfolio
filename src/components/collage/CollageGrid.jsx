import { faCode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const CollageGrid = () => {
    return (
        <div class="w-full min-h-screen">
            <div class="mx-auto py-12">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                    <div class="relative group overflow-hidden rounded-lg col-span-1 md:col-span-2 md:row-span-2">
                        <img
                            alt="Interactive E-commerce Site"
                            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            src="/images/project_frontend3.png" />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                        <div class="absolute inset-0 p-6 flex flex-col justify-end">
                            <h3 class="text-2xl font-bold text-white">App Restaurant</h3>
                            <p class="text-white/90 mt-2 text-base">The project simulates a dashboard of a coffee shop, the adminitrador can execute CRUD actions on products and orders.</p>
                            <div className='flex mt-3'>
                                <a
                                    href='https://github.com/Daniel-LA0303/coffe_app'
                                    target="_blank"
                                    className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg h-9 px-6 bg-white/20 backdrop-blur-sm text-white text-base font-bold leading-normal tracking-[0.015em] transition-transform hover:scale-105 hover:bg-white/30 cursor-pointer">
                                    <FontAwesomeIcon icon={faCode} />
                                    View Code
                                </a>
                                <a
                                    href='https://magnificent-lamington-969efd.netlify.app'
                                    target="_blank"
                                    className="flex ml-2 w-full sm:w-auto items-center justify-center gap-2 rounded-lg h-9 px-6 bg-white/20 backdrop-blur-sm text-white text-base font-bold leading-normal tracking-[0.015em] transition-transform hover:scale-105 hover:bg-white/30 cursor-pointer">
                                    <FontAwesomeIcon icon={faCode} />
                                    View Demo
                                </a>
                            </div>

                        </div>
                    </div>
                    <div class="relative group overflow-hidden rounded-lg col-span-1">
                        <img
                            alt="Dynamic Portfolio Showcase"
                            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            src="images/project_frontend5.png" />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                        <div class="absolute inset-0 p-6 flex flex-col justify-end">
                            <h3 class="text-xl font-bold text-white">Weather App</h3>
                            <p class="text-white/90 mt-1 text-sm">With the help of the Open Weather api you can make a query form to cities that the api allows.</p>
                            <div className='flex mt-3'>
                                <a
                                    href='https://github.com/Daniel-LA0303/weather'
                                    target="_blank"
                                    className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg h-9 px-6 bg-white/20 backdrop-blur-sm text-white text-base font-bold leading-normal tracking-[0.015em] transition-transform hover:scale-105 hover:bg-white/30 cursor-pointer">
                                    <FontAwesomeIcon icon={faCode} />
                                    View Code
                                </a>
                                <a
                                    href='https://dulcet-muffin-eeabc4.netlify.app/'
                                    target="_blank"
                                    className="flex ml-2 w-full sm:w-auto items-center justify-center gap-2 rounded-lg h-9 px-6 bg-white/20 backdrop-blur-sm text-white text-base font-bold leading-normal tracking-[0.015em] transition-transform hover:scale-105 hover:bg-white/30 cursor-pointer">
                                    <FontAwesomeIcon icon={faCode} />
                                    View Demo
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="relative group overflow-hidden rounded-lg col-span-1">
                        <img
                            alt="Modern Recipe App"
                            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            src="images/project_frontend4.png" />
                        <div class="absolute inset-0 bg-gradient-to-t from-white/80 via-white/40 to-transparent dark:from-black/80 dark:via-black/50"></div>
                        <div class="absolute inset-0 p-6 flex flex-col justify-end">
                            <h3 class="text-xl font-bold text-gray-800 dark:text-white">My first CRUD</h3>
                            <p class="text-gray-700 dark:text-white/90 mt-1 text-sm">In this project I present my first static CRUD work with ReactJS and Bootstrap.</p>

                            <div className='flex mt-3'>
                                <a
                                    href='https://github.com/Daniel-LA0303/siempe-CRUD'
                                    target="_blank"
                                    className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg h-9 px-6 bg-white/20 backdrop-blur-sm text-white text-base font-bold leading-normal tracking-[0.015em] transition-transform hover:scale-105 hover:bg-white/30 cursor-pointer">
                                    <FontAwesomeIcon icon={faCode} />
                                    View Code
                                </a>
                                <a
                                    href='https://glittering-heliotrope-f4aeee.netlify.app/'
                                    target="_blank"
                                    className="flex ml-2 w-full sm:w-auto items-center justify-center gap-2 rounded-lg h-9 px-6 bg-white/20 backdrop-blur-sm text-white text-base font-bold leading-normal tracking-[0.015em] transition-transform hover:scale-105 hover:bg-white/30 cursor-pointer">
                                    <FontAwesomeIcon icon={faCode} />
                                    View Demo
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="relative group overflow-hidden rounded-lg col-span-1 md:col-span-1">
                        <img
                            alt="Responsive Travel Blog"
                            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            src="images/project_frontend1.png" />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                        <div class="absolute inset-0 p-6 flex flex-col justify-end">
                            <h3 class="text-xl font-bold text-white">FFMI Calculator</h3>
                            <p class="text-white/90 mt-1 text-sm">The project is an FFMI calculator in which a user-friendly UI is worked.</p>

                            <div className='flex mt-3'>
                                <a
                                    href='https://github.com/Daniel-LA0303/FFMI'
                                    target="_blank"
                                    className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg h-9 px-6 bg-white/20 backdrop-blur-sm text-white text-base font-bold leading-normal tracking-[0.015em] transition-transform hover:scale-105 hover:bg-white/30 cursor-pointer">
                                    <FontAwesomeIcon icon={faCode} />
                                    View Code
                                </a>
                                <a
                                    href='https://kaleidoscopic-blini-48082b.netlify.app/'
                                    target="_blank"
                                    className="flex ml-2 w-full sm:w-auto items-center justify-center gap-2 rounded-lg h-9 px-6 bg-white/20 backdrop-blur-sm text-white text-base font-bold leading-normal tracking-[0.015em] transition-transform hover:scale-105 hover:bg-white/30 cursor-pointer">
                                    <FontAwesomeIcon icon={faCode} />
                                    View Demo
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="relative group overflow-hidden rounded-lg col-span-1 md:col-span-2">
                        <img
                            alt="Personal Finance Tracker"
                            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            src="images/project_frontend2.png" />
                        <div class="absolute inset-0 bg-gradient-to-t from-white/80 via-white/40 to-transparent dark:from-black/80 dark:via-black/50"></div>
                        <div class="absolute inset-0 p-6 flex flex-col justify-end">
                            <h3 class="text-xl font-bold text-gray-800 dark:text-white">App Movies</h3>
                            <p class="text-gray-700 dark:text-white/90 mt-1 text-sm">This project was developed with a movie api, it works with slider and css libraries.</p>

                            <div className='flex mt-3'>
                                <a
                                    href='https://github.com/Daniel-LA0303/appMovies'
                                    target="_blank"
                                    className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg h-9 px-6 bg-white/20 backdrop-blur-sm text-white text-base font-bold leading-normal tracking-[0.015em] transition-transform hover:scale-105 hover:bg-white/30 cursor-pointer">
                                    <FontAwesomeIcon icon={faCode} />
                                    View Code
                                </a>
                                <a
                                    href='https://stellular-marigold-be1330.netlify.app/'
                                    target="_blank"
                                    className="flex ml-2 w-full sm:w-auto items-center justify-center gap-2 rounded-lg h-9 px-6 bg-white/20 backdrop-blur-sm text-white text-base font-bold leading-normal tracking-[0.015em] transition-transform hover:scale-105 hover:bg-white/30 cursor-pointer">
                                    <FontAwesomeIcon icon={faCode} />
                                    View Demo
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CollageGrid
