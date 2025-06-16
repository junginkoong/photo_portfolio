import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";

const images = [
  { src: img1, alt: 'Mountain B&W' },
  { src: img2, alt: 'Surreal Moonfall' },
  { src: img3, alt: "Image 2" },
  { src: img4, alt: 'Snowy Road' },
  { src: img5, alt: 'Sunset Canyon' },
  { src: img6, alt: 'Golden Cliffs' },
];

export const Gallery = () => {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {images.map((img, i) => (
        <div key={i} className="overflow-hidden rounded-md shadow-lg">
          <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
  );
};
