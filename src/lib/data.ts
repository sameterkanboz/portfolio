import React from "react";
import { AiOutlineRobot } from "react-icons/ai";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { TbBrandNextjs } from "react-icons/tb";

import { default as carServiceApp } from "/public/car-service-app.png";
import { default as libraryTracker } from "/public/library-tracker.jpg";
import { default as makaleUbuntu } from "/public/makale.jpeg";
import { default as r3fTextileConfigurator } from "/public/r3f-textile-configurator.png";
export const links = [
  {
    name: "Hakkımda",
    hash: "#about",
  },
  {
    name: "Projelerim",
    hash: "#projects",
  },
  {
    name: "Makalelerim",
    hash: "#articles",
  },
  {
    name: "Yeteneklerim",
    hash: "#skills",
  },
  {
    name: "Deneyimlerim",
    hash: "#experience",
  },

  // {
  //   name: "İletişim",
  //   hash: "#contact",
  // },
] as const;

export const experiencesData = [
  {
    title: "Front-End Geliştirici",
    location: "İstanbul, Türkiye (Ofis)",
    description:
      "Bir sene boyunca front-end geliştirici olarak çalıştım. Bu süre zarfında full stack geliştirici olmak için kendimi geliştirdim ve çeşitli R&D çalışmalarında bulundum.",
    icon: React.createElement(FaReact),
    date: "2022 - 2023",
    used_technologies: [
      "React",
      "React Native",
      "Mui",
      "Figma",
      "Firebase",
      "Three.js",
      "Blender",
    ],
  },
  {
    title: "Front-End Geliştirici",
    location: "İstanbul, Türkiye (Hibrit)",
    description:
      "Bir e-ticaret şirketinde kısa süreli front-end geliştirici olarak çalıştım.",
    icon: React.createElement(TbBrandNextjs),
    date: "2023",
    used_technologies: ["React", "Next.js", "Tailwind", "Redux"],
  },
  {
    title: "Stajyer Full-Stack Developer",
    location: "İstanbul, Türkiye (Uzaktan) ",
    description:
      "Burada bir ay boyunca stajyer full-stack developer olarak görev yaptım. Bu süre boyunca uçtan uca bir mobil uygulama hazırladım.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 Ocak",
    used_technologies: ["React Native", "GoLang", "PostgreSQL"],
  },
  {
    title: "Robotik UAM Asistanı",
    location: "İstanbul, Türkiye",
    description:
      "Öğrencisi olduğum İstanbul Gelişim Üniversitesi bünyesinde bulunan robotik araştırma merkezinde asistan öğrenci olarak görev almaktayım.",
    icon: React.createElement(AiOutlineRobot),
    date: "2024 - ...",
    used_technologies: ["Ardunio", "Raspberry Pi", "Python", "C++"],
  },
  {
    title: "İstanbul Gelişim Üniversitesi",
    location: "İstanbul, Türkiye",
    description: "4 Yıllık Bilgisayar Mühendisliği lisans eğitimi tamamladım.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
    used_technologies: ["Java", "C++", "Python", "SQL"],
  },
] as const;

export const projectsData = [
  {
    title: "Car Service App",
    description:
      "Staj sürem boyunca geliştirdiğim bir mobil uygulama. Bu uygulama ile araç sahipleri araçlarını servise götürüp servis süreçlerini takip edebilirler.",
    tags: ["React Native", "TypeScript", "GoLang", "PostgreSQL"],
    imageUrl: carServiceApp,
    githubUrl: "https://github.com/sameterkanboz/car-service-app",
  },
  {
    title: "Library Tracker",
    description:
      "Bir kütüphane takip uygulaması. Bu uygulama ile kitaplarınızı takip edebilir, okuma listesi oluşturabilir ve kitaplarınızı kategorilere ayırabilirsiniz.",
    tags: ["React Native", "TypeScript", "Firebase"],
    imageUrl: libraryTracker,
    githubUrl: "https://github.com/sameterkanboz/library-tracker",
  },
  {
    title: "r3f-textile-configurator",
    description:
      "React.js ve Three.js kullanarak geliştirdiğim bir tekstil konfigüratörü. Bu uygulama ile tekstil ürünlerini tasarlayabilirsiniz.",
    tags: ["React.js", "Three.js", "react-three-fiber"],
    imageUrl: r3fTextileConfigurator,
    githubUrl:
      "https://65aebd0a59f424402f172ee9--papaya-bubblegum-dba78c.netlify.app/",
  },
] as const;

export const articlesData = [
  {
    title: "Ubuntu 22.04 için Big Data Uygulamaları Kurulumu",
    description:
      "Bu makale BTK Akademi’de yayınlanan Büyük Veri Uygulamaları kursuna başlayacaklar için hazırlanmıştır.",
    tags: ["Big Data", "Kafka", "Mongodb", "Ubuntu", "Ubuntu 22.04"],
    imageUrl: makaleUbuntu,
    mediumUrl:
      "https://medium.com/@samet.erkan.boz/ubuntu-22-04-i%C3%A7in-big-data-uygulamalar%C4%B1-kurulumu-232118876600",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Redux",
  "Next.js",
  "Git",
  "Tailwind",
  "Firebase",
  "MongoDB",
  "GraphQL",
  "PostgreSQL",
  "Python",
  "GoLang",
] as const;
