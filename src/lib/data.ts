import React from "react";
import { AiOutlineRobot } from "react-icons/ai";

import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { GiTigerHead } from "react-icons/gi";
import { CiCoffeeBean } from "react-icons/ci";
import { FaCrow } from "react-icons/fa";

import { default as carServiceApp } from "/public/car-service-app.png";
import { default as libraryTracker } from "/public/library-tracker.jpg";
import { default as makaleUbuntu } from "/public/makale.jpeg";
import { default as r3fTextileConfigurator } from "/public/r3f-textile-configurator.png";
import Beije from "@/components/beije";
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
    title: "Depixen - Front-End Geliştirici",
    location: "İstanbul, Türkiye (Ofis - Tam Zamanlı)",
    description:
      "Bir sene boyunca front-end geliştirici olarak çalıştım. Bu süre zarfında full stack geliştirici olmak için kendimi geliştirdim ve çeşitli R&D çalışmalarında bulundum.",
    icon: React.createElement(FaReact),
    date: "2022 Eylül - 2023 Ekim",
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
    title: "fiyatperformans - Front-End Geliştirici",
    location: "İstanbul, Türkiye (Hibrit - Sözleşmeli)",
    description:
      "Bir e-ticaret şirketinde kısa süreli front-end geliştirici olarak çalıştım.",
    icon: React.createElement(GiTigerHead),
    date: "2023 Ekim - 2023 Aralık",
    used_technologies: ["React", "Next.js", "Tailwind", "Redux"],
  },
  {
    title: "Kafein - Full-Stack Developer",
    location: "İstanbul, Türkiye (Uzaktan - Stajyer) ",
    description:
      "Burada bir ay boyunca stajyer full-stack developer olarak görev yaptım. Bu süre boyunca uçtan uca bir mobil uygulama hazırladım.",
    icon: React.createElement(CiCoffeeBean),
    date: "2024 Ocak",
    used_technologies: ["React Native", "GoLang", "PostgreSQL"],
  },
  {
    title: "İGÜ BTRAM - Robotik UAM Asistanı",
    location: "İstanbul, Türkiye (Ofis - Yarı Zamanlı)",
    description:
      "Öğrencisi olduğum İstanbul Gelişim Üniversitesi bünyesinde bulunan robotik araştırma merkezinde asistan öğrenci olarak görev aldım.",
    icon: React.createElement(AiOutlineRobot),
    date: "2024 Ocak - 2024 Haziran",
    used_technologies: ["Ardunio", "Raspberry Pi", "Python", "C++"],
  },
  {
    title: "İstanbul Gelişim Üniversitesi",
    location: "İstanbul, Türkiye",
    description: "4 Yıllık Bilgisayar Mühendisliği lisans eğitimi tamamladım.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2024",
    used_technologies: ["Java", "C++", "Python", "SQL"],
  },

  {
    title: "kargakarga - Frontend Developer",
    location: "İstanbul, Türkiye (Hibrit - Sözleşmeli)",
    description:
      "İstanbul merkezli bir teknoloji şirketinde hibrit sözleşmeli olarak çalıştım. Proje bazlı olarak, kullanıcı deneyimi ve performansa odaklı web sayfaları geliştirdim.",
    icon: React.createElement(FaCrow),
    date: "2024 Mayıs - 2024 Temmuz",
    used_technologies: ["Next.js", "Javascript", "React"],
  },
  {
    title: "beije. - Full Stack Developer",
    location: "İstanbul, Türkiye (Hibrit - Tam Zamanlı)",
    description:
      "Tam zamanlı olarak full stack developer görevinde çalışmaktayım. Proje geliştirme sürecinde frontend ve backend arasında köprü görevi üstlenerek, modern teknolojilerle entegre çözümler üretiyorum.",
    icon: React.createElement(Beije),
    date: "2024 Temmuz - ...",
    used_technologies: ["Next.js", "Typescript", "React", "MUI", "Redux"],
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
