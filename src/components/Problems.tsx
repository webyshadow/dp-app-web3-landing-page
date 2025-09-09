// src/components/Problems.tsx
import { FC } from "react";

const Problems: FC = () => {
  return (
    <section className="w-full bg-black bg-dot-grid flex justify-center items-center px-4 py-20 bg-transparent">
      <div className="w-full max-w-5xl text-center">
        {/* Tag */}
        <div className="inline-block bg-green-900/30 border border-green-500 text-green-400 text-xs font-semibold px-3 py-1 rounded mb-6 w-fit relative z-10">
          Problems in the Current Market
        </div>

        {/* Paragraph */}
        <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-10">
          Single-chain silos force creators to limit reach or duplicate effort.
          Token deployment remains technically complex. Unfair launches and rug
          pulls erode trust. Token discovery is fragmented across explorers,
          DEXs, and social platforms.
        </p>

        {/* Big Heading */}
<div className="relative inline-block">
  {/* Glow Background */}
  <div className="absolute inset-0 bg-green-500/20 blur-2xl rounded-full"></div>

  {/* Heading */}
  <h2 className="relative text-3xl md:text-6xl font-bold text-white leading-tight">
    The Challenges Holding <br />
    Token Creation Back
  </h2>
</div>

      </div>
    </section>
  );
};

export default Problems;
