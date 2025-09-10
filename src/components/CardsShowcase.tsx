"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const CasinoCardsSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 90%", "end start"], // starts earlier
  });

  const cards = [
    {
      title: "Secure Vault",
      para: "Your assets are protected with multi-layer encryption and 24/7 monitoring.",
    },
    {
      title: "Instant Transactions",
      para: "Send and receive crypto in real-time with ultra-low fees and global reach.",
    },
    {
      title: "DeFi Ready",
      para: "Easily connect with DeFi protocols to stake, swap, and grow your portfolio.",
    },
    {
      title: "NFT Support",
      para: "Manage and showcase your NFTs directly from your wallet interface.",
    },
  ];

  // 👇 Yahan pe saare transforms ek array mein bana lo
  const transforms = cards.map((_, i) => {
    const progressStart = i * 0.2;
    const progressEnd = progressStart + 0.3;
    const yStart = 300 + i * 100;

    return {
      y: useTransform(scrollYProgress, [progressStart, progressEnd], [yStart, 80]),
      x: useTransform(scrollYProgress, [progressStart, progressEnd], [-200 + i * 150, i * 320 - 500]),
      rotate: useTransform(scrollYProgress, [progressStart, progressEnd], [-45 + i * 10, 0]),
      opacity: useTransform(scrollYProgress, [progressStart, progressEnd], [0, 1]),
    };
  });

  return (
    <section
      ref={sectionRef}
      className="w-full h-[200vh] relative bg-black bg-dot-grid"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="relative w-full h-[400px] flex justify-center items-start mt-[-100px]">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              style={transforms[i]} // ✅ Ab yahan se transforms use kar rahe hain
              className="
                absolute w-[220px] h-[300px] 
                bg-gradient-to-b from-black/80 to-neutral-900/90
                border border-emerald-500/30 
                shadow-[0_0_25px_rgba(16,185,129,0.3)] 
                rounded-2xl flex flex-col justify-center items-center 
                p-6 text-center 
                backdrop-blur-xl
                hover:shadow-[0_0_35px_rgba(16,185,129,0.6)] 
              "
            >
              <h3 className="font-bold text-xl text-green-400 tracking-wide mb-3">
                {card.title}
              </h3>
              <p className="text-sm text-gray-300 leading-snug">
                {card.para}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasinoCardsSection;
