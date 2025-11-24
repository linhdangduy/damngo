"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/AMV_1915.JPG"
          alt="Wedding couple"
          fill
          priority
          className="object-cover brightness-50"
          quality={90}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 md:px-8 py-20 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl elegant-text text-white mb-6 font-bold leading-tight">
            Chúng Mình Sắp Cưới
          </h1>
        </motion.div>

        <motion.div
          className="w-20 sm:w-24 h-1 bg-wedding-primary mx-auto mb-6"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ duration: 1, delay: 0.8 }}
        ></motion.div>

        <motion.p
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white mb-8 font-light leading-relaxed px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          Hân hạnh được chia sẻ niềm hạnh phúc cùng quý vị
        </motion.p>

        <motion.div
          className="text-lg sm:text-xl md:text-2xl text-wedding-secondary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          <p className="mb-2">Ghi Nhớ Ngày Vui</p>
          <p className="text-2xl sm:text-3xl md:text-4xl elegant-text font-semibold text-wedding-primary">
            29.11.2025
          </p>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
          });
        }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </motion.div>
    </div>
  );
}
