"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const CasinoCardsSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 90%", "end start"],
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

  // ✅ Top-level pe hi saare transforms define karo
  const yTransforms = [
    useTransform(scrollYProgress, [0, 0.3], [300, 80]),
    useTransform(scrollYProgress, [0.2, 0.5], [400, 80]),
    useTransform(scrollYProgress, [0.4, 0.7], [500, 80]),
    useTransform(scrollYProgress, [0.6, 0.9], [600, 80]),
  ];

  const xTransforms = [
    useTransform(scrollYProgress, [0, 0.3], [-200, -500]),
    useTransform(scrollYProgress, [0.2, 0.5], [-50, -180]),
    useTransform(scrollYProgress, [0.4, 0.7], [100, 140]),
    useTransform(scrollYProgress, [0.6, 0.9], [250, 400]),
  ];

  const rotateTransforms = [
    useTransform(scrollYProgress, [0, 0.3], [-45, 0]),
    useTransform(scrollYProgress, [0.2, 0.5], [-35, 0]),
    useTransform(scrollYProgress, [0.4, 0.7], [-25, 0]),
    useTransform(scrollYProgress, [0.6, 0.9], [-15, 0]),
  ];

  const opacityTransforms = [
    useTransform(scrollYProgress, [0, 0.3], [0, 1]),
    useTransform(scrollYProgress, [0.2, 0.5], [0, 1]),
    useTransform(scrollYProgress, [0.4, 0.7], [0, 1]),
    useTransform(scrollYProgress, [0.6, 0.9], [0, 1]),
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full relative bg-black bg-dot-grid"
    >
      {/* ✅ Large screens = fancy animation */}
      <div className="hidden md:flex sticky top-0 h-screen items-center justify-center">
        <div className="relative w-full h-[400px] flex justify-center items-start mt-[-100px]">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              style={{
                y: yTransforms[i],
                x: xTransforms[i],
                rotate: rotateTransforms[i],
                opacity: opacityTransforms[i],
              }}
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

      {/* ✅ Small screens = simple vertical list */}
      <div className="md:hidden flex flex-col gap-6 py-12 px-6">
        {cards.map((card, i) => (
          <div
            key={i}
            className="
              w-full h-auto 
              bg-gradient-to-b from-black/80 to-neutral-900/90
              border border-emerald-500/30 
              shadow-[0_0_15px_rgba(16,185,129,0.3)] 
              rounded-2xl flex flex-col justify-center items-center 
              p-6 text-center 
              backdrop-blur-xl
            "
          >
            <h3 className="font-bold text-lg text-green-400 tracking-wide mb-2">
              {card.title}
            </h3>
            <p className="text-sm text-gray-300 leading-snug">{card.para}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CasinoCardsSection;
