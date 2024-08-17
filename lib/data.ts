import React from "react";
import { FaAws, FaBootstrap, FaDocker, FaGitAlt, FaGithub, FaHtml5, FaJava, FaLinux, FaNodeJs, FaPython, FaReact, FaSass, FaVuejs } from "react-icons/fa";
import { TbBrandNextjs, TbCertificate } from "react-icons/tb";
import { SiCplusplus, SiExpress, SiMongodb, SiRedux, SiTailwindcss, SiTerraform, SiTypescript } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { RiSupabaseFill } from "react-icons/ri";
import { LuGraduationCap } from "react-icons/lu";
import { FaCode, FaCss3Alt } from "react-icons/fa6";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { GoFileCode } from "react-icons/go";
import stackoverflowclone from "@/public/stackoverflowclone.png";
import Connectify from "@/public/Connectify.jpg";
import todolist from "@/public/todolist.png";
import wordle from "@/public/wordle.png";
import applifire from "@/public/applifire.png";
import trackact from "@/public/trackact.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  // {
  //   name: "Certificates",
  //   hash: "#certificates",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "AI Programmer",
    location: "IBM Skillbuild",
    description:
      [
        "Assisted in development of Vue.js based web application utilizing Supabase, created to enable 50% faster data insight extraction through Natural Language queries.","Crafted a visually compelling website landing page using HTML, CSS, and Bootstrap, aimed to improve lead capture by 15%. Integrated a Google Firebase-powered contact form for user queries."
      ],
    icon: React.createElement(TbCertificate),
    date: "June 2024 - July 2024",
    link: "https://drive.google.com/file/d/15FYhHg6caiQ3msHZ405QDmPSV32-Ggk0/view?usp=sharing",
    type: "Apprenticeship",
    technologies: ["IBM cloud", "Watson Assistant", "chatbot development", "Artificial Intelligence","Machine Learning", "prompt engineering","Python"],
  },
  {
    title: "Full stack Developer",
    location: "ZillionCosmos Tech Pvt. Ltd.",
    description:
      [
        "Assisted in development of Vue.js based web application utilizing Supabase, created to enable 50% faster data insight extraction through Natural Language queries.","Crafted a visually compelling website landing page using HTML, CSS, and Bootstrap, aimed to improve lead capture by 15%. Integrated a Google Firebase-powered contact form for user queries."
      ],
    icon: React.createElement(TbCertificate),
    date: "Mar 2024 - May 2024",
    link: "https://drive.google.com/file/d/1foyCXG1s4x5WcRf7AG998F2NyERpth1i/view?usp=sharing",
    type: "Internship",
    technologies: ["Vue.js", "Supabase","HTML", "CSS", "Bootstrap", "Firebase", "postgreSQL"],
  },
  {
    title: "Data Analyst",
    location: "IBM SkillBuild & CSRBOX",
    description:
    [
      "Used Matplotlib, Python and SQL for interactive visualizations, resulting in a 20 % boost in informed decision - making.", "Deployed Sweetviz and dtale for automated data summaries, saving analysts 30 % of their time and enabling deeper analysis.",
    ],
    icon: React.createElement(TbCertificate),
    date: "Dec 2023 - Jan 2024",
    link: "https://drive.google.com/file/d/12g-3sLAXTTyBHmCNh4jyRd_MVqTI0lPU/view",
    type: "Apprenticeship",
    technologies: ["Python", "Matplotlib","seaborn", "Sweetviz", "dtale","MySQl","numpy","pandas"],
  },
  {
    title: "Web Developer",
    location: "NullClass EdTech. Pvt. Ltd.",
    description:
      [
        "Leveraged React i18next to create a robust multilingual feature for the platform. This feature supports both static and user-generated content, ensuring a positive user experience for a global audience."
      ],
    icon: React.createElement(TbCertificate),
    date: "Nov 2023 - Jan 2024",
    link: "https://drive.google.com/file/d/1dzUpDwNq5gGtGxkVmawHD5kLm-11ocYc/view",
    type: "Internship",
    technologies: ["React", "Node.js","Express.js", "MongoDB", "react i18next", "Typescript"],
  },
  {
    title: "Machine Learning",
    location: "Kaggle",
    description:
      [
        "Learned the how models work, basic data exploration, data visualization, feature engineering, and model selection."
        ,"Implemented various models like Linear Regression, Logistic Regression, Decision Trees, Random Forest, etc."
      ],
    icon: React.createElement(TbCertificate),
    date: "Oct 2023 - Nov 2023",
    link: "https://drive.google.com/file/d/1luKD3xS6aIN2atqCbLth0hVJPIpeMEO0/view",
    type: "Coursework",
    technologies: ["Machine Learing", "python", "numpy", "pandas", "tensorflow", "scikit-learn"],
  },
  {
    title: "React Native Head",
    location: "IOSD-MAIT Technical Society",
    description:
    [
      "Developed the IOSD-MAIT and Impulse'24 website with the Web Development Team.","Mentored students in React Native and organized engaging tech events attracting 500+ participants.",
    ],
    icon: React.createElement(GoFileCode),
    date: "Aug 2023 - present",
    link: "https://iosdimpulse.in/",
    type: "Leadership",
    technologies: ["React Native", "React", "Node.js", ],
  },
  
  {
    title: "Web Developer",
    location: "PSPTechHub Services Pvt. Ltd.",
    description: [
      "Spearheaded the development of a cross-platform consultation mobile application for iOS and Android using React Native, resulting in a 30% reduction in development time.","Worked with Google Firebase and Apps script to manage user entered data across 3 different platforms including web and mobile applications.","Collaborated in a team of 7 for building a Responsive and Search Engine Optimized website using HTML, CSS and JavaScript targeting a 25% increase in organic traffic within 2 months."
    ],
    icon: React.createElement(TbCertificate),
    date: "May 2023 - Oct -2023",
    link: "https://drive.google.com/file/d/1-K-ZwTyWDbkcj9BHGis2iQdgjDCMSWZB/view",
    type: "Internship",
    technologies: ["React Native", "Google Firebase","appscript", "Html", "Css","javascript","SEO"],
  },
  {
    title: "Advanced Javascript",
    location: "Udemy",
    description:
      [
        "Studied the advanced concepts of Javascript like closures, hoisting, scope, etc and used them in various projects.","Practiced 100+ problems and learned to write clean and efficient code."
      ],
    icon: React.createElement(TbCertificate),
    date: "May 2023 - Aug 2023",
    link: "https://drive.google.com/file/d/14kgA0OGeLxrg_ltAaao3maDP-mkn4COe/view",
    type: "Coursework",
    technologies: ["javascript"],
  },
  {
    title: "Core Member",
    location: "Codechef MAIT Technical Society",
    description:
      [
        "Guiding the students in the field of Computer Science and Technology.","Organing interesting events and activities on topics related to Latest Technologies.",
      ],
    icon: React.createElement(TbCertificate),
    date: "May 2023 - present",
    link: "https://drive.google.com/file/d/1znN2dwf8UyhXdsujsCOllStoT0ziH4ti/view",
    type: "Leadership",
    technologies: ["Computer Science", "Coding", "Competitive Programming", "Web Development"],
  },
  {
    title: "Web Development",
    location: "Coding Blocks",
    description:
      [
        "Gained in-depth knowledge of React, Node.js, MongoDB, Express.js and Version controlling using Git & Github.","Crafted 10+ projects of different complexity levels and technologies." ,"Developed a fully functional Real-time chatting web application, which increased my understanding of CRUD operations and Socket programming."
      ],
    icon: React.createElement(TbCertificate),
    date: "Sept 2022 - Mar 2023",
    link: "https://drive.google.com/file/d/1dtGT4f-Xv7AX1X6YJdtZVl8Oit8TqZiP/view",
    type: "Coursework",
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "Handlebars.js", "Rest API", "JWT", "MVC Architecture", "Socket.io", "Web Sockets"],
  },
  {
    title: "HTML & CSS",
    location: "Udemy",
    description:
      [
        "Learned the basics of HTML, CSS and Web Techonologies.","Created a fully responsive landing page for a OTT platform using HTML and CSS."
      ],
    icon: React.createElement(TbCertificate),
    date: "Sep 2022 - Sep 2022",
    link: "https://drive.google.com/file/d/1AyIUJb0LXM3CqG7Sq8mUMzO5y-qq6cZL/view",
    type: "Coursework",
    technologies: ["HTML", "CSS", "Web Technologies"],
  },
  {
    title: "C++ Programming",
    location: "Coding Blocks",
    description:
      [ "Learned the C++ programming language and its implementation in real world problems.","Acquired knowledge of concepts like Object Oriented programming, Dynamic programming, functions, pointers, and Advanced Data Structure such as Trees, graphs, maps, etc." ,"Solved 500+ problems on various platforms like Leetcode, Codechef, Codeforces, Hackerrank, etc."
      ],
    icon: React.createElement(TbCertificate),
    date: "Apr 2022 - Sep 2022",
    link: "https://drive.google.com/file/d/14vXHg3EJI2wZCTQysi7qnhzqZM8wXA6A/view",
    type: "Coursework",
    technologies: ["Data Structures", "Algorithms", "oops", "dynamic programming","system design"],
  },
] as const;

export const projectsData = [
  {
    title: "Applifire",
    description:
      "A simple Chrome Extension built with React, Tailwind CSS, and Shad/CN.",
    tags: ["React", "ShadCN", "Tailwind", "Web Extension", "TypeScript"],
    imageUrl: applifire,
    livelink: "",
    githublink: "https://github.com/JaiSukheja/applifire",
  },
  {
    title: "TrackAct",
    description:
      "A Browser Activity Tracking Solution built with React, Node.js, MySQL, and Web Extension.",
    tags: ["React", "JavaScript", "Node.js", "MySQL", "Web Extension"],
    imageUrl: trackact,
    livelink: "",
    githublink: "https://github.com/JaiSukheja/",
  },
  {
    title: "Stackoverflow",
    description:
      "A clone of Stackoverflow built with React, Node.js, MongoDB, and Context API.",
    tags: ["React", "TypeScript", "Node.js", "MongoDB", "Context API"],
    imageUrl: stackoverflowclone,
    livelink: "https://stack-overflow-orcin.vercel.app/",
    githublink: "https://github.com/JaiSukheja/StackOverflowClone",
  },
  {
    title: "Todolist",
    description:
      "A simple Todolist web app built with React, Tailwind CSS, and Context API.",
    tags: ["React", "TailWind Css", "Javascript", "Context API"],
    imageUrl: todolist,
    livelink: "https://jaitodolist.vercel.app/",
    githublink: "https://github.com/JaiSukheja/ToDoListUpdated",
  },
  {
    title: "Wordle",
    description:
      "A Word Game where you have to guess the word by looking at the hints provided along with every guess.",
    tags: ["HTML", "CSS", "Javascript"],
    imageUrl: wordle,
    livelink: "https://splendorous-malabi-7b0a36.netlify.app/wordle/",
    githublink: "https://github.com/JaiSukheja/Mini-Games/tree/main/MINI/Mini-Games-master/wordle",
  },
  {
    title: "Connectify",
    description:
      "A Social Media Platform with Realtime Chatting facilitated by Socket.io.",
    tags: ["React", "Node.js", "MongoDB", "Socket.io", "Redux", "Sass"],
    imageUrl: Connectify,
    livelink: "",
    githublink: "https://github.com/JaiSukheja/StackOverflowClone",
  },
  
] as const;

export const skillsData = [
  {
    skillName: "React",
    skillIcon: React.createElement(FaReact),
  },
  {
    skillName: "React Native",
    skillIcon: React.createElement(FaReact),
  },
  {
    skillName: "Next.js",
    skillIcon: React.createElement(TbBrandNextjs),
  },
  {
    skillName: "Node.js",
    skillIcon: React.createElement(FaNodeJs),
  },
  {
    skillName: "Vue.js",
    skillIcon: React.createElement(FaVuejs),
  },
  {
    skillName: "MongoDB",
    skillIcon: React.createElement(SiMongodb),
  },
  {
    skillName: "MySQL",
    skillIcon: React.createElement(GrMysql),
  },
  {
    skillName: "Supabase",
    skillIcon: React.createElement(RiSupabaseFill),
  },
  {
    skillName: "Firebase",
    skillIcon: React.createElement(IoLogoFirebase),
  },
  {
    skillName: "Express",
    skillIcon: React.createElement(SiExpress),
  },
  {
    skillName: "AWS",
    skillIcon: React.createElement(FaAws)
  },
  {
    skillName: "Git",
    skillIcon: React.createElement(FaGitAlt),
  },
  {
    skillName: "Docker",
    skillIcon: React.createElement(FaDocker),
  },
  {
    skillName: "GitHub",
    skillIcon: React.createElement(FaGithub),
  },
  {
    skillName: "Terraform",
    skillIcon: React.createElement(SiTerraform),
  },
  {
    skillName: "Tailwind",
    skillIcon: React.createElement(SiTailwindcss),
  },
  {
    skillName: "Bootstrap",
    skillIcon: React.createElement(FaBootstrap),
  },
  {
    skillName: "SASS",
    skillIcon: React.createElement(FaSass),
  },
  {
    skillName: "Redux",
    skillIcon: React.createElement(SiRedux),
  },
  {
    skillName: "TypeScript",
    skillIcon: React.createElement(SiTypescript),
  },
  {
    skillName: "C++",
    skillIcon: React.createElement(SiCplusplus),
  },
  {
    skillName: "Python",
    skillIcon: React.createElement(FaPython),
  },
  {
    skillName: "Java",
    skillIcon: React.createElement(FaJava),
  },
  {
    skillName: "HTML",
    skillIcon: React.createElement(FaHtml5),
  },
  {
    skillName: "CSS",
    skillIcon: React.createElement(FaCss3Alt),
  },
  {
    skillName: "JavaScript",
    skillIcon: React.createElement(IoLogoJavascript),
  },
  {
    skillName: "Linux",
    skillIcon: React.createElement(FaLinux),
  }
] as const;

export const certificatesData = [
  {
    title: "Intro to Machine Learning",
    icon: React.createElement(TbCertificate),
    issuer: "Kaggle",
    issueDate: "Oct 2023",
    link: "https://drive.google.com/file/d/1luKD3xS6aIN2atqCbLth0hVJPIpeMEO0/view",
  },
  {
    title: "JavaScript- Basics to Advanced",
    icon: React.createElement(TbCertificate),
    issuer: "Udemy",
    issueDate: "Aug 2023",
    link: "https://drive.google.com/file/d/14kgA0OGeLxrg_ltAaao3maDP-mkn4COe/view",
  },
  {
    title: "Certificate of Excellence in Web Development",
    icon: React.createElement(LuGraduationCap),
    issuer: "Coding Blocks",
    issueDate: "Mar 2023",
    link: "https://drive.google.com/file/d/1dtGT4f-Xv7AX1X6YJdtZVl8Oit8TqZiP/view",
  },
  {
    title: "Full Stack Development (MERN)",
    icon: React.createElement(TbCertificate),
    issuer: "Coding Blocks",
    issueDate: "Mar 2023",
    link: "https://drive.google.com/file/d/1znN2dwf8UyhXdsujsCOllStoT0ziH4ti/view",
  },
  {
    title: "HTML5 and CSS3 Complete Course",
    icon: React.createElement(FaCode),
    issuer: "Udemy",
    issueDate: "Sept 2022",
    link: "https://drive.google.com/file/d/1AyIUJb0LXM3CqG7Sq8mUMzO5y-qq6cZL/view",
  },
  {
    title: "Data Structures and Algorithms in C++",
    icon: React.createElement(FaCode),
    issuer: "Coding Blocks",
    issueDate: "Sept 2022",
    link: "https://drive.google.com/file/d/14vXHg3EJI2wZCTQysi7qnhzqZM8wXA6A/view",
  },
] as const;
