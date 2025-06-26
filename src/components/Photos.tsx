// Example imports (adjust paths and filenames as needed)
import munich1 from "../assets/munich/img1.jpg";
import munich2 from "../assets/munich/img2.jpg";
import munich3 from "../assets/munich/img3.jpg";
import munich4 from "../assets/munich/img4.jpg";
import munich5 from "../assets/munich/img5.jpg";
import munich6 from "../assets/munich/img6.jpg";
import munich7 from "../assets/munich/img7.jpg";
import munich8 from "../assets/munich/img8.jpg";
import munich9 from "../assets/munich/img9.jpg";
import munich10 from "../assets/munich/img10.jpg";
import munich11 from "../assets/munich/img11.jpg";
import munich12 from "../assets/munich/munichCover.png";
import vienna1 from "../assets/vienna/vienna1.jpg";
import vienna2 from "../assets/vienna/vienna2.jpg";
import vienna3 from "../assets/vienna/vienna3.JPG";
import vienna4 from "../assets/vienna/vienna4.jpg";
import vienna5 from "../assets/vienna/vienna5.jpg";
import vienna6 from "../assets/vienna/vienna6.jpg";
import vienna7 from "../assets/vienna/vienna7.jpg";
import vienna8 from "../assets/vienna/vienna8.jpg";
// ...import more as needed

type Photo = { src: string; alt: string };

const munichPhotos: Photo[] = [
    { src: munich4, alt: "Munich 4" },
    { src: munich2, alt: "Munich 2" },
    { src: munich3, alt: "Munich 3" },
    { src: munich1, alt: "Munich 1" },
    { src: munich6, alt: "Munich 5" },
    { src: munich5, alt: "Munich 6" },
    { src: munich7, alt: "Munich 7" },
    { src: munich8, alt: "Munich 8" },
    { src: munich9, alt: "Munich 9" },
    { src: munich10, alt: "Munich 10" },
    { src: munich11, alt: "Munich 11" },
];

const viennaPhotos: Photo[] = [
  { src: vienna2, alt: "Vienna 2" },
  { src: vienna1, alt: "Vienna 1" },
  { src: vienna3, alt: "Vienna 3" },
  { src: vienna4, alt: "Vienna 4" },
  { src: vienna5, alt: "Vienna 5" },
  { src: vienna6, alt: "Vienna 6" },
  { src: vienna7, alt: "Vienna 7" },
];

const galleryMunich: Photo[] = [
    { src: munich4, alt: "Munich 4" },
    { src: munich3, alt: "Munich 3" },
    { src: munich6, alt: "Munich 5" },
    { src: munich7, alt: "Munich 7" },
    { src: munich8, alt: "Munich 8" },
    { src: munich9, alt: "Munich 9" },
]

const galleryVienna: Photo[] = [
    { src: vienna2, alt: "Vienna 2" },
    { src: vienna3, alt: "Vienna 3" },
    { src: vienna4, alt: "Vienna 4" },
    { src: vienna5, alt: "Vienna 5" },
    { src: vienna6, alt: "Vienna 6" },
    { src: vienna7, alt: "Vienna 7" },
]

const recentWork: Photo[] = [
    { src: munich4, alt: "Munich 4" },
    { src: munich2, alt: "Munich 2" },
    { src: munich3, alt: "Munich 3" },
    { src: munich1, alt: "Munich 1" },
    { src: munich6, alt: "Munich 5" },
    { src: munich5, alt: "Munich 6" },
    { src: munich7, alt: "Munich 7" },
    { src: munich8, alt: "Munich 8" },
    { src: munich9, alt: "Munich 9" },
]

const Photos = {
    getRecentWork: (): Photo[] => recentWork,

    getMunich: (): Photo[] => munichPhotos,
    getMunichCover: (): Photo => ({ src: munich12, alt: "Mujnich Cover" }),
    getMunichGallery: (): Photo[] => galleryMunich,

    getVienna: (): Photo[] => viennaPhotos,
    getViennaCover: (): Photo => ({ src: vienna8, alt: "Vienna Cover" }),
    getViennaGallery: (): Photo[] => galleryVienna,
};

export default Photos;