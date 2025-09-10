import Link from "next/link";
import { FC } from "react";
import { FaTwitter } from "react-icons/fa";
import { TbSend } from "react-icons/tb";

const Navbar: FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/60 backdrop-blur-md text-white shadow-lg z-50">
      <div className="w-full max-w-screen-2xl mx-auto flex items-center justify-between px-6 md:px-12 h-20 md:h-24 overflow-hidden">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 bg-green-400 rounded-sm shadow-[0_0_12px_#22c55e]" />
          <span className="font-semibold text-lg md:text-xl">Deploy</span>
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-10 text-gray-300">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/pain-point">Pain Point</Link></li>
          <li><Link href="/solution">Solution</Link></li>
          <li><Link href="/token">Token</Link></li>
          <li><Link href="/roadmap">Roadmap</Link></li>
          <li><Link href="/docs">Docs</Link></li>
        </ul>

        {/* Icons + CTA */}
        <div className="flex items-center gap-4">
          <TbSend className="text-green-400 drop-shadow-[0_0_8px_#22c55e] text-xl cursor-pointer hover:scale-110 transition" />
          <FaTwitter className="text-green-400 drop-shadow-[0_0_8px_#22c55e] text-xl cursor-pointer hover:scale-110 transition" />

          <button
            className="hidden sm:block ml-2 px-6 md:px-8 py-2.5 md:py-3.5 rounded-full font-semibold 
            bg-green-400 text-black 
            shadow-[0_0_12px_#22c55e] hover:shadow-[0_0_20px_#22c55e] 
            hover:bg-green-300 transition duration-300 text-sm md:text-base"
          >
            Try It Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
