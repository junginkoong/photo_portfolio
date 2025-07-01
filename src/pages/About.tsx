import { useRef, useEffect, useState } from "react";
import backgroundHome from "../assets/others/background_home.jpg";
import aboutMeImg from "../assets/others/aboutme.jpg";
import ScrollToTopButton from "../components/ScrollToTopButton";

export default function About() {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate zoom and translate based on scroll
  const maxZoom = 1.2;
  const minZoom = 1.0;
  const maxScroll = 600; // px after which zoom stops decreasing
  const zoom =
    maxZoom - ((maxZoom - minZoom) * Math.min(scrollY, maxScroll)) / maxScroll;
  const translateY = -Math.min(scrollY, maxScroll) * 0.25; // slower upward movement

  // Calculate scale and opacity for the "ABOUT ME" text
  const minScale = 0.7;
  const scale =
    1 - ((1 - minScale) * Math.min(scrollY, maxScroll)) / maxScroll;
  const opacity =
    1 - (0.7 * Math.min(scrollY, maxScroll)) / maxScroll; // fades to 0.3

  return (
    <div ref={containerRef} className="relative min-h-screen w-full bg-black">
      {/* Hero Section */}
      <div
        className="fixed top-0 left-0 w-full h-screen z-0 overflow-hidden"
        style={{
          pointerEvents: "none",
          willChange: "transform",
        }}
      >
        <img
          src={backgroundHome}
          alt="Background"
          className="w-full h-full object-cover"
          style={{
            transform: `scale(${zoom}) translateY(${translateY}px)`,
            transition: "transform 0.1s linear",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1
            className="text-white text-9xl font-extrabold drop-shadow-lg text-center select-none"
            style={{
              transform: `scale(${scale})`,
              opacity: opacity,
              transition: "transform 0.1s linear, opacity 0.1s linear",
            }}
          >
            ABOUT ME
          </h1>
        </div>
      </div>
      {/* Spacer for scroll */}
      <div className="h-screen" />
      {/* Content below */}
      <div className="relative z-10 bg-black w-full min-h-[80vh] pt-16 px-4 flex flex-col items-center">
        <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="flex-1 text-white text-xl flex flex-col justify-center items-start">
            <p>
              By day, I’m a software engineer—but my true passion lies behind the lens.<br /><br />
              I’ve developed a deep love for street photography, capturing fleeting moments and subtle stories as I travel the world.<br /><br />
              For me, it’s all about preserving the atmosphere of a place and the emotion of a moment.<br /><br />
              This portfolio is a reflection of my journey, and I’m excited to keep exploring, learning, and sharing what I see along the way.
            </p>
          </div>
          <div className="flex-1 flex justify-center items-center py-20">
            <img
              src={aboutMeImg}
              alt="About Me"
              className="w-full max-w-md rounded-2xl shadow-2xl border-2 border-gray-800 object-cover"
            />
          </div>
        </div>
      </div>
      <ScrollToTopButton/>
    </div>
  );
}