import Link from "next/link";
import { FC } from "react";
import { FaTwitter } from "react-icons/fa";
import { TbSend } from "react-icons/tb";

const Navbar: FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/45 backdrop-blur-md text-white flex items-center justify-between px-8 py-4 shadow-lg z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="h-5 w-5 bg-green-400 rounded-sm shadow-[0_0_10px_#22c55e]" />
        <span className="font-semibold text-lg">Deploy</span>
      </div>

      {/* Nav Links */}
      <ul className="hidden md:flex items-center gap-8 text-gray-300">
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
        
        <button className="ml-4 px-6 py-2 rounded-full font-semibold 
          bg-green-400 text-black 
          shadow-[0_0_12px_#22c55e] hover:shadow-[0_0_20px_#22c55e] 
          hover:bg-green-300 transition duration-300">
          Try It Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
