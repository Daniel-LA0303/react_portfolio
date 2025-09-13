import { faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Contact = () => {

  const numeroWhatsApp = '2212394323'; 

  const abrirWhatsApp = () => {
    window.open(`https://wa.me/${numeroWhatsApp}`, '_blank');
  };

  return (
    <section className="w-full px-5 sm:w-5/6 md:w-10/12 m-auto index-bg" id='contact'>
      <div className="py-8 lg:py-16 px-4 mx-auto ">
          <h2 className="text-color text-3xl sm:text-5xl mb-4">Contact me</h2>
          <p className="mb-8 lg:mb-16 font-light  text-gray-500 dark:text-gray-400 sm:text-xl">Contact me through the following media. </p>

          <div className=" ">
            <div className='mb-2'>        
              <a 
                className='cursor-pointer'
                href="https://www.linkedin.com/in/luis-alberto-zacarias-daniel-137118209/"
                target='_blank'
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <img src="/images/linkedin.png" width={20}  alt="" /> 
                <p className=' ml-2 text-white'>Linkedin</p>
              </a>
              
            </div>

            <div className='mb-2'>

            <a
              className='cursor-pointer'
              href="https://github.com/Daniel-LA0303"
              target='_blank'
              style={{ display: 'flex', alignItems: 'center' }}
            >   
                <img src="/images/GITHUB.png" width={20} alt="" />
                <p className='ml-2 text-white'>Github</p>
            </a>

                
            </div>

            <div className='mb-2 cursor-pointer'>
              <a 
                href="mailto:03lazd030399@gmail.com"
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <FontAwesomeIcon icon={faMailBulk } className='text-white' />
                <p className=' ml-2 text-white'>03lazd030399@gmail.com</p>
              </a>

            </div>

            <div className='flex justify-start mb-2 items-center cursor-pointer' onClick={abrirWhatsApp}>
              <FontAwesomeIcon icon={faPhone} className='text-white' />
              <p className=' ml-2 text-white'>Phone</p>
            </div>
            

        
      </div>

      </div>
    </section>
  )
}

export default Contact