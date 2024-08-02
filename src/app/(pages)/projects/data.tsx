import Image from 'next/image';
import insuranceImage from '@/assets/images/insurance.png';
import deliveryImage from '@/assets/images/delivery.png';
import collaborationImage from '@/assets/images/collaboration.png';
import logisticsImage from '@/assets/images/logistics.png';
import { IProject } from './types';

export const PROJECTS: IProject[] = [
    {
        title: 'Insurance Management Platform',
        jobTitle: 'Senior Software Developer',
        date: 'Jul 2021–present',
        image: (
            <Image src={insuranceImage} alt="Insurance Management Platform" />
        ),
        responsibilities: [
            'Implement responsive web interfaces using React framework.',
            'Develop and maintain high-quality, reusable, and scalable code.',
            'Collaborate with UI/UX designers to refine and enhance the user experience.',
            'Implement features that allow users to easily navigate their insurance plans and find medical care.',
            'Develop unit and integration tests to ensure the reliability and functionality of the application.',
            'Monitor the performance of the platform and make adjustments to improve speed and usability.',
            'Lead a team of developers, guiding them in software development best practices.',
            'Ensure the platform adapts to changing regulations and industry standards.',
        ],
        skills: [
            'Single-Page Applications',
            'Modular Architecture Design',
            'Independent Deployment',
            'Agile & Scrum',
            'Cross-Browser Development',
            'Distributed Systems',
            'Pair Programming',
            'Extreme Programming',
            'Coding Standards & Collective Code Ownership',
            'HTML5',
            'ES5',
            'ES+',
            'CSS2.1/CSS3',
            'React',
            'Redux',
            'Sass',
            'Google Maps',
            'Typescript',
            'Jenkins',
            'ESLint',
            'WebStorm',
            'Insomnia',
            'Jest',
        ],
        description: `Worked on a member platform for a leading US insurance company designed to enable members to manage their insurance plans and find appropriate medical care easily. The platform serves as a comprehensive tool for users to access all their health plan information and manage their health coverage effectively.`,
    },
    {
        title: 'System for Optimizing Delivery Process',
        jobTitle: 'Senior Software Developer',
        date: 'Feb 2018 - Jun 2021',
        image: (
            <Image
                src={deliveryImage}
                alt="System for Optimizing Delivery Process"
            />
        ),
        responsibilities: [
            'Develop and enhance a system designed to optimize delivery services using a combination of technologies such as React, React Native, and Node.js.',
            'Work on web and mobile applications to ensure seamless user experience for both consumers and businesses.',
            'Implement and maintain a robust parcel tracking system that updates users in real-time about their package status.',
            'Optimize the performance of the system to handle high user traffic and data processing using Google Cloud Platform.',
            'Provide ongoing technical support, troubleshoot issues, and ensure continuous system improvement.',
            'Work within an agile development team, participating in sprints, stand-ups, and reviews.',
            'Lead a team of developers, guiding them in software development best practices.',
            'Collaborate with cross-functional teams, including product managers and UX designers, to meet project goals and timelines.',
        ],
        skills: [
            'Single-Page Applications',
            'Mobile Web Development',
            'Modular Architecture Design',
            'Independent Deployment',
            'Distributed Systems',
            'Agile & Scrum',
            'Kanban',
            'Coding Standards & Collective Code Ownership',
            'HTML5',
            'ES5',
            'ES+',
            'CSS2.1/CSS3',
            'JavaScript',
            'React',
            'Redux',
            'Less',
            'Material UI',
            'Bootstrap',
            'Node.js',
            'MySQL',
            'Firebase',
            'Google Cloud Platform',
            'Jenkins',
            'ESLint',
            'GIT',
            'Swagger',
            'WebStorm',
            'Jest',
        ],
        description: `Contributed to a comprehensive system aimed at optimizing delivery services for both consumers and businesses for a UK company. The system included parcel tracking, web and mobile applications, a depot process management tool, and a B2B partnership management tool, enhancing efficiency across the delivery ecosystem.`,
    },
    {
        title: 'Collaboration Tool Development',
        jobTitle: 'Software Developer',
        date: 'Jun 2017 - Feb 2018',
        image: (
            <Image
                src={collaborationImage}
                alt="Collaboration Tool Development"
            />
        ),
        responsibilities: [
            'Design and implement user interfaces using JavaScript and Redux to provide a seamless and responsive experience.',
            'Optimize the application for maximum speed and scalability.',
            'Design and develop RESTful services and APIs for integration between the front end and back end systems.',
            'Participate in daily stand-ups, sprint planning, and other Agile ceremonies.',
            'Optimize the application for better usability and interaction for users.',
            'Develop and maintain server-side logic using Node.js.',
        ],
        skills: [
            'Single-Page Applications',
            'Independent Deployment',
            'Agile & Scrum',
            'HTML5',
            'ES5',
            'ES+',
            'CSS2.1/CSS3',
            'JavaScript',
            'React',
            'Redux',
            'Material UI',
            'AWS',
            'GitLab',
            'ESLint',
            'Git',
            'WebStorm',
            'Distributed Systems',
        ],
        description: `Played a key role in the development of a collaboration tool for a US company aimed at improving communication and management within small teams. The project focused on providing services and best practices to enhance team productivity and collaboration.`,
    },
    {
        title: 'Application for Optimizing Logistics Processes',
        jobTitle: 'Software Developer',
        date: 'Mar 2016 - Jun 2017',
        image: (
            <Image
                src={logisticsImage}
                alt="Application for Optimizing Logistics Processes"
            />
        ),
        responsibilities: [
            'Design and develop user-friendly, responsive front-end interfaces using React.',
            'Collaborate with designers and senior developers to translate visual concepts into functional online experiences.',
            'Debug and resolve technical issues across the application layers.',
            'Utilize version control systems such as Git to manage code changes and collaborate with other team members.',
            'Collaborate with project managers and other developers to meet project timelines and deliverables.',
            'Communicate effectively with team members and other stakeholders to ensure alignment and address any discrepancies in technical implementation.',
        ],
        skills: [
            'Single-Page Applications',
            'Cross-Browser Development',
            'Distributed Systems',
            'Agile & Scrum',
            'HTML5',
            'ES5',
            'ES+',
            'CSS2.1/CSS3',
            'jQuery',
            'jQuery UI',
            'Backbone.js,',
            'React',
            'Redux',
            'MobX',
            'Less',
            'Material UI',
            'Bootstrap',
            'Chart.js',
            'Google Maps',
            'JavaScript',
            'Typescript',
            'MySQL',
            'Jenkins',
            'GIT',
        ],
        description: `Developed an application for a German company designed to optimize logistics processes. The application consisted of three components: logistics network optimization (LNO), a layout editor for warehouse process optimization, and a 3D layout for constructing models of the warehouse layouts.`,
    },
];
