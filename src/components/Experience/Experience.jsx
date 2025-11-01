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
            <div className="timeline-date">Jan 2025 - May 2025</div>
            <div className="timeline-content">
              <h3 className="text-lg sm:text-xl">Full Stack Developer</h3>
              <p className="text-xs sm:text-sm text-[#c8c8c8]">
                Worked as a <span className="text-color">Full Stack Developer</span>, participating in the complete development cycle —
                from creating <span className="text-color">backend services</span> to integrating them into the
                <span className="text-color"> frontend</span>. I mainly worked with <span className="text-color">NestJS</span> for
                implementing <span className="text-color">APIs</span> and <span className="text-color">microservices</span>, although
                I also contributed to projects in <span className="text-color">Java (Spring Framework)</span>, leveraging my
                specialization in this technology. My responsibilities included integrating
                <span className="text-color"> AI agents and APIs</span> such as <span className="text-color">OpenAI</span> to enhance
                the user experience and application functionality. I managed data mapping and consumption in
                <span className="text-color"> MySQL</span> using <span className="text-color">Sequelize ORM</span>, and created new
                tables when needed. The developed microservices were deployed using
                <span className="text-color"> Docker containers</span> in <span className="text-color">AWS</span> environments,
                where I performed connection, update, and deployment tasks through
                <span className="text-color"> MobaXterm</span>, ensuring proper integration of new versions. Additionally, I handled
                <span className="text-color"> bug fixing</span>, improved functionalities, and integrated services in
                <span className="text-color"> Angular</span>, maintaining smooth communication across all system layers.
                Tools used included <span className="text-color">NestJS</span>, <span className="text-color">Angular</span>,
                <span className="text-color">Java (Spring)</span>, <span className="text-color">JPA</span>,
                <span className="text-color">MySQL</span>, <span className="text-color">Sequelize</span>, and
                <span className="text-color">Docker</span>.
              </p>
            </div>
          </div>



          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">Jan 2024 - Jun 2024</div>
            <div className="timeline-content">
              <h3 className="text-lg sm:text-xl">Backend Developer Jr</h3>
              <span className=' text-sm sm:text-base font-bold text-[#d0d0d0]'>
                Project Overview: Citas
              </span> <br />
              <p className="text-xs sm:text-sm text-[#c8c8c8]">
                As a <span className="text-color">Backend Developer</span>, I actively participated in the full development cycle of
                <span className="text-color"> REST</span> and <span className="text-color"> SOAP</span> services using
                <span className="text-color"> Java</span>. My work involved designing and implementing
                <span className="text-color"> APIs</span>, consuming external services, and resolving bugs reported during testing
                and production. I collaborated daily with the frontend team to integrate new functionalities, ensuring consistent
                communication between layers. To guarantee quality and maintainability, I developed comprehensive
                <span className="text-color"> unit tests</span> using <span className="text-color"> JUnit5</span> and documented all
                services with <span className="text-color"> sequence</span> and <span className="text-color"> use case diagrams</span>.
                Additionally, I optimized <span className="text-color"> SQL queries</span>, managed
                <span className="text-color"> transactions</span> and <span className="text-color"> concurrency</span> with
                <span className="text-color"> JPA</span>, and supported architectural improvements to enhance scalability and performance.
                Tools used included <span className="text-color"> Java 8</span>, <span className="text-color"> JPA</span>,
                <span className="text-color"> SVN</span>, <span className="text-color"> JUnit5</span>,
                <span className="text-color"> WebLogic</span>, <span className="text-color"> OracleDB</span>,
                <span className="text-color"> Jenkins</span>, and <span className="text-color"> SonarQube</span>.
              </p>
            </div>
          </div>



          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">May 2023 - Sep 2023</div>
            <div className="timeline-content">
              <h3 className=' text-lg sm:text-xl'>Java Backend Developer (microservices)</h3>
              <p className='text-xs sm:text-sm text-[#c8c8c8]'>
                <span className=' text-sm sm:text-base font-bold text-[#d0d0d0]'>
                  Project Overview: E-commerce
                </span> <br />
                The project focuses on efficient management of stored products through microservices,
                enabling product registration and inventory updates with SKU codes.
                The functionalities are: registration of products, categories and inventories, users can register and make orders which are registered if the transaction between microservices is fulfilled
                Key contributions include
                <span className='text-color'> API GATEWAY</span> management, <span className='text-color'>Eureka</span> server utilization,
                debugging with <span className='text-color'>Sleuth</span> and <span className='text-color'>Zipkin</span>, <span className='text-color'>Circuit Breaker</span> pattern
                implementation with <span className='text-color'>Resilience4j</span>, security measures with
                <span className='text-color'> JWT</span> and filter with API Gateway and <span className='text-color'>Spring Security</span>.
                Communication between microservices with <span className='text-color'>OpenFeign</span>,
                Monitoring is achieved through <span className='text-color'>Grafana</span> and <span className='text-color'>Prometheus</span>. <span className='text-color'>Docker</span> is employed for service containerization. Tools used encompass
                <span className='text-color'> Java 17</span>, <span className='text-color'>Eureka</span>, <span className='text-color'>Spring Security</span>, <span className='text-color'>Spring Cloud</span>
                <span className='text-color'>Sleuth</span>, <span className='text-color'>Postgresql</span>, <span className='text-color'>MySQL</span>,
                and deployment with <span className='text-color'>Docker</span>.
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
                (PNG, JPG, WebP) and deployed the server on an <span className='text-color'>AWS EC2 instance.</span>
                On the frontend, added dependencies like <span className='text-color'>Tailwind</span>, <span className='text-color'>MaterialUI</span>, <span className='text-color'>React-Select</span>, <span className='text-color'>Swiper</span>. Implemented key actions such as blog creation, editing, deletion, and search engine management. Additional features include blog commenting, replies in comments, liking, user following, and a dashboard for information filtering, all managed with <span className='text-color'>Redux</span>.
                Use <span className='text-color'>Socket.IO</span> to implemment <span className='text-color'>Websockets</span> in a dynamic chat, all registered users can chat with another users.
              </p>


            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">May 2022 - Dic 2022</div>
            <div className="timeline-content">
              <h3 className=' text-lg sm:text-xl'>JavaEE developer</h3>
              <p className='text-xs sm:text-sm text-[#c8c8c8]'>
                <span className='text-sm sm:text-base font-bold text-[#d0d0d0]'>
                  Project Overview: Project Management in JavaEE
                </span> <br />
                Task and project management system built with <span className='text-color'>JavaEE</span>, <span className='text-color'>JDBC</span>, <span className='text-color'>CDI</span> and <span className='text-color'>MYSQL</span> deployed on <span className='text-color'>Apache Tomcat</span>.
                The application allows user registration, project creation, task management, and assignment of tasks to users.
                Project authors can invite other users to collaborate, ensuring effective team coordination and task tracking.
                Users have to finish their taks, nobody can finish tasks of another user, author can delete users from project if a user
                don't finish his tasks. In the frontend we have views <span className='text-color'>JSP</span> and use <span className='text-color'>JQuery</span> to management tasks or actions like login, register etc, we
                use <span className='text-color'>Tailwind</span> as part of styles.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">May 2022 - Dic 2022</div>
            <div className="timeline-content">
              <h3 className=' text-lg sm:text-xl'>Express Developer</h3>
              <p className='text-xs sm:text-sm text-[#c8c8c8]'>
                <span className='text-sm sm:text-base font-bold text-[#d0d0d0]'>
                  Project name: CRM
                </span> <br />
                This project consists of an <span className='text-color'>API with GraphQL</span> architecture designed so that customers registered in a store can buy products,
                these orders will be registered in a <span className='text-color'>MongoDB</span> database with <span className="text-color">Mongoose</span> as ORM, as well as products and users, each user can have more than one
                order and their order can have more than one product, the API communication is achieved through an <span className='text-color'>Apollo server in NodeJS</span>, we implement security so that only those authenticated with <span className='text-color'>JWT</span> can do all the actions.
                It use ReactJs in the frontend with library tailwind to styles and use JWT to authentication
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