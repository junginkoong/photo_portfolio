interface PhotoModalProps {
  photos: { src: string; alt: string }[];
  currentIdx: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function PhotoModal({ photos, currentIdx, onClose, onPrev, onNext }: PhotoModalProps) {
  if (currentIdx < 0 || currentIdx >= photos.length) return null;
  const photo = photos[currentIdx];

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
      <button className="absolute top-6 right-8 text-white text-3xl" onClick={onClose}>&times;</button>
      <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl px-2" onClick={onPrev}>&#8592;</button>
      <img
        src={photo.src}
        alt={photo.alt}
        className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-2xl border-2 border-gray-700"
      />
      <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl px-2" onClick={onNext}>&#8594;</button>
    </div>
  );
}