import Masonry from 'react-masonry-css';
import ScrollImage from '../../components/ScrollImage';
import Photos from '../../components/Photos';

const breakpointColumnsObj = {
  default: 3,
  768: 2,
  640: 1
};

export default function RecentWork() {
    return (
        <div className="px-8 sm:px-64  bg-black text-white">
            <h1 className="text-4xl font-bold text-center mb-10">RECENT WORK</h1>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {Photos.getRecentWork().map((img, i) => (
                <div key={i} className="overflow-hidden rounded-md shadow-lg bg-black">
                    <ScrollImage src={img.src} alt={img.alt} />
                </div>
                ))}
            </Masonry>
        </div>
    )
}