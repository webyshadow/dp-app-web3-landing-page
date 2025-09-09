"use client";

import { FaStar } from "react-icons/fa";

const RevenueModel = () => {
  return (
    <section className="w-full bg-black bg-dot-grid text-white py-20 px-6 flex flex-col items-center">
      {/* Tag */}
      <div className="bg-green-900/30 border border-green-500 text-green-400 text-xs font-semibold px-3 py-1 rounded mb-6 w-fit relative z-10">
        REVENUE MODEL
      </div>

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Transparent & Sustainable Revenue Structure
      </h2>
      <p className="text-gray-400 text-center max-w-3xl mb-12">
        Launch fee: 1% of raised funds (0.5% if paid in DEPLOY). Trending boosts,
        premium analytics, and micro-fees for bridging services.
      </p>

      {/* Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
        {/* Card 1 */}
        <div className="bg-[#111] rounded-xl p-6 shadow-lg transform rotate-[-2deg]">
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
        </div>

        {/* Card 2 */}
        <div className="bg-[#111] rounded-xl p-6 shadow-lg transform rotate-[2deg]">
          <div className="flex items-center gap-2 mb-3">
            <FaStar className="text-green-400" />
            <h3 className="text-lg font-semibold">Trending Boosts</h3>
          </div>
          <p className="text-gray-400 text-sm">
            Feature your project in trending lists for maximum visibility.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#111] rounded-xl p-6 shadow-lg transform rotate-[-1deg]">
          <div className="flex items-center gap-2 mb-3">
            <FaStar className="text-green-400" />
            <h3 className="text-lg font-semibold">Revenue Sharing</h3>
          </div>
          <p className="text-gray-400 text-sm">
            Earn a share of platform growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RevenueModel;
