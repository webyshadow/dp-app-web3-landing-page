import { FC } from "react";

const Vision: FC = () => {
  return (
    <section className="relative w-full bg-black bg-dot-grid flex justify-center items-center px-3 py-20">
       {/* Glow Left */}
  <div className="absolute left-0 top-0 h-full w-[200px] bg-green-500/20 blur-[120px] pointer-events-none"></div>

  {/* Glow Right */}
  <div className="absolute right-0 top-0 h-full w-[200px] bg-green-500/20 blur-[120px] pointer-events-none"></div>
      <div className="w-full max-w-7xl rounded-3xl overflow-hidden shadow-[0_0_25px_rgba(0,0,0,0.6)] flex flex-col md:flex-row items-center bg-black/80">
        
        {/* Left Side - Video */}
        <div className="flex-[1.3] p-6 md:p-10 flex justify-center items-center">
          <div className="w-full aspect-video rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.5)] overflow-hidden">
            <video
              src="/video.mp4" // apna video path yahan daal
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="flex-[0.9] p-10 md:p-16 text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Token creation made effortless
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            We believe token creation should be as easy as sending a tweet.
            Blockchain adoption is hindered by fragmented ecosystems, technical
            barriers, and inconsistent launch standards. <br /> <br />
            Deploy solves these problems by unifying networks, removing coding
            requirements, automating liquidity and market listing,
            standardizing fair launch rules, and fostering community-driven
            discovery.
          </p>

        </div>
      </div>
    </section>
  );
};

export default Vision;
