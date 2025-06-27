import { useEffect, useState } from "react";

interface RowgalleryProps {
  photos: { src: string; alt: string }[];
  title: string;
  description: string;
  buttonUrl: string;
  reverse?: boolean;
}


export default function Rowgallery({ photos, title, description, buttonUrl, reverse }: RowgalleryProps) {
    const [current, setCurrent] = useState(0);
    const [prev, setPrev] = useState<number | null>(null);
    const [isFading, setIsFading] = useState(false);
    // Define durations in milliseconds
    const fadeDuration = 1500;
    const displayDuration = 3500;

    useEffect(() => {
    let fadeTimeout: ReturnType<typeof setTimeout>;
    let displayTimeout: ReturnType<typeof setTimeout>;

    displayTimeout = setTimeout(() => {
        setPrev(current);
        setIsFading(true);
        fadeTimeout = setTimeout(() => {
        setCurrent((c) => (c + 1) % photos.length);
        setIsFading(false);
        setPrev(null);
        }, fadeDuration);
    }, displayDuration);

    return () => {
        clearTimeout(displayTimeout);
        clearTimeout(fadeTimeout);
    };
    }, [current, photos.length]);


    return (
        <div className="flex w-full items-center bg-gray-950">
            {!reverse ? (
            <div className="w-2/4 flex flex-col justify-center items-center h-96 pl-8">
                <h2 className="text-5xl font-bold text-white mb-6 font-oswald text-center">{title}</h2>
                <p className="text-gray-400 text-lg text-center">
                {description}
                </p>
                <button
                onClick={() => window.location.href = buttonUrl}
                className="mt-8 px-6 py-2 rounded-full bg-white/20 text-white font-semibold transition-all duration-200 hover:bg-white/40 hover:text-black focus:bg-white/60 focus:text-black"
                >
                View more &gt;
                </button>
            </div>
            ) : null}
            {/* Right: Cross-fade Gallery (image flush right) */}
            <div className="relative w-[50%] h-96 flex items-center justify-center">
                {prev !== null && isFading && (
                    <img
                    src={photos[prev].src}
                    alt={photos[prev].alt}
                    className="absolute inset-0 w-full h-full object-contain rounded-lg shadow-lg transition-opacity duration-[1500ms]"
                    style={{ opacity: 0, zIndex: 10 }}
                    />
                )}
                <img
                    src={photos[current].src}
                    alt={photos[current].alt}
                    className="absolute inset-0 w-full h-full object-contain rounded-lg shadow-lg transition-opacity duration-[1500ms]"
                    style={{ opacity: isFading ? 1 : 1, zIndex: 20 }}
                />
            </div>
            {reverse ? (
            <div className="w-2/4 flex flex-col justify-center items-center h-96 pl-8">
                <h2 className="text-5xl font-bold text-white mb-6 font-oswald text-center">{title}</h2>
                <p className="text-gray-400 text-lg text-center">
                {description}
                </p>
                <button
                onClick={() => window.location.href = buttonUrl}
                className="mt-8 px-6 py-2 rounded-full bg-white/20 text-white font-semibold transition-all duration-200 hover:bg-white/40 hover:text-black focus:bg-white/60 focus:text-black"
                >
                View more &gt;
                </button>
            </div>
            ) : null}
        </div>
    )
}