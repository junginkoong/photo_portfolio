interface SideBarProps {
  collections: { country: string }[];
  activeIdx: number;
  progress: number;
  scrollToSection: (idx: number) => void;
}

export default function SideBar({ collections, activeIdx, progress, scrollToSection }: SideBarProps) {
  return (
    <div className="sticky top-32 left-0 h-[80vh] flex flex-col items-center z-20" style={{ minWidth: 80 }}>
      <div className="relative h-full flex flex-col items-center justify-between py-8">
        {/* Vertical bar */}
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 w-1 bg-gray-300 rounded-full z-10 transition-all duration-300"
          style={{
            height: `${progress * 100}%`,
          }}
        />
        {/* Circles */}
        {collections.map((col, idx) => (
          <div
            key={col.country}
            className="relative z-10 flex flex-col items-center group cursor-pointer"
            style={{ marginBottom: idx !== collections.length - 1 ? "3.5rem" : 0 }}
            onClick={() => scrollToSection(idx)}
          >
            <div
              className={`w-5 h-5 rounded-full border-4 flex items-center justify-center transition-all duration-300
                ${activeIdx === idx ? "border-gray-300 bg-gray-300 shadow-lg scale-110" : "border-gray-500 bg-gray-800"}
              `}
            />
            {/* Tooltip */}
            <span className="absolute left-10 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">
              {col.country}
            </span>
          </div>
        ))}
        {/* Progress bar overlay */}
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 w-1 bg-gray-300 rounded-full z-10 transition-all duration-300"
          style={{
            height: `${(activeIdx / (collections.length - 1 || 1)) * 100}%`,
          }}
        />
      </div>
    </div>
  );
}