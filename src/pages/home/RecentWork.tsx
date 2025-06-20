import Masonry from 'react-masonry-css';
import ScrollImage from '../../components/ScrollImage';
import img1 from "../../assets/munich/img1.jpg";
import img2 from "../../assets/munich/img2.jpg";
import img3 from "../../assets/munich/img3.jpg";
import img4 from "../../assets/munich/img4.jpg";
import img5 from "../../assets/munich/img5.jpg";
import img6 from "../../assets/munich/img6.jpg";
import img7 from "../../assets/munich/img7.jpg";
import img8 from "../../assets/munich/img8.jpg";
import img9 from "../../assets/munich/img9.jpg";

const images = [
  { src: img4, alt: 'Street Musical Performance' },
  { src: img2, alt: 'Man Entrance' },
  { src: img3, alt: "Street Stall" },
  { src: img1, alt: 'Street Car Life' },
  { src: img6, alt: 'Chill Pasta House' },
  { src: img5, alt: 'Smoking Grandma' },
  { src: img7, alt: ''},
  { src: img8, alt: ''},
  { src: img9, alt: ''},
];

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
                {images.map((img, i) => (
                <div key={i} className="overflow-hidden rounded-md shadow-lg bg-black">
                    <ScrollImage src={img.src} alt={img.alt} />
                </div>
                ))}
            </Masonry>
        </div>
    )
}