"use client";

import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const RevenueModel = () => {
  return (
    <section className="w-full bg-black bg-dot-grid text-white py-20 px-6 flex flex-col items-center">
      {/* Tag */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="bg-green-900/30 border border-green-500 text-green-400 text-xs font-semibold px-3 py-1 rounded mb-6 w-fit relative z-10"
      >
        REVENUE MODEL
      </motion.div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-3xl md:text-4xl font-bold text-center mb-4"
      >
        Transparent & Sustainable Revenue Structure
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-gray-400 text-center max-w-3xl mb-12"
      >
        Launch fee: 1% of raised funds (0.5% if paid in DEPLOY). Trending boosts,
        premium analytics, and micro-fees for bridging services.
      </motion.p>

      {/* Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, x: -80, rotate: -5 }}
          whileInView={{ opacity: 1, x: 0, rotate: -2 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
          className="bg-[#111] rounded-xl p-6 shadow-lg"
        >
          <div className="flex items-center gap-2 mb-3">
            <FaStar className="text-green-400" />
            <h3 className="text-lg font-semibold">
              1% standard / 0.5% in DEPLOY
            </h3>
          </div>
          <p className="text-gray-400 text-sm">
            Keep more of your raised funds with discounted fees for DEPLOY
            payments.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 80, rotate: 5 }}
          whileInView={{ opacity: 1, y: 0, rotate: 2 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="bg-[#111] rounded-xl p-6 shadow-lg"
        >
          <div className="flex items-center gap-2 mb-3">
            <FaStar className="text-green-400" />
            <h3 className="text-lg font-semibold">Trending Boosts</h3>
          </div>
          <p className="text-gray-400 text-sm">
            Feature your project in trending lists for maximum visibility.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          initial={{ opacity: 0, x: 80, rotate: 5 }}
          whileInView={{ opacity: 1, x: 0, rotate: -1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
          className="bg-[#111] rounded-xl p-6 shadow-lg"
        >
          <div className="flex items-center gap-2 mb-3">
            <FaStar className="text-green-400" />
            <h3 className="text-lg font-semibold">Revenue Sharing</h3>
          </div>
          <p className="text-gray-400 text-sm">
            Earn a share of platform growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RevenueModel;
