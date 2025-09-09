"use client";

import Image from "next/image";

const ArchitectureSection = () => {
  return (
    <section className="relative w-full bg-black bg-dot-grid text-white py-20 px-6 flex flex-col md:flex-col items-center md:justify-between">

              {/* Glow Left */}
  <div className="absolute left-0 top-0 h-full w-[200px] bg-green-500/20 blur-[120px] pointer-events-none"></div>

  {/* Glow Right */}
  <div className="absolute right-0 top-0 h-full w-[200px] bg-green-500/20 blur-[120px] pointer-events-none"></div>
      <div className="w-full max-w-7xl rounded-3xl overflow-hidden shadow-[0_0_25px_rgba(0,0,0,0.6)] flex flex-col md:flex-row items-center bg-black/80"></div>
      {/* Top Badge */}
      <div className="bg-green-900/30 border border-green-500 text-green-400 text-xs font-semibold px-3 py-1 rounded mb-2 w-fit">
        TECHNICAL ARCHITECTURE
      </div>

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-2 leading-snug">
        Three-Layer Architecture for Speed & Scale
      </h2>

      {/* Description */}
      <p className="text-gray-400 text-sm md:text-base max-w-2xl leading-relaxed">
        Three layers: Contract Layer (chain-specific templates), Middleware Layer
        (API orchestration & bridges), Front-End Layer (web & mobile with wallet
        integrations).
      </p>

      {/* Right Side (Image) */}
      <div className="md:w-[60%] flex justify-center">
        <Image
          src="/archi.avif"   // direct path from /public folder
          alt="Architecture Illustration"
          width={800}
          height={500}
          className="rounded-lg object-contain"
        />
      </div>
    </section>
  );
};

export default ArchitectureSection;
