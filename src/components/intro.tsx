"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Intro = () => {
  return (
    <section>
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
            <span
              className="absolute bottom-0 right-0
          text-2xl"
            >
              👋
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
