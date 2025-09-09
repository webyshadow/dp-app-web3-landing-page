"use client";
import Image from "next/image";

const TokenEcosystem = () => {
  return (
    <section className="w-full bg-black bg-dot-grid text-white py-20 px-6 flex flex-col items-center">
      {/* Tag */}
      <div className="bg-green-900/30 border border-green-500 text-green-400 text-xs font-semibold px-3 py-1 rounded mb-6 w-fit relative z-10">
        THE DEPLOY TOKEN
      </div>

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Powering the Deploy Ecosystem
      </h2>
      <p className="text-gray-400 text-center max-w-2xl mb-12">
        Ticker: DEPLOY — Multi-chain utility token with fixed max supply of
        1,000,000,000. Utilities include discounted fees, staking for premium
        features, governance voting, and revenue sharing
      </p>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          <div className="bg-[#111] rounded-xl p-6 shadow-lg transform rotate-[-3deg]">
            <h3 className="text-green-400 font-semibold mb-2">
              Discounted Fees
            </h3>
            <p className="text-gray-400 text-sm">
              Save more with lower platform fees.
            </p>
          </div>
          <div className="bg-[#111] rounded-xl p-6 shadow-lg transform rotate-[2deg]">
            <h3 className="text-green-400 font-semibold mb-2">
              Staking for Premium Features
            </h3>
            <p className="text-gray-400 text-sm">
              Unlock exclusive benefits and tools.
            </p>
          </div>
        </div>

        {/* Middle Column (Logo/Image) */}
        <div className="flex justify-center items-center">
          <div className="bg-[#111] rounded-2xl p-10 shadow-xl">
            <Image
              src="/placeholder.png" // apni image yahan daal dena
              alt="Deploy Token"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          <div className="bg-[#111] rounded-xl p-6 shadow-lg transform rotate-[3deg]">
            <h3 className="text-green-400 font-semibold mb-2">
              Governance Voting
            </h3>
            <p className="text-gray-400 text-sm">
              Help decide platform direction.
            </p>
          </div>
          <div className="bg-[#111] rounded-xl p-6 shadow-lg transform rotate-[-2deg]">
            <h3 className="text-green-400 font-semibold mb-2">
              Revenue Sharing
            </h3>
            <p className="text-gray-400 text-sm">
              Earn a share of platform growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenEcosystem;
