import React from 'react'

const Experience = () => {

  const experiences = [
    { title: 'Trabajo 1', description: 'Descripción del trabajo 1', date: 'Fecha 1' },
    { title: 'Trabajo 2', description: 'Descripción del trabajo 2', date: 'Fecha 2' },
    // Agrega más experiencias laborales según sea necesario
  ];

  return (
    <div className='text-white mt-10 w-full px-5 sm:w-5/6 md:w-10/12 m-auto index-bg' id='experience'>
      <div className=''>
        <p className='text-color text-3xl sm:text-5xl mb-4'>Experience</p>
      </div>
      <section className="timeline-section">
        <div className="timeline-items">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">May 2023 - Sep 2023</div>
            <div className="timeline-content">
              <h3 className=' text-lg sm:text-xl'>Java Backend Developer (microservices)</h3>
              <p className='text-xs sm:text-sm text-[#c8c8c8]'>
                <span className=' text-sm sm:text-base font-bold text-[#d0d0d0]'>
                  Project Overview: Inventory Management System
                </span> <br />
                The project focuses on efficient management of stored products through microservices, enabling product registration and inventory updates with SKU codes. Key contributions include <span className='text-color'>API GATEWAY</span> management, <span className='text-color'>Eureka</span> server utilization, debugging with <span className='text-color'>Sleuth</span> and <span className='text-color'>Zipkin</span>, circuit breaker pattern implementation with <span className='text-color'>Resilience4j</span>, and robust security measures with <span className='text-color'>Keycloak</span>, <span className='text-color'>OAuth2</span>, and <span className='text-color'>Spring Security</span>. Monitoring is achieved through <span className='text-color'>Grafana</span> and <span className='text-color'>Prometheus</span>. <span className='text-color'>Docker</span> is employed for service containerization. Tools used encompass <span className='text-color'>Java 11</span>, <span className='text-color'>Eureka</span>, <span className='text-color'>Spring Security</span>, <span className='text-color'>Sleuth</span>, <span className='text-color'>MongoDB</span>, <span className='text-color'>MySQL</span>, and <span className='text-color'>Docker</span>.
              </p>



            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">Aug 2023 - Aug 2023</div>
            <div className="timeline-content">
              <h3 className=' text-lg sm:text-xl'>MERN Stack Developer</h3>
              <p className='text-xs sm:text-sm text-[#c8c8c8]'>
                <span className='text-sm sm:text-base font-bold text-[#d0d0d0]'>
                  Project Name: Blog System
                </span> <br />
                Significant contributions include developing queries in a user interface environment,
                building a <span className='text-color'>REST API</span> with <span className='text-color'>ExpressJS</span> and <span className='text-color'>MongoDB</span>, and creating a user-friendly
                graphical interface with <span className='text-color'>ReactJS</span>. Implemented security
                measures using <span className='text-color'>JWT</span> and included a "Forgot my password"
                function. Utilized <span className='text-color'>Cloudinary</span> for image uploads
                (PNG, JPG, WebP) and deployed the server on an <span className='text-color'>AWS EC2 instance </span>
                with <span className='text-color'>AWS EBS</span> storage handling. On the frontend,
                added dependencies like <span className='text-color'>Tailwind</span>, <span className='text-color'>MaterialUI</span>, <span className='text-color'>React-Select</span>, <span className='text-color'>Swiper</span>, and <span className='text-color'>Styled Components</span>. Implemented key actions such as blog creation, editing, deletion, and search engine management. Additional features include blog commenting, liking, user following, and a dashboard for information filtering, all managed with <span className='text-color'>Redux</span>.
              </p>


            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">May 2022 - Dic 2022</div>
            <div className="timeline-content">
              <h3 className=' text-lg sm:text-xl'>Java Backend Developer (microservices)</h3>
              <p className='text-xs sm:text-sm text-[#c8c8c8]'>
                <span className='text-sm sm:text-base font-bold text-[#d0d0d0]'>
                  Project Overview: Microservices-Based Blog System
                </span> <br />
                This project utilizes the microservices architecture with <span className='text-color'>Spring Boot</span>, focusing on a blog platform where users can register and create hotels. Users can provide ratings and comments, and there are admin roles with access to actions such as removing posts or users violating Terms and Conditions. Key contributions include implementing an <span className='text-color'>API Gateway</span>, multiple instances with load balancing, microservices communication via <span className='text-color'>OpenFeign</span>, circuit breaker implementation, <span className='text-color'>JWT</span> authentication, configuration management through a service and GitHub, and <span className='text-color'>Eureka</span> server for service registration. Tools used encompass <span className='text-color'>Spring Cloud</span>, <span className='text-color'>Spring Security</span>, <span className='text-color'>Resilience4j</span>, <span className='text-color'>Eureka</span>, <span className='text-color'>MySQL</span>, <span className='text-color'>MongoDB</span>, and <span className='text-color'>PostgreSQL</span>.
              </p>



            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">May 2022 - Dic 2022</div>
            <div className="timeline-content">
              <h3 className=' text-lg sm:text-xl'>NodeJS Developer</h3>
              <p className='text-xs sm:text-sm text-[#c8c8c8]'>
                <span className='text-sm sm:text-base font-bold text-[#d0d0d0]'>
                  Project name: Clients - Products
                </span> <br />
                This project consists of an <span className='text-color'>API with GraphQL</span> architecture designed so that customers registered in a store can buy products,
                these orders will be registered in a <span className='text-color'>MongoDB</span> database, as well as products and users, each user can have more than one
                order and their order can have more than one product, the API communication is achieved through an <span className='text-color'>Apollo server in NodeJS</span>, we implement security so that only those authenticated with <span className='text-color'>JWT</span> can do all the actions.
              </p>

            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">Aug 2018 - Dec 2023</div>
            <div className="timeline-content">
              <h3 className=' text-lg sm:text-xl'>Bachelor Degree in ComputerScience Engineering</h3>
              <p className='text-sm text-[#c8c8c8]'>Benemérita Universidad Autónoma de Puebla, MX</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">Aug 2014 - Jul 2017</div>
            <div className="timeline-content">
              <h3 className=' text-lg sm:text-xl'>Technical Bachelor Degree in Programming </h3>
              <p className=' text-sm text-[#c8c8c8]'>CETis No. 67 “Daniel Cabrera Rivera”, MX</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Experience