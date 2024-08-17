"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { FaRegDotCircle } from "react-icons/fa";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience </SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:theme === "light" ? "rgb(255,255,255)" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "#0284c7 0.1rem 0.1rem 0.5rem",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                color: theme === "light" ? "#9ca3af" : "rgba(0, 0, 0)",
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255)",
                fontSize: "2.5rem",
                border: "0.3rem solid #0284c7 ",
                cursor: "pointer",
              }}
              iconOnClick={() => window.open(item.link, "_blank")}
            >
              <div className={`absolute inline-block right-5 rounded-b-xl border-t-0 shadow-sky-600/20 shadow-lg pt-7 p-3 px-4 top-0 text-white font-semibold ${
                item.type === 'Internship' ? 'bg-blue-500/60' : 
                item.type === 'Apprenticeship' ? 'bg-purple-500/60' : 
                item.type === 'Leadership' ? 'bg-green-500/60' : 'bg-yellow-500/60'
              }`}>
                {item.type}
              </div>
              <h3 className="font-medium text-2xl capitalize">{item.title}</h3>
              <div className="text-md font-semibold text-sky-600  !mt-0">{item.location}</div>
              <div className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                  {item.description.map((desc, index) => (
                      <p key={index} className="text-justify">
                        • { desc }
                      </p>
                  ))}
              </div>
              <div className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
              <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto pt-4">
                <span className="font-semibold text-sky-500">Technologies:</span>
                {item.technologies.map((tag, index) => (
                  <li
                    className="border-black/20 border px-3 py-1 text-[0.7rem] uppercase tracking-wider text-black rounded-full dark:text-white/70"
                    key={index}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              </div>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
