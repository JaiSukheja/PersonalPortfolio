"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { BiSolidRightArrow } from "react-icons/bi";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <div className="mb-3">
        <div className="italic text-center"> I am an engineering student in Computer Science Engineering from Maharaja Agrasen Institute of Technology ,GGSIPU.</div>
        <div className="flex flex-wrap w-9/10 ml-12">
          <span className="w-1/2 flex items-center gap-1">
            <BiSolidRightArrow className="inline-block" /> Degree: <span className="text-sky-500">B.Tech Computer Science</span>
          </span>
          <span className="w-1/2 flex items-center gap-1">
            <BiSolidRightArrow className="inline-block" /> Year of Graduation: <span className="text-sky-500">2025</span>
          </span>
          <span className="w-1/2 flex items-center gap-1">
            <BiSolidRightArrow className="inline-block" /> Email: <span className="text-sky-500">jaisukheja02@gmail.com</span>
          </span>
          <span className="w-1/2  flex items-center gap-1">
            <BiSolidRightArrow className="inline-block" /> Birth Date: <span className="text-sky-500">22nd December 2002</span>
          </span>
        </div>
      </div>
      <p className="italic text-center">
        Innovative tech mind with 5 years of experience working as a computer programmer. Capable of working with a variety of technology and software solutions, and managing databases. Valuable team member who has experience diagnosing problems and developing solutions. Talented leader with unique ideas and a history of successful contributions in the field.
      </p>
      <p className="italic text-center">
        I work on hobbies that are based on computers and technology. I am a Council Member at IOSD-MAIT Technical Society and Core Member at Codechef MAIT. In my free time I like to read about new Innovations in Computer Science and Technology.
      </p> 
    </motion.section>
  );
}
