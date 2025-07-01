import { useState, useEffect } from "react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = docHeight > 0 ? scrollTop / docHeight : 0;
      setProgress(percent);
      setVisible(scrollTop > 200);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // SVG circle progress parameters
  const size = 48;
  const stroke = 4;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - progress);

  return visible ? (
    <button
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-50 bg-gray-800 bg-opacity-80 hover:bg-gray-600 text-white rounded-full shadow-lg transition-all flex items-center justify-center"
      aria-label="Scroll to top"
      style={{ width: size, height: size, padding: 0 }}
    >
      <span className="relative flex items-center justify-center w-full h-full">
        <svg
          width={size}
          height={size}
          className="absolute top-0 left-0"
          style={{ pointerEvents: "none" }}
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#fff"
            strokeWidth={stroke}
            fill="none"
            opacity={0.2}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#fff"
            strokeWidth={stroke}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{
              transition: "stroke-dashoffset 0.2s linear",
              transform: "rotate(-90deg)",
              transformOrigin: "50% 50%",
            }}
          />
        </svg>
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          className="relative z-10"
        >
          <path
            d="M12 19V5M12 5L5 12M12 5l7 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </button>
  ) : null;
}