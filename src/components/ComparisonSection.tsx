"use client";

const ComparisonSection = () => {
  return (
    <section className="w-full bg-black bg-dot-grid text-white py-20 px-6 flex flex-col items-center text-center">
      {/* Top Badge */}
      <div className="bg-green-900/30 border border-green-500 text-green-400 text-xs font-semibold px-3 py-1 rounded mb-6 w-fit">
        COMPETITIVE ADVANTAGE
      </div>

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        What Sets Deploy Apart
      </h2>

      {/* Subtext */}
      <p className="text-gray-400 text-sm md:text-base max-w-2xl leading-relaxed mb-16">
        Discover how Deploy outperforms other platforms with unmatched features,
        better performance, and greater value.
      </p>

      {/* Comparison Grid */}
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
        {/* Left Card */}
        <div className="bg-[#0b0b0b] border border-gray-800 rounded-xl p-6 w-full md:w-[30%] text-left">
          <h3 className="font-bold mb-4">Other Platforms</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li>- Limited to single-chain launches</li>
            <li>- Weak or no discovery tools</li>
            <li>- No native token utility</li>
            <li>- No cross-chain liquidity</li>
            <li>- No revenue sharing</li>
            <li>- Limited or no security features</li>
          </ul>
        </div>

        {/* VS Badge */}
        <div className="text-green-500 font-bold text-lg border border-green-500 rounded-full px-6 py-2 shadow-lg shadow-green-500/30">
          VS
        </div>

        {/* Right Card */}
        <div className="bg-[#0b0b0b] border border-gray-800 rounded-xl p-6 w-full md:w-[30%] text-left">
          <h3 className="font-bold mb-4">Deploy</h3>
          <ul className="space-y-3 text-green-400 text-sm">
            <li>- Multi-chain capability</li>
            <li>- Powerful discovery tools</li>
            <li>- DEPLOY token utility</li>
            <li>- Cross-chain liquidity</li>
            <li>- Revenue sharing</li>
            <li>- Advanced security features</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
