import { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Masonry from "react-masonry-css";
import ScrollImage from "../../components/ScrollImage";
import Photos from "../../components/Photos";
import SideBar from "./SideBar";

// Example data structure
const collections = [
  {
    country: "Germany - Munich",
    cover: Photos.getMunichCover(),
    photos: Photos.getMunich(),
    description: "A vibrant collection of street photography from Munich, capturing the essence of the city.",
  },
  {
    country: "Austria - Vienna",
    cover: Photos.getViennaCover(),
    photos: Photos.getVienna(),
    description: "A captivating journey through Vienna, showcasing its rich history and stunning architecture.",
  },
  // Add more countries/cities as needed
];

const breakpointColumnsObj = {
  default: 3,
  1024: 2,
  640: 1,
};

export default function Collections() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIdx, setActiveIdx] = useState(0);
  const [progress, setProgress] = useState(0); // 0 to 1
  const location = useLocation();

  // Scroll progress logic
  useEffect(() => {
    const handleScroll = () => {
      const sectionTops = sectionRefs.current.map(ref =>
        ref ? ref.getBoundingClientRect().top + window.scrollY : Infinity
      );
      const pageY = window.scrollY + window.innerHeight / 2;

      // Find which section we're in
      let idx = sectionTops.findIndex(top => pageY < top);
      if (idx === -1) idx = collections.length;
      const prevTop = sectionTops[idx - 1] ?? 0;
      const nextTop = sectionTops[idx] ?? document.body.scrollHeight;

      // Calculate progress between prevTop and nextTop
      const localProgress = Math.min(
        1,
        Math.max(0, (pageY - prevTop) / (nextTop - prevTop))
      );
      const globalProgress = (idx - 1 + localProgress) / (collections.length - 1 || 1);

      setActiveIdx(idx - 1 < 0 ? 0 : idx - 1);
      setProgress(globalProgress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section on circle click
  const scrollToSection = (idx: number) => {
    sectionRefs.current[idx]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Scroll to hash section on mount
  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.replace("#", "").toLowerCase();
      const idx = collections.findIndex(col =>
        col.country.toLowerCase().includes(hash)
      );
      if (idx !== -1) {
        setTimeout(() => {
          sectionRefs.current[idx]?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 200); // Delay to ensure refs are set
      }
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-black px-0 py-12 flex flex-row items-start relative">
      {/* Timeline Bar */}
      <SideBar
        collections={collections}
        activeIdx={activeIdx}
        progress={progress}
        scrollToSection={scrollToSection}
      />
      {/* Main content */}
      <div className="flex-1 flex flex-col items-center ml-0 sm:ml-20 w-full">
        {collections.map((col, idx) => (
          <div
            key={col.country}
            ref={el => {
              sectionRefs.current[idx] = el;
            }}
            className="mb-24 w-full flex flex-col items-center scroll-mt-32"
          >
            {/* Title and cover image row */}
            <div className="w-full max-w-screen-xl flex flex-row items-center justify-center mb-40 gap-12 px-4">
              <div className="flex-1 flex flex-col items-center justify-center">
                <h2 className="text-6xl font-bold text-white text-center">{col.country}</h2>
                <p className="text-lg text-gray-300 mt-4 text-center max-w-2xl">
                  {col.description || "A special journey through " + col.country + "."}
                </p>
              </div>
              <div className="flex-1 flex items-center justify-center" >
                <ScrollImage
                  src={col.cover.src}
                  alt={col.cover.alt}
                  className="w-full object-cover rounded-2xl shadow-2xl border-2 border-gray-800"
                />
              </div>
            </div>
            {/* Masonry grid */}
            <div className="w-full flex justify-center">
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid w-full max-w-screen-xl"
                columnClassName="my-masonry-grid_column"
              >
                {col.photos.map((photo, pidx) => (
                  <ScrollImage
                    key={pidx}
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full mb-6 object-cover rounded-lg shadow-lg border border-gray-800"
                  />
                ))}
              </Masonry>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}