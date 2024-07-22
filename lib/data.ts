import React from "react";
import { FaAws, FaBootstrap, FaDocker, FaGitAlt, FaGithub, FaHtml5, FaJava, FaNodeJs, FaPython, FaReact, FaSass, FaVuejs } from "react-icons/fa";
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
  {
    name: "Certificates",
    hash: "#certificates",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Web Developer",
    location: "PSPTechHub Services Pvt. Ltd.",
    description: [
      "Empowered clients and boosted satisfaction with secure, real- time consultation app built using React Native, Firebase, Google Web Service, and AppScript. ","Crafted a responsive, static & SEO - optimized website showcasing advanced technologies, aiming to a 25 % increase in organic traffic within 3 months.",
    ],
    icon: React.createElement(TbCertificate),
    date: "May 2023 - Oct -2023",
    link: "https://drive.google.com/file/d/1-K-ZwTyWDbkcj9BHGis2iQdgjDCMSWZB/view",
  },
  {
    title: "Full-Stack Developer",
    location: "NullClass EdTech. Pvt. Ltd.",
    description:
      [
        "Expanded platform reach to global audiences with multilingual support for 100 + languages, seamlessly handling including user- generated content.","Increased user interactions and strengthened account security by implementing a Rewards system and Real - time login tracking features."
      ],
    icon: React.createElement(TbCertificate),
    date: "Nov 2023 - Jan 2024",
    link: "https://drive.google.com/file/d/1dzUpDwNq5gGtGxkVmawHD5kLm-11ocYc/view",
  },
  {
    title: "Data Analyst",
    location: "IBM SkillBuild",
    description:
      [
        "Used Matplotlib, Python and SQL for interactive visualizations, resulting in a 20 % boost in informed decision - making.", "Deployed Sweetviz and dtale for automated data summaries, saving analysts 30 % of their time and enabling deeper analysis.",
      ],
    icon: React.createElement(TbCertificate),
    date: "Dec 2023 - Jan 2024",
    link: "https://drive.google.com/file/d/12g-3sLAXTTyBHmCNh4jyRd_MVqTI0lPU/view",
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
    link: "https://linkedin.com/in/JaiSukheja02",
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
    skillName: "Firebase",
    skillIcon: React.createElement(IoLogoFirebase),
  },
  {
    skillName: "Supabase",
    skillIcon: React.createElement(RiSupabaseFill),
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
