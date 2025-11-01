
import { v4 } from "uuid";

export const projectsAPI = [
    {
        id: v4(),
        name: 'App MCSV E-COMMERCE',
        description: 'E-commerce microservices architecture built with Spring Boot and Docker containers, featuring services for authentication, orders, and products. The system uses Grafana, Prometheus, and Zipkin for monitoring, metrics, and distributed tracing. It integrates with Amazon Cognito for authentication and AWS S3/Fargate for scalable deployment and storage.',
        linksRepo: [
            {
                id: v4(),
                type: 'Backend',
                link: 'https://github.com/Daniel-LA0303/pp-011-mcsv-ecommerce/tree/develop'
            }
        ],
        img: '/images/backend1.png',
        skills: [
            {
                id: v4(),
                name: 'Spring Boot',
                color: '#6DB33F'
            },

            {
                id: v4(),
                name: 'AWS',
                color: '#FF9900'
            },
            {
                id: v4(),
                name: 'Docker',
                color: '#2496ED'
            },
            {
                id: v4(),
                name: 'Grafana',
                color: '#F46800'
            },
            {
                id: v4(),
                name: 'Prometheus',
                color: '#E6522C'
            },
            {
                id: v4(),
                name: 'Zipkin',
                color: '#FF006D'
            }
        ]
    },
    {
        id: 2,
        name: 'Project Management in JavaEE',
        description: `Task and project management system built with JavaEE, JDBC, CDI and MYSQL deployed on Apache Tomcat.
        The application allows user registration, project creation, task management, and assignment of tasks to users. 
        Project authors can invite other users to collaborate, ensuring effective team coordination and task tracking.
        In the frontend we have views JSP and use JQuery to management tasks or actions like login, register etc.`,
        linksRepo: [
            {
                id: v4(),
                type: 'Backend',
                link: 'https://github.com/Daniel-LA0303/pp-008-javaee-pm'
            }
        ],
        img: '/images/backend2.png',
        skills: [
            {
                id: v4(),
                name: 'JavaEE',
                color: '#5382A1'
            },
            {
                id: v4(),
                name: 'JDBC',
                color: '#C5C5C5'
            },
            {
                id: v4(),
                name: 'CDI',
                color: '#FF5722'
            },
            {
                id: v4(),
                name: 'Apache Tomcat',
                color: '#F8DC75'
            },
            {
                id: v4(),
                name: 'MySQL',
                color: '#4479A1'
            },
            {
                id: v4(),
                name: 'HTML/CSS',
                color: '#E34F26'
            },
            {
                id: v4(),
                name: 'JSP / SERVLETS',
                color: '#E34F26'
            }
        ]


    },
    {
        id: v4(),
        name: 'CRM - MERN',
        description: `CRM system built with the MERN stack and Apollo GraphQL, using MongoDB as the database. 
        The application allows creating and managing clients, products, and orders. It also includes dashboards with charts to visualize 
        top-selling products and best-performing clients, enabling data-driven business decisions.`,
        linksRepo: [
            {
                id: v4(),
                type: 'FullStack',
                link: 'https://github.com/Daniel-LA0303/project_crm_graphql'
            }
        ],
        img: '/images/backend3.png',
        skills: [
            {
                id: v4(),
                name: 'MongoDB',
                color: '#47A248'
            },
            {
                id: v4(),
                name: 'Express.js',
                color: '#000000'
            },
            {
                id: v4(),
                name: 'React',
                color: '#61DAFB'
            },
            {
                id: v4(),
                name: 'Node.js',
                color: '#339933'
            },
            {
                id: v4(),
                name: 'Apollo GraphQL',
                color: '#311C87'
            },
            {
                id: v4(),
                name: 'JavaScript',
                color: '#F7DF1E'
            }
        ]
    },
    {
        id: v4(),
        name: 'My Blog',
        description: 'Social blogging platform built with the MERN stack, featuring user authentication, blog creation, editing, and publishing. Users can like, save, and comment on blogs, follow other users and categories, and reply to comments. The platform includes a smart dashboard for filtering content, profile management with photo upload, real-time chat via Socket.io, and integration with external services like Cloudinary and Mailtrap. The application is deployed on AWS and uses Material-UI for a responsive frontend.',
        linksRepo: [
            {
                id: v4(),
                type: 'Frontend',
                link: 'https://github.com/Daniel-LA0303/react_blog_frontend'
            },
            {
                id: v4(),
                type: 'Backend',
                link: 'https://github.com/Daniel-LA0303/node_blog_backend'
            },
        ],
        img: '/images/backend4.png',
        skills: [
            {
                id: v4(),
                name: 'MongoDB',
                color: '#47A248'
            },
            {
                id: v4(),
                name: 'Express.js',
                color: '#000000'
            },
            {
                id: v4(),
                name: 'React',
                color: '#61DAFB'
            },
            {
                id: v4(),
                name: 'Node.js',
                color: '#339933'
            },
            {
                id: v4(),
                name: 'Socket.io',
                color: '#010101'
            },
            {
                id: v4(),
                name: 'Material-UI',
                color: '#0081CB'
            },
            {
                id: v4(),
                name: 'Cloudinary',
                color: '#DE6A42'
            },
            {
                id: v4(),
                name: 'Mailtrap',
                color: '#FF5F00'
            },
            {
                id: v4(),
                name: 'AWS',
                color: '#FF9900'
            },
            {
                id: v4(),
                name: 'JavaScript',
                color: '#F7DF1E'
            }
        ]


    },
]
