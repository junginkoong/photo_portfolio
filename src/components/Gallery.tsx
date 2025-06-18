import Masonry from 'react-masonry-css';
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";

const images = [
  { src: img4, alt: 'Street Musical Performance' },
  { src: img2, alt: 'Man Entrance' },
  { src: img3, alt: "Street Stall" },
  { src: img1, alt: 'Street Car Life' },
  { src: img6, alt: 'Chill Pasta House' },
  { src: img5, alt: 'Smoking Grandma' },
];

const breakpointColumnsObj = {
  default: 3,
  768: 2,
  640: 1
};

export const Gallery = () => {
  return (
    <div className="px-8 sm:px-64">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((img, i) => (
          <div key={i} className="overflow-hidden rounded-md shadow-lg bg-white">
            <img src={img.src} alt={img.alt} className="w-full h-auto object-contain " />
          </div>
        ))}
      </Masonry>
    </div>
  );
};
