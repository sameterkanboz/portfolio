"use client";

import { articlesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import React from "react";
import Article from "./article";
import SectionHeading from "./section-heading";

export default function Articles() {
  const { ref } = useSectionInView("Makalelerim", 0.5);

  return (
    <section ref={ref} id="articles" className="scroll-mt-28 mb-28">
      <SectionHeading>Makalelerim</SectionHeading>
      <div>
        {articlesData.map((article, index) => (
          <React.Fragment key={index}>
            <Article {...article} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
