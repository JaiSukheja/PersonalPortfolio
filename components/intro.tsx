"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { Cursor, Typewriter } from "react-simple-typewriter";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/Jai Sukheja.jpg"
              alt="Jai Sukheja portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-48 w-44 rounded-full object-cover border-[0.35rem] border-slate-900 shadow-xl"
            />
          </motion.div>

          {/* <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span> */}
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-light text-3xl  text-slate-600 dark:text-white">Hi, I'm <span className="text-4xl font-light !sm:text-sm !sm:font-light">Jai Sukheja</span>.<br/></span>
        <span className="text-sky-600 dark:text-sky-600 italic text-3xl font-light">
          <Typewriter
            words={['Aspiring Software Engineer', 'Full Stack Developer', 'Passionate Programmer']}
            loop={0}
            typeSpeed={100}
            deleteSpeed={70}
            delaySpeed={2000}
          />
          <Cursor/>
        </span>
        <span className="font-light text-3xl text-slate-600 dark:text-white"><br />I'm a dedicated learner aspiring to leverage my skills for a fulfilling career. With a passion for growth, I aim to contribute meaningfully to the industry.</span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-xl outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition mr-1"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me {" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <div className="flex gap-2 mt-1">  
        <a
          className="bg-white p-2 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-md focus:scale-[1.05] hover:scale-[1.05] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-sky-600/60"
          href="https://linkedin.com/in/jaisukheja02"
          target="_blank"
        >
          <BsLinkedin className="text-3xl"/>
        </a>

        <a
          className="bg-white p-2 text-gray-700 flex items-center gap-2 rounded-md focus:scale-[1.05] hover:scale-[1.05] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-black/60"
          href="https://github.com/jaisukheja"
          target="_blank"
        >
          <FaGithubSquare  className="text-3xl"/>
        </a>
       </div>
        <a
          className="group bg-white px-4 py-3 flex items-center gap-2 rounded-xl outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 mr-1"
          href="/Jai Sukheja CV 04714802721 CSE MAIT 8595717162.pdf"
          download
        >
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          Resume
        </a>
      </motion.div>
    </section>
  );
}
