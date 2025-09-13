import React, { useState, useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Button from '../Btn/Button';


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
      cursorChar: '|',
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          <div className='pt-10'>
            <p className='text-color text-2xl md:text-3xl mb-10'>I'm Luis Alberto</p>
            <span className=' text-xl md:text-3xl lg:text-5xl' ref={typedRef} />
            <div className="my-10">
              <Button />
            </div>
          </div>
          <div className=' mx-auto w-60 md:w-full'>

            <img src="/images/logo.gif" alt="" className="" />
          </div>
        </div>
      </div>



      <div className='bg-black-card w-full py-10'>
        <div className='w-full px-5 sm:w-5/6 md:w-10/12 m-auto index-bg'>
          <div className='grid grid-cols-1' id="about-me">
            <div className=' w-full md:w-4/6'>
              {/* <p className=' text-xs sm:text-lg mb-5'>Introduction</p> */}
              <p className='text-color text-3xl sm:text-5xl mb-4'>About Me</p>
              <p className=' text-sm sm:text-xl'>I am Mr. Luis Alberto, I am about to graduate with a degree in <span className='text-color font-bold text-base sm:text-lg'>Computer Science Engineering.</span> Currently,
                I am in my final semester of the program. I have experience as a backend programmer in <span className='text-color font-bold text-base sm:text-lg'>Java and Node.js. </span>
                Additionally, I am working on freelance projects involving microservices using <span className='text-color font-bold text-base sm:text-lg'>Spring Boot</span>, and I have experience in <span className='text-color font-bold text-lg'>cloud computing.</span>
              </p>
            </div>
            <div className='w-full'>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default About;
