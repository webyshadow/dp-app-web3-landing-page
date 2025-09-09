"use client";

const LastSection = () => {
  return (
    <section className="relative w-full bg-black bg-dot-grid text-white py-20 px-6 flex flex-col items-center text-center">
      {/* Background Check Icon Glow */}
      <div className="absolute top-10 w-40 h-40 md:w-56 md:h-56 bg-green-500/10 rounded-full blur-3xl"></div>

      {/* Governance Badge */}
      <div className="bg-green-900/30 border border-green-500 text-green-400 text-xs font-semibold px-3 py-1 rounded mb-6 w-fit relative z-10">
        GOVERNANCE
      </div>

      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">
        Built with <span className="text-green-400">Security</span> at the Core
      </h2>

      {/* Description */}
      <p className="text-gray-400 text-sm md:text-base max-w-2xl leading-relaxed relative z-10">
        All contracts audited. Optional liquidity locks up to 4 years. Wallet
        limits and anti-bot measures. Permanent storage via IPFS/Arweave.
      </p>
    </section>
  );
};

export default LastSection;
