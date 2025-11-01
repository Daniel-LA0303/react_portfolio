import React, { useState, useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Button from '../Btn/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faBug, faCloud, faDesktop, faServer, faShield } from '@fortawesome/free-solid-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons/faDatabase';


const About = () => {
  const typedRef = useRef(null);


  useEffect(() => {
    const options = {
      strings: ['NodeJS Developer', 'Java Developer', 'Backend Developer'],
      typeSpeed: 100,
      backSpeed: 50,
      startDelay: 500,
      backDelay: 500,
      showCursor: true,
      // cursorChar: '|',
      loop: false,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className='  text-white' >
      <div className='w-full sm:w-5/6 md:w-10/12 m-auto index-bg h-screen flex justify-center items-center'>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center w-full">
          <div className='pt-10 flex flex-col justify-center items-center'>
            <p className='text-color text-2xl md:text-3xl mb-10 '>I'm Luis Alberto</p>
            <span className=' text-xl md:text-3xl lg:text-5xl' ref={typedRef} />
            <div className="my-10">
              <Button />
            </div>
          </div>

          <div className='w-full text-color'>
            <div className="w-full">
              <div className="relative w-full" style={{ paddingBottom: '100%' }}>
                <div className="absolute inset-0">
                  <div className="absolute inset-0 animate-float-delay-2 opacity-20">
                    <svg
                      className="h-full w-full"
                      fill="none"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      viewBox="0 0 400 400"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line className="stroke-primary" x1="50" x2="180" y1="50" y2="150" />
                      <line className="stroke-primary" x1="180" x2="120" y1="150" y2="280" />
                      <line className="stroke-primary" x1="120" x2="250" y1="280" y2="350" />
                      <line className="stroke-primary" x1="250" x2="350" y1="350" y2="100" />
                      <line className="stroke-primary" x1="350" x2="220" y1="100" y2="50" />
                      <line className="stroke-primary" x1="220" x2="50" y1="50" y2="50" />
                    </svg>
                  </div>

                  <div className="absolute left-[10%] top-[10%] h-8 w-8 animate-float-minor-delay-1 text-primary/50 dark:text-primary/30">
                    <span className="text-4xl font-bold">{'{}'}</span>
                  </div>

                  <div className="absolute bottom-[15%] right-[10%] h-8 w-8 animate-float-minor-delay-2 text-primary/50 dark:text-primary/30">
                    <span className="text-4xl font-bold">{'()'}</span>
                  </div>

                  <div className="absolute bottom-[5%] left-[25%] h-8 w-8 animate-float-minor text-primary/50 dark:text-primary/30">
                    <span className="text-4xl font-bold">&lt;/&gt;</span>
                  </div>
                  <div className="absolute bottom-[60%] right-[55%] h-4 w-4 rounded-full bg-blue-500 animate-pulse"></div>
                  <div className="absolute left-[15%] top-[20%] h-4 w-4 rounded-full bg-blue-500 animate-pulse"></div>
                  <div className="absolute left-[40%] top-[50%] h-4 w-4 rounded-full bg-blue-500 animate-pulse"></div>
                  <div className="absolute right-[10%] top-[30%] h-4 w-4 rounded-full bg-blue-500 animate-pulse"></div>
                  <div className="absolute bottom-[20%] left-[5%] h-4 w-4 rounded-full bg-blue-500 animate-pulse"></div>
                  <div className="absolute bottom-[40%] right-[5%] h-4 w-4 rounded-full bg-blue-500 animate-pulse"></div>

                  <div className="group absolute left-[40%] top-[10%] flex h-24 w-24 animate-float items-center justify-center rounded-full shadow-lg border-blue-500 border-4">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full">
                      <span className="material-symbols-outlined text-4xl text-primary transition-transform duration-300 group-hover:scale-110">
                        <FontAwesomeIcon icon={faServer} />
                      </span>
                    </div>
                  </div>

                  <div className="group absolute left-[50%] top-[40%] flex h-24 w-24 animate-float items-center justify-center rounded-full shadow-lg border-blue-500 border-4">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full">
                      <span className="material-symbols-outlined text-4xl text-primary transition-transform duration-300 group-hover:scale-110">
                        <FontAwesomeIcon icon={faDesktop} />
                      </span>
                    </div>
                  </div>

                  <div className="group absolute left-[20%] top-[40%] flex h-24 w-24 animate-float items-center justify-center rounded-full shadow-lg border-blue-500 border-4">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full">
                      <span className="material-symbols-outlined text-4xl text-primary transition-transform duration-300 group-hover:scale-110">
                        <FontAwesomeIcon icon={faCloud} />
                      </span>
                    </div>
                  </div>

                  <div className="group absolute bottom-[10%] left-[35%] flex h-20 w-20 animate-float-delay-1 items-center justify-center rounded-full shadow-lg border-blue-500 border-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full">
                      <span className="material-symbols-outlined text-3xl text-primary transition-transform duration-300 group-hover:scale-110">
                        <FontAwesomeIcon icon={faDatabase} />
                      </span>
                    </div>
                  </div>

                  <div className="group absolute right-[15%] top-[15%] flex h-20 w-20 animate-float-delay-2 items-center justify-center rounded-full shadow-lg border-blue-500 border-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full">
                      <span className="material-symbols-outlined text-3xl text-primary transition-transform duration-300 group-hover:scale-110">
                        <FontAwesomeIcon icon={faShield} />
                      </span>
                    </div>
                  </div>

                  <div className="group absolute bottom-[30%] right-[20%] flex h-24 w-24 animate-float items-center justify-center rounded-full shadow-lg border-blue-500 border-4">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full">
                      <span className="material-symbols-outlined text-4xl text-primary transition-transform duration-300 group-hover:scale-110">
                        <FontAwesomeIcon icon={faBug} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="bg-black-card w-full py-20">
        <div className="w-full px-5 sm:w-5/6 md:w-10/12 m-auto index-bg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="about-me">
            {/* Texto principal */}
            <div className="w-full ">
              <p className="text-color text-3xl sm:text-5xl mb-4">About Me</p>
              <div className='text-base sm:text-xl'>
                <p className="">
                  I'm Luis Alberto, a{" "}
                  <span className="text-color font-bold text-base sm:text-lg">
                    Computer Science graduate
                  </span>{" "}
                  completing my professional certification process. With professional backend development experience in{" "}
                  <span className="text-color font-bold text-base sm:text-lg">
                    Java and Node.js
                  </span>
                  , I specialize in building microservices architectures using{" "}
                  <span className="text-color font-bold text-base sm:text-lg">
                    Spring Boot
                  </span>{" "}
                  through freelance projects, and have hands-on experience in{" "}
                  <span className="text-color font-bold text-base sm:text-lg">
                    cloud computing
                  </span>{" "}
                  for scalable deployments.
                </p>
              </div>
            </div>

            {/* Mini cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Backend */}
              <div className="flex items-start space-x-3 p-4 rounded-2xl bg-[#1E1E1E] shadow-md">
                <FontAwesomeIcon icon={faServer} className="text-color w-8 h-8 flex-shrink-0" />
                {/* className="text-color w-8 h-8 flex-shrink-0" /> */}
                <div>
                  <p className="font-bold text-color">Backend</p>
                  <p className="text-xs sm:text-sm text-gray-400">
                    APIs REST, microservices, Java & Node.js.
                  </p>
                </div>
              </div>

              {/* Frontend */}
              <div className="flex items-start space-x-3 p-4 rounded-2xl bg-[#1E1E1E] shadow-md">
                <FontAwesomeIcon icon={faDesktop} className="text-color w-8 h-8 flex-shrink-0" />
                <div>
                  <p className="font-bold text-color">Frontend</p>
                  <p className="text-xs sm:text-sm text-gray-400">
                    React, UI/UX responsive, modern design.
                  </p>
                </div>
              </div>

              {/* AWS */}
              <div className="flex items-start space-x-3 p-4 rounded-2xl bg-[#1E1E1E] shadow-md sm:col-span-2">
                <FontAwesomeIcon icon={faCloud} className="text-color w-8 h-8 flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center flex-wrap gap-2 mb-1">
                    <p className="font-bold text-color">AWS (In Progress)</p>

                  </div>
                  <p className="text-xs sm:text-sm text-gray-400">
                    Cloud computing, deployments & scaling.
                  </p>
                  <div className='flex items-center'>
                    <a
                      href="https://www.credly.com/badges/41369fc0-6569-4f0f-b940-07e436d0671b/public_url"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center h-10 gap-1 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black px-2 py-1 rounded-lg text-xs font-bold transition-all duration-200 hover:scale-105 shadow-md"
                    >
                      <FontAwesomeIcon icon={faAward} className="w-3 h-3" />
                      Check Certificate AWS Academy
                    </a>

                    <img src="images/aws.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
