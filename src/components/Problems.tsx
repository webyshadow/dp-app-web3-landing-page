"use client";
import { FC } from "react";
import { motion } from "framer-motion";

const Problems: FC = () => {
  return (
    <section className="w-full bg-black bg-dot-grid flex justify-center items-center px-4 py-20 bg-transparent">
      <div className="w-full max-w-5xl text-center">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="inline-block bg-green-900/30 border border-green-500 text-green-400 text-xs font-semibold px-3 py-1 rounded mb-6 w-fit relative z-10"
        >
          Problems in the Current Market
        </motion.div>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-gray-200 text-lg md:text-xl leading-relaxed mb-10"
        >
          Single-chain silos force creators to limit reach or duplicate effort.
          Token deployment remains technically complex. Unfair launches and rug
          pulls erode trust. Token discovery is fragmented across explorers,
          DEXs, and social platforms.
        </motion.p>

        {/* Big Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative inline-block"
        >
          {/* Glow Background */}
          <div className="absolute inset-0 bg-green-500/20 blur-2xl rounded-full"></div>

          {/* Heading */}
          <h2 className="relative text-3xl md:text-6xl font-bold text-white leading-tight">
            The Challenges Holding <br />
            Token Creation Back
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default Problems;
