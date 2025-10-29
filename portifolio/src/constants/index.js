import imgs from '../assets/my.jpg'
import Furni from '../assets/Furni.png'
import Halal from '../assets/Halal.png'
import portfolio from '../assets/portfolio.png'

import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  threejs,
} from "../assets";

export const portfolio_data= {
    name: "Kenenisa",
    skills: ["React", "JavaScript", "Node.js", "Python", "AI/ML", "TypeScript"],
    projects: [
      { name: "E-Commerce Platform", description: "Full-stack e-commerce solution with React and Node.js" },
      { name: "AI Chatbot", description: "Machine learning chatbot for customer service" },
      { name: "Portfolio Website", description: "Modern responsive portfolio with 3D animations" }
    ],
    experience: [
      { role: "Frontend Developer", company: "Tech Corp", duration: "2 years" },
      { role: "AI Engineer", company: "AI Startup", duration: "1 year" }
    ],
    education: "Software Engineering Degree from University of Arba Minch",
    contact: {
      email: "KenenisaMiesob@gmail.com",
      phone: "+251964762288",
      linkedin: "linkedin.com/in/kenenisa"
    },
    about: "Passionate developer specializing in AI and web technologies with 3+ years of experience."
}

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
   {
    id: "Testimonials",
    title: "Testimonials"
  },
  {
    id: "contact",
    title: "Contact",
  },
 
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "HTML",
    icon: html,
    iconBg: "#383E56",
    points: [
              " Semantic HTML5 tags",
              " Accessibility (ARIA)",
              " SEO optimization",
             "  Form validation",
              " DOM structure",
    ],
  },
  {
    title: "CSS",
    icon: css,
    iconBg: "#E6DEDD",
    points: [
              " Flexbox & Grid layouts",
              " Responsive design",
             "  CSS animations",
              " Variables & custom properties",
             "  Modern CSS features",
    ],
  },
  {
    title: "JavaScript",
    icon: javascript,
    iconBg: "#383E56",
    points: [
               "ES6+ features (arrow functions, destructuring)",
               "Async/Await & Promises",
              " DOM manipulation",
              "API integration",
              "Modern JavaScript patterns",
    ],
  },
  {
    title: "React Js",
    icon: reactjs,
    iconBg: "#E6DEDD",
    points: [
              "Functional components & hooks",
              "State management (useState, useContext)",
              "Component lifecycle",
              "React Router for SPA",
              "Performance optimization"
    ],
  },
  {
    title: "Tailwindcss",
    icon: tailwind,
    iconBg: "#E5DEDD",
    points: [
              "Responsive utility classes",
              "Component styling",
              "Custom configuration",
              "Dark mode implementation",
              "Efficient workflow"
    ],
  },
  {
    title: "Git",
    icon: git,
    iconBg: "E5DEDD",
    points: [
              "Git & GitHub version control",
              "RESTful API integration",
              "Responsive web design",
              "Cross-browser compatibility",
              "Performance optimization",
              "Agile development methodology"
    ]
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: imgs,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: imgs,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: imgs,
  },
];

const projects = [
  {
    name: "Furniro ",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcs",
        color: "pink-text-gradient",
      },
    ],
    image: Furni,
    source_code_link: "https://github.com/Kenenisa1/Golden-Farniture",
  },
  {
    name: "Halal Shopping",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      }
    ],
    image: Halal,
    source_code_link: "https://github.com/",
  },
  {
    name: "Portfolio Website",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "React js",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/Kenenisa1/Kenenisa-Portfolio",
  },
];

export { services, technologies, experiences, testimonials, projects };
