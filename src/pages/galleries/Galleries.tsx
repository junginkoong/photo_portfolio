import { useEffect, useState } from "react";
import { useRef } from "react";
import img3 from "../../assets/munich/img3.jpg";
import img4 from "../../assets/munich/img4.jpg";
import img6 from "../../assets/munich/img6.jpg";
import img7 from "../../assets/munich/img7.jpg";
import img8 from "../../assets/munich/img8.jpg";
import img9 from "../../assets/munich/img9.jpg";
import vienna1 from "../../assets/vienna/vienna2.JPG";
import vienna2 from "../../assets/vienna/vienna3.JPG";
import vienna3 from "../../assets/vienna/vienna4.JPG";
import vienna4 from "../../assets/vienna/vienna5.JPG";
import vienna5 from "../../assets/vienna/vienna6.JPG";
import vienna6 from "../../assets/vienna/vienna7.JPG";

const photos = [
  // Replace with your actual photo data
  { src: img3, alt: "Photo 1" },
  { src: img4, alt: "Photo 2" },
  { src: img6, alt: "Photo 3" },
  { src: img7, alt: "Photo 3" },
  { src: img8, alt: "Photo 3" },
  { src: img9, alt: "Photo 3" },
  // Add more photos as needed
];

const vienna_photos = [
  // Replace with your actual photo data
  { src: vienna1, alt: "Photo 1" },
  { src: vienna2, alt: "Photo 2" },
  { src: vienna3, alt: "Photo 3" },
  { src: vienna4, alt: "Photo 3" },
  { src: vienna5, alt: "Photo 3" },
  { src: vienna6, alt: "Photo 3" },
  // Add more photos as needed
];

export default function Galleries() {
  // First row (Munich)
  const [current1, setCurrent1] = useState(0);
  const [prev1, setPrev1] = useState<number | null>(null);
  const [transitioning1, setTransitioning1] = useState(false);

  // Timer ref to avoid overlapping transitions
  const timer1 = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Second row (Vienna)
  const [current2, setCurrent2] = useState(0);
  const [prev2, setPrev2] = useState<number | null>(null);
  const [transitioning2, setTransitioning2] = useState(false);

  // Timer ref to avoid overlapping transitions
  const timer2 = useRef<ReturnType<typeof setTimeout> | null>(null);

  // First row (Munich)
  useEffect(() => {
    const interval = setInterval(() => {
      setPrev1(current1);
      setTransitioning1(true);
      timer1.current = setTimeout(() => {
        setCurrent1((idx) => (idx + 1) % photos.length);
        setTransitioning1(false);
        setPrev1(null);
      }, 1000); // match your CSS duration
    }, 5000);

    return () => {
      clearInterval(interval);
      if (timer1.current) clearTimeout(timer1.current);
    };
  }, [current1]);

   // First row (Munich)
  useEffect(() => {
    const interval = setInterval(() => {
      setPrev2(current1);
      setTransitioning2(true);
      timer1.current = setTimeout(() => {
        setCurrent2((idx) => (idx + 1) % photos.length);
        setTransitioning2(false);
        setPrev2(null);
      }, 1000); // match your CSS duration
    }, 5000);

    return () => {
      clearInterval(interval);
      if (timer1.current) clearTimeout(timer1.current);
    };
  }, [current1]);

  return (
    <div className="min-h-screen bg-black flex flex-col gap-24 items-center justify-center px-0 py-16">
      
      <div className="flex w-full items-center bg-gray-950">
        {/* Left: Destination */}
        <div className="w-2/4 flex flex-col justify-center items-center h-96 pl-8">
          <h2 className="text-5xl font-bold text-white mb-6 font-oswald text-center">Germany - Munich</h2>
          <p className="text-gray-400 text-lg text-center">
            Explore the vibrant streets, tranquil temples, and stunning landscapes of Munich.
          </p>
          <button
            onClick={() => window.location.href = "/collections/munich"}
            className="mt-8 px-6 py-2 rounded-full bg-white/20 text-white font-semibold transition-all duration-200 hover:bg-white/40 hover:text-black focus:bg-white/60 focus:text-black"
          >
            View more &gt;
          </button>
        </div>
        {/* Right: Cross-fade Gallery (image flush right) */}
        <div className="relative w-[50%] h-96">
          {prev1 !== null && transitioning1 && (
            <img
              src={photos[prev1].src}
              alt={photos[prev1].alt}
              className="absolute inset-0 w-full h-full object-contain rounded-lg shadow-lg transition-opacity duration-1000"
              style={{ opacity: transitioning1 ? 1 : 0, zIndex: 10 }}
            />
          )}
          <img
            src={photos[current1].src}
            alt={photos[current1].alt}
            className="absolute inset-0 w-full h-full object-contain rounded-lg shadow-lg transition-opacity duration-1000"
            style={{ opacity: transitioning1 ? 0 : 1, zIndex: 20 }}
          />
        </div>
      </div>

      
      <div className="flex w-full items-center bg-gray-950">
        {/* Left: Cross-fade Gallery (image flush left) */}
        <div className="relative w-[50%] h-96">
          {prev2 !== null && transitioning2 && (
            <img
              src={vienna_photos[prev2].src}
              alt={vienna_photos[prev2].alt}
              className="absolute inset-0 w-full h-full object-contain rounded-lg shadow-lg transition-opacity duration-1000"
              style={{ opacity: transitioning2 ? 1 : 0, zIndex: 10 }}
            />
          )}
          <img
            src={vienna_photos[current2].src}
            alt={vienna_photos[current2].alt}
            className="absolute inset-0 w-full h-full object-contain rounded-lg shadow-lg transition-opacity duration-1000"
            style={{ opacity: transitioning2 ? 0 : 1, zIndex: 20 }}
          />
        </div>
        {/* Right: Destination */}
        <div className="w-2/4 flex flex-col justify-center items-center h-96 pr-8 text-center">
          <h2 className="text-5xl font-bold text-white mb-6 font-oswald text-center">Austria - Vienna</h2>
          <p className="text-gray-400 text-lg text-center">
            Explore the vibrant streets, tranquil temples, and stunning landscapes of Japan.
          </p>
          <button
            onClick={() => window.location.href = "/collections/vienna"}
            className="mt-8 px-6 py-2 rounded-full bg-white/20 text-white font-semibold transition-all duration-200 hover:bg-white/40 hover:text-black focus:bg-white/60 focus:text-black"
          >
            View more &gt;
          </button>
        </div>
      </div>
    </div>
  );
}