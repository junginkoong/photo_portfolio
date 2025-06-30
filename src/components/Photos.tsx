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
import zurichtitle from "../assets/zurich/zurich_title.jpg";
import zurich1 from "../assets/zurich/zurich1.jpg";
import zurich2 from "../assets/zurich/zurich2.jpg";
import zurich3 from "../assets/zurich/zurich3.jpg";
import zurich4 from "../assets/zurich/zurich4.jpg";
import zurich5 from "../assets/zurich/zurich5.jpg";
import zurich6 from "../assets/zurich/zurich6.jpg";
import hongkong1 from "../assets/hongkong/hk1.jpg";
import hongkong2 from "../assets/hongkong/hk2.jpg";
import hongkong3 from "../assets/hongkong/hk3.jpg";
import hongkong4 from "../assets/hongkong/hk4.jpg";
import hongkong5 from "../assets/hongkong/hk5.jpg";
import hongkong6 from "../assets/hongkong/hk6.jpg";
import hongkong7 from "../assets/hongkong/hk7.jpg";
import hongkong8 from "../assets/hongkong/hk8.jpg";
import hongkong9 from "../assets/hongkong/hk9.jpg";
import hongkong10 from "../assets/hongkong/hk10.jpg";
import hongkong11 from "../assets/hongkong/hk11.jpg";
import hongkongtitle from "../assets/hongkong/hk_title.jpg";

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

const zurichPhotos: Photo[] = [
  { src: zurich1, alt: "" },
  { src: zurich2, alt: "" },
  { src: zurich3, alt: "" },
  { src: zurich4, alt: "" },
  { src: zurich5, alt: "" },
  { src: zurich6, alt: "" },
];

const hongkongPhotos: Photo[] = [
  { src: hongkong1, alt: "" },
  { src: hongkong2, alt: "" },
  { src: hongkong3, alt: "" },
  { src: hongkong4, alt: "" },
  { src: hongkong5, alt: "" },
  { src: hongkong6, alt: "" },
  { src: hongkong7, alt: "" },
  { src: hongkong8, alt: "" },
  { src: hongkong9, alt: "" },
  { src: hongkong10, alt: "" },
  { src: hongkong11, alt: "" },
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

const galleryHongKong: Photo[] = [
    { src: hongkong1, alt: "Vienna 2" },
    { src: hongkong3, alt: "Vienna 3" },
    { src: hongkong5, alt: "Vienna 4" },
    { src: hongkong7, alt: "Vienna 5" },
    { src: hongkong8, alt: "Vienna 6" },
    { src: hongkong9, alt: "Vienna 7" },
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
    getMunichCover: (): Photo => ({ src: munich12, alt: "Munich Cover" }),
    getMunichGallery: (): Photo[] => galleryMunich,

    getVienna: (): Photo[] => viennaPhotos,
    getViennaCover: (): Photo => ({ src: vienna8, alt: "Vienna Cover" }),
    getViennaGallery: (): Photo[] => galleryVienna,

    getHongKong: (): Photo[] => hongkongPhotos,
    getHongKongCover: (): Photo => ({ src: hongkongtitle, alt: "Hong Kong Cover" }),
    getHongKongGallery: (): Photo[] => galleryHongKong,

    getZurich: (): Photo[] => zurichPhotos,
    getZurichCover: (): Photo => ({ src: zurichtitle, alt: "Zurich Cover" }),
    getZurichGallery: (): Photo[] => zurichPhotos,
};

export default Photos;