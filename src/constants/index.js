import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  softern,
  safeLogo,
  freelancer,
  nextProj,
  reactNative,
  socialMedia,
} from "../assets";

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
  },
  {
    title: "Content Creator",
    icon: creator,
  },
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    title: "React.js Developer",
    company_name: "Softern",
    icon: softern,
    iconBg: "#383E56",
    date: "March 2020 - July 2021",
    points: [
      "I had the privilege of contributing to the dynamic environment at Software Company as a React.js Developer, starting my career afresh",
      "During my tenure at Software Company Softern, a leading IT company, I honed and expanded my skills. I played a pivotal role in developing and enhancing various projects",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Freelancer",
    icon: freelancer,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Mobile App Development: Designing and developing mobile applications for iOS and Android platforms using React Native.",
      " This involves writing code in JavaScript or TypeScript to create a cross-platform user interface and functionality",
      "Integration with APIs: Connecting mobile applications to backend services and APIs. This includes making API requests, handling responses, and managing data within the app.",
      "Cross-Platform Development: Ensuring that the mobile application works seamlessly on both iOS and Android platforms. React Native is known for its cross-platform capabilities, allowing developers to write code once and deploy it on multiple platforms.",
      "Debugging and Testing: Identifying and fixing bugs in the code through debugging techniques. Implementing and conducting unit testing to ensure the reliability and stability of the application.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Safe software and integrated solutions",
    icon: safeLogo,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Develop user interfaces for web applications using React.js Implement responsive design and ensure cross-browser compatibility",
      "Collaborate with UX/UI designers to translate design concepts into functional and interactive user interfaces.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Performance Optimization:Identify and address performance bottlenecks in the application. Optimize the application for speed and scalability.",
      "Work closely with cross-functional teams, including designers, product managers, and other developers, to deliver high-quality software solutions.Participate in agile development processes, including sprint planning, daily stand-ups, and retrospectives.",
      "Stay updated on the latest trends and advancements in React.js and front-end development.Continuously enhance skills and contribute to the improvement of development processes.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Brew Hub",
    description:
      "BrewHub is a feature-rich coffee booking app designed to elevate your coffee experience. Whether you're a casual coffee enthusiast or a devoted connoisseur, BrewHub provides a seamless platform to explore, reserve, and savor your favorite brews. Say goodbye to long queues and welcome a personalized coffee journey right at your fingertips.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "NativeWind",
        color: "pink-text-gradient",
      },
    ],
    image: reactNative,
    source_code_link: "https://github.com/",
  },
  {
    name: "Adminify",
    description:
      "Adminify is a cutting-edge admin panel built on Next.js, designed to empower businesses with robust and efficient management tools. Tailored for scalability and performance, Adminify offers a seamless and intuitive interface to streamline administrative tasks, providing a powerful solution for businesses of all sizes.",
    tags: [
      {
        name: "Next JS",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: nextProj,
    source_code_link: "https://github.com/",
  },
  {
    name: "Social Sphere",
    description:
      "Description: SocialSphere is a dynamic social media platform crafted with React for a modern frontend experience and Node.js for a robust backend infrastructure. It's a virtual space designed to foster connections, facilitate meaningful interactions, and empower users to share their stories and experiences in a secure and engaging environment.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: socialMedia,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
