"use client";

import { FaShieldAlt, FaLock, FaRobot, FaDatabase } from "react-icons/fa";

const SecuritySection = () => {
  return (
    <section className="w-full bg-black bg-dot-grid text-white py-20 px-6 flex flex-col items-center">
      {/* Top Badge */}
      <div className="bg-green-900/30 border border-green-500 text-green-400 text-xs font-semibold px-3 py-1 rounded mb-6">
        SECURITY
      </div>

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Built with Security at the Core
      </h2>
      <p className="text-gray-400 text-center max-w-3xl mb-16">
        All contracts audited. Optional liquidity locks up to 4 years. Wallet
        limits and anti-bot measures. Permanent storage via IPFS/Arweave.
      </p>

      {/* Security Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl">
        {/* Card 1 */}
        <div className="bg-[#0c0c0c] border border-green-900 rounded-xl p-6 flex flex-col items-center text-center hover:border-green-500 transition">
          <FaShieldAlt className="text-green-500 text-5xl mb-4 drop-shadow-[0_0_10px_rgba(0,255,0,0.5)]" />
          <h3 className="font-semibold mb-2">Audited Smart Contracts</h3>
          <p className="text-gray-400 text-sm">
            All contracts independently verified for safety.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#0c0c0c] border border-green-900 rounded-xl p-6 flex flex-col items-center text-center hover:border-green-500 transition">
          <FaLock className="text-green-500 text-5xl mb-4 drop-shadow-[0_0_10px_rgba(0,255,0,0.5)]" />
          <h3 className="font-semibold mb-2">Liquidity Locks</h3>
          <p className="text-gray-400 text-sm">
            Optional locks up to 4 years for investor assurance.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#0c0c0c] border border-green-900 rounded-xl p-6 flex flex-col items-center text-center hover:border-green-500 transition">
          <FaRobot className="text-green-500 text-5xl mb-4 drop-shadow-[0_0_10px_rgba(0,255,0,0.5)]" />
          <h3 className="font-semibold mb-2">Wallet & Anti-Bot Protection</h3>
          <p className="text-gray-400 text-sm">
            Limits and measures to prevent bot exploitation.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-[#0c0c0c] border border-green-900 rounded-xl p-6 flex flex-col items-center text-center hover:border-green-500 transition">
          <FaDatabase className="text-green-500 text-5xl mb-4 drop-shadow-[0_0_10px_rgba(0,255,0,0.5)]" />
          <h3 className="font-semibold mb-2">Permanent Data Storage</h3>
          <p className="text-gray-400 text-sm">
            Immutable storage via IPFS/Arweave.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
