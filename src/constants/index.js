import {
  ai_brain,
  ray_marching, 
  fbts,
  ift,
  cplus, 
  michelin,
  tensorflow, 
  pytorch, 
  cuda, 
  rust,
  backend,
  web,
  typescript,
  html,
  css,
  reactjs,
  nodejs,
  git,
  next,
  threejs,
  sql,
  js,
  c,
  cs, 
  sc,
  linux,
  innovation, 
  heap,
  portfolio,
  cmd
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
    title: "AI framworks with Pytorch & Tensorflow",
    icon: ai_brain,
  },
  {
    title: "Database with SQL & Pandas",
    icon: backend,
  },

  {
    title: "Frontend with React & Three Js",
    icon: web,
  },

  {
    title: "Explorer of Art and Science Frontiers",
    icon: innovation,
  },
];

const technologies = [
  
  {
    name : "Pytorch", 
    icon : pytorch,
  },
  {
    name: "Tensorflow",
    icon: tensorflow,
  },
  {
    name: "Scikit Learn",
    icon: sc,
  },
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "Cuda",
    icon: cuda,
  },
  {
    name: "Git & GitHub",
    icon: git,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "C#",
    icon: cs,
  },
  {
    name: "C++",
    icon: cplus,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Rust",
    icon: rust,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "JavaScript",
    icon: js,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "React",
    icon: reactjs,
  },
  
  {
    name: "Next",
    icon: next,
  },
  
  {
    name: "TypeScript",
    icon: typescript,
  },
  
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
    
  
];

const experiences = [
  {
    title: "Artificial Intelligence Engineer Intern",
    company_name: "Michelin Asia",
    icon: michelin,
    iconBg: "#ffffff", 
    date: "Apr 2024 - Sep 2024",
    points: [
      "Adaptive Process Control with AI: Developed a self-regulating control loop to enhance machine performance and lifespan, applying an LSTM model for PID autotuning to continuously adapt the process based on real-time data.",
      "Predictive Maintenance with Machine Learning : Built a system to monitor machine health and predict part replacement, leveraging a Random Forest model and Dataiku dashboards for maintenance insights",
      "Keynote: Presentation of my two internship subjects to Michelin Asia factory directors.",
      ],
  },
  {
    title: "Research Student",
    company_name: "Institute for Future Technologies - IFT",
    icon: ift,
    iconBg: "#ffffff",
    date: "Sep 2023 - Present",
    points: [
      "From Brain To Screen : Integrating Deep Learning algorithms for motion imagery from EEG data : In-depth study of Brain-Computer Interface (BCI) technology and its applications for immersive experiences. Implemented EEG classification using hybrid deep learning models combining CNN and LSTM architectures.",
      "Bird species classification by sound using Deep Learning :Developed a deep learning-based pipeline for audio detection and classification of bird species in complex soundscapes.Trained a ResNet model to accurately identify bird species from environmental audio data, improving recognition in noisy, natural settings.",
      ],
  },
];

const projects = [
  {
    name: "From Brain To Screen",
    description:
      "From Brain To Screen is a research project that focuses on the use of AI to allow people to move in a virtual world with thier thoughts only.",
    tags: [
      {
        name: "Deep Learning",
        color: "blue-text-gradient",
      },
      {
        name: "BCI",
        color: "text-green-700",
      },
      {
        name: "VR",
        color: "text-red-700",
      },
    ],
    image: fbts,
    source_code_link: "https://github.com/Infinityy1001/From-Brain-To-Screen",
    live_demo_link: "https://infinityy1001.github.io/From-Brain-To-Screen/",
  },
  {
    name: "Ray Marching Music App",
    description:
      "This is an app that responds to music or sound picked up by a microphone in real time and displays 3D objects that change and move based on audio amplitudes.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "GLSL",
        color: "text-violet-700",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
    ],
    image: ray_marching,
    source_code_link: "https://github.com/Infinityy1001/Ray-Marching-Music-App",
    live_demo_link: "https://infinityy1001.github.io/Ray-Marching-Music-App/dist/index.html",
  },
  {
    name: "Portfolio",
    description:
      "I developed a personal portfolio website from scratch, showcasing my projects, skills, and experiences with an interactive and visually appealing design",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Three Js",
        color: "text-violet-700",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/Infinityy1001/Portfolio",
    live_demo_link: "https://infinityy1001.github.io/CS-Heap-Function-C/",
  },
  {
    name: "CMD Prompt",
    description:
      "This project is an interactive command-line portfolio that lets users explore my work and skills through typed commands, combining sleek design with a unique, engaging user experience.",
    tags: [
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: cmd,
    source_code_link: "https://github.com/Infinityy1001/CMD",
    live_demo_link: "https://infinityy1001.github.io/CMD/src/index.html",
  },
  {
    name: "CS Project : Recreate Heap in C",
    description:
      "This project outlines the implementation details and usage of our custom memory allocation functions: mymalloc(), myfree(), myrealloc(), and mycalloc(). These functions are designed to allocate memory on the heap of a program using the brk(2) and sbrk(2) system calls.",
    tags: [
      {
        name: "C",
        color: "blue-text-gradient",
      },
    ],
    image: heap,
    source_code_link: "https://github.com/Infinityy1001/CS-Heap-Function-C",
    live_demo_link: "https://infinityy1001.github.io/CS-Heap-Function-C/",
  },
];

export { services, technologies, experiences, projects };
