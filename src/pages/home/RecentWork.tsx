import { useState } from 'react';
import Masonry from 'react-masonry-css';
import ScrollImage from '../../components/ScrollImage';
import Photos from '../../components/Photos';
import PhotoModal from '../../components/PhotoModal'; // Make sure this path is correct

const breakpointColumnsObj = {
  default: 3,
  768: 2,
  640: 1
};

export default function RecentWork() {
  const [modalIdx, setModalIdx] = useState<number | null>(null);
  const recentPhotos = Photos.getRecentWork();

  const openModal = (idx: number) => setModalIdx(idx);
  const closeModal = () => setModalIdx(null);
  const showPrev = () => setModalIdx(idx => (idx! - 1 + recentPhotos.length) % recentPhotos.length);
  const showNext = () => setModalIdx(idx => (idx! + 1) % recentPhotos.length);

  return (
    <div className="px-8 sm:px-64 bg-black text-white">
      <h1 className="text-4xl font-bold text-center mb-10">RECENT WORK</h1>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {recentPhotos.map((img, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-md shadow-lg bg-black cursor-pointer"
            onClick={() => openModal(i)}
            tabIndex={0}
            role="button"
            onKeyDown={e => {
              if (e.key === "Enter" || e.key === " ") openModal(i);
            }}
          >
            <ScrollImage src={img.src} alt={img.alt} />
          </div>
        ))}
      </Masonry>
      {modalIdx !== null && (
        <PhotoModal
          photos={recentPhotos}
          currentIdx={modalIdx}
          onClose={closeModal}
          onPrev={showPrev}
          onNext={showNext}
        />
      )}
    </div>
  );
}