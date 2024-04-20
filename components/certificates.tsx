"use client"

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { certificatesData } from "@/lib/data";
import { TbCertificate } from "react-icons/tb";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};

export default function Certificates() {
  const { ref } = useSectionInView("Certificates");

  return (
      <section id="certificates" ref={ref} className="mb-28 text-center leading-8 sm:mb-40 scroll-mt-28 sm:w-4/5">
        <SectionHeading>Certificates</SectionHeading>
        <ul className="flex flex-wrap justify-center gap-4 text-lg text-gray-800">
            {certificatesData.map((certificate, index) => (
                <motion.li
                    className="bg-slate-100 borderBlack rounded-lg px-5 py-5 dark:bg-sky-500/10 dark:text-white/80" 
                    key={index}
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                        once: true,
                    }}
                    custom={index}
                >
                    <a className=" bg-white flex flex-col items-center w-[272px] h-[280px] justify-center p-3 border-sky-500 border-0 rounded-lg overflow-hidden duration-300 ease-in-out transform hover:scale-105 hover:shadow-sky-500 dark:bg-black/10 dark:text-white/80" href={certificate.link} target="_blank">
                        <div className="flex items-center justify-center text-7xl text-sky-600 rounded-xl w-24 h-20 cursor-pointer bg-sky-50 dark:bg-sky-800/10 dark:text-sky/40" style={
                            {
                                // boxShadow: "inset 0.01rem 0.01rem 0.05rem #2563EB", 
                                // backgroundColor: "rgb(32,105,255,0.1)"
                            }
                        }>
                            {certificate.icon}
                        </div>
                        <h3 className="font-medium text-center text-[1.3rem] mt-4 w-full">{certificate.title}</h3>
                        <p className="text-gray-600 text-xl mt-1 dark:text-gray-500">{certificate.issuer}</p>
                        <p className="text-sky-600 text-sm mt-1">{certificate.issueDate}</p>
                    </a>
                </motion.li>
            ))}
        </ul>
      </section>
    );
}
    