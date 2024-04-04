"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function About() {
  const { ref } = useSectionInView("Hakkımda");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Hakkımda</SectionHeading>
      <p className="mb-3">
        Lisans eğitimimi İstanbul Gelişim Üniversitesi Bilgisayar Mühendisliği
        bölümünde tamamladıktan sonra yazılıma olan ilgimle kendimi geliştirmeye
        karar verdim. Yazılım kariyerime bir{" "}
        <span className="font-medium">frontend geliştirici</span> olarak
        başladım. 2022 yılından bu zamana full stack developer olarak deneyime
        sahibim. Temel teknoloji yığınım şunları içerir:{" "}
        <span className="font-medium">
          React(React.js, React Native), Next.js, Node.js, Golang ve MongoDB
        </span>
        . TypeScript ve Prisma konularında da yetkinim. Sürekli olarak yeni
        teknolojiler öğrenmeye ve yeteneklerimi genişletmeye hevesliyim.
      </p>
    </motion.section>
  );
}
