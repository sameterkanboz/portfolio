"use client";

import { useTheme } from "@/context/theme-context";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionHeading from "./section-heading";

export default function Experience() {
  const { ref } = useSectionInView("Deneyimlerim");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>Deneyimlerim</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
                visibility: "visible",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
                visibility: "visible",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
                visibility: "visible",
              }}
            >
              <h3 className="font-semibold capitalize visible">{item.title}</h3>
              <p className="font-normal !mt-0 visible">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75 visible">
                {item.description}
              </p>
              {item.used_technologies.map((tech, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-white/75 text-sm px-2 py-1 rounded-lg mt-2 mr-2 visible"
                >
                  {tech}
                </span>
              ))}
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
