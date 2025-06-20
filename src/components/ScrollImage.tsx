import { useRef, useEffect, useState } from "react";

interface ScrollImageProps {
  src: string;
  alt?: string;
  className?: string;
}

export default function ScrollImage({ src, alt, className }: ScrollImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`bg-black overflow-hidden transition-all duration-700 ease-out  ${
        visible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-8 scale-95"
      }`}
    >
      <img src={src} alt={alt} className={`w-full h-full object-cover rounded shadow-lg ${className || ""}`} />
    </div>
  );
}