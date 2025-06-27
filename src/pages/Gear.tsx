import cameraImg from "../assets/gears/camera2.jpg";
import lensImg from "../assets/gears/lens.png";
import phoneImg from "../assets/gears/phone.png";

const gear = [
  {
    name: "Sony a6400",
    img: cameraImg,
    desc: "Mirrorless Camera",
  },
  {
    name: "Sigma 56mm f/1.4",
    img: lensImg,
    desc: "Prime Lens",
  },
  {
    name: "Samsung Galaxy S22+",
    img: phoneImg,
    desc: "Mobile Phone",
  },
];

export default function Gear() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center pt-4 pb-32">
      <h1 className="text-4xl font-bold text-white mb-36 mt-4">My Gear</h1>
      <div className="flex flex-col md:flex-row gap-32 items-center justify-center">
        {gear.map((item) => (
          <div key={item.name} className="flex flex-col items-center">
            <img
              src={item.img}
              alt={item.name}
              className="w-64 h-64 object-cover rounded-xl shadow-lg border border-gray-800 mb-4"
            />
            <div className="text-center">
              <h2 className="text-2xl text-white font-semibold">{item.name}</h2>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}