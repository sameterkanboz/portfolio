"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

const Intro = () => {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="/portfolio.jpg"
              alt="asd"
              width={192}
              height={192}
              quality={100}
              priority
              className="h-24 w-24 rounded-full
            object-cover border-[0.35rem] border-white shadow-xl
            "
            />
            <motion.span
              className="absolute bottom-0 right-0
          text-2xl"
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
            </motion.span>
          </motion.div>
        </div>
      </div>
      <motion.p
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Merhaba ben <strong>Samet Erkan Boz.</strong> İstanbul&apos;da yaşayan{" "}
        <strong>full stack</strong> uygulama geliştiricisiyim. Şu sıralar
        genellikle <i className="underline">react ve next.js</i> üzerine
        çalışıyorum.
      </motion.p>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="mailto:sameterkanboz@gmail.com"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Benimle iletişime geç
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/sameterkanboz_cv_en_2024.pdf"
          download={true}
        >
          Özgeçmişimi İndir{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1" />
        </a>

        <a
          className="bg-white p-4 flex items-center gap-2 text-gray-700 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105
          transition cursor-pointer border border-black/10"
          href="https://www.linkedin.com/in/sameterkanboz/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 flex items-center gap-2 text-[1.35rem] text-gray-700 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105
          transition cursor-pointer border border-black/10"
          href="https://github.com/sameterkanboz"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
