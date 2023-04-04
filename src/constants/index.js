import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    Express,
    mysql,
    vscode,
    git,
    C,
    Cplus,
    Python,
    Java,
    Firebase,
    Realdeal,
    Spotify,
    News,
    threejs,
    github,
    linkedin,
    medium,
    Developer,
    nextjs,
    Linktree
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "works",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Machine Learning Engineer",
      icon: creator,
    },
    {
      title: "Content Writer",
      icon: mobile,
    },
  ];
  
  const technologies = [
    {
      name: "C",
      icon: C,
    },
    {
      name: "C++",
      icon: Cplus,
    },
    {
      name: "Python",
      icon: Python,
    },
    {
      name: "Java",
      icon: Java,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React.js",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Node.js",
      icon: nodejs,
    },
    {
      name: "Express.js",
      icon: Express,
    },    
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "Three.js",
      icon: threejs,
    },
    {
      name: "Next.js",
      icon: nextjs,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "VS Code",
      icon: vscode,
    },
    {
      name: "Firebase",
      icon: Firebase,
    },
  ];
  
  const projects = [
    {
      name: "REALDEAL (E-Commerce Web Application)",
      description: "An e-commerce website built with Node.js, Express.js, React.js and MongoDB. It uses Redux for managing the state of the application. It uses JWT for managing the authentication process. Also, it utilizes Stripe for the payment checkout process.",
      image: Realdeal,
      source_code_link: "https://github.com/ManasviPant09/Realdeal-Fullstack",
    },
    {
      name: "Spotify Clone using React JS",
      description: "This project is an attempt to build a Spotify Clone by using React JS and Styled Components. Also, it utilizes the Spotify API and Context API for its working. The Context API has been utilized to manage the state of the application.",
      image: Spotify,
      source_code_link: "https://github.com/ManasviPant09/Spotify-Clone-Using-React-JS",
    },
    {
      name: "News App using React JS",
      description: "In the given project, React JS and Tailwind CSS and Redux have been utilized to build a responsive UI for a news application. Authentication has been set up using Firebase.",
      image: News,
      source_code_link: "https://github.com/ManasviPant09/News-App-React",
    },
    {
      name: "Linktree using Next JS",
      description: "A linktree clone built using Next.js, React.js deployed using Vercel which makes use of Tailwind CSS for styling.",
      image: Linktree,
      source_code_link: "https://github.com/ManasviPant09/Linktree-using-Next.js",
    },
  ];

  const socials = [
    {
      name: "LinkedIn",
      icon: linkedin,
      link: "https://www.linkedin.com/in/manasvi-pant-79a4071b3/",
    },
    {
      name: "Github",
      icon: github,
      link: "https://github.com/ManasviPant09",
    },
    {
      name: "Medium",
      icon: medium,
      link: "https://medium.com/@manasvipant1106",
    }
  ];

  const developer = [
    {
      name: "Developer",
      icon: Developer
    }
  ]
export { services, technologies, socials, projects, developer };