import { Link } from "react-router-dom";
import bg from "../../assets/others/background_home.jpg"

export default function Bio() {
    return (
        <div className="">
            <div className="flex min-h-screen  bg-black text-white">
                {/* Left: Photo */}
                <div className="w-1/2 h-screen relative mb-48">
                    <img
                    src={bg}
                    alt=""
                    className="w-full h-full object-cover"
                    />
                </div>

                {/* Right: Intro and Buttons */}
                <div className="w-1/2 flex flex-col justify-center items-center px-8">
                    <h2 className="text-8xl font-bold text-center mb-6 font-oswald">
                    Jung In's Studio
                    </h2>
                    <h3 className="text-2xl text-center text-gray-500 mb-16 font-oswald">
                    Photographer specializing in street, nature, and architectural photography<br/>
                    Capturing candid moments, natural beauty, and striking design through a storytelling lens.
                    </h3>
                    <div className="flex flex-wrap justify-center gap-4 mb-24">
                    <Link to="/collections#munich" className="px-6 py-2 rounded-full bg-transparent border border-gray-200 text-gray-300 font-semibold transition hover:bg-gray-500 hover:text-white">
                        Munich
                    </Link>
                    <Link to="/collections#vienna" className="px-6 py-2 rounded-full bg-transparent border border-gray-200 text-gray-300 font-semibold transition hover:bg-gray-500 hover:text-white">
                        Vienna
                    </Link>
                    <Link to="/collections#zurich" className="px-6 py-2 rounded-full bg-transparent border border-gray-200 text-gray-300 font-semibold transition hover:bg-gray-500 hover:text-white">
                        Zuirch
                    </Link>
                    <Link to="/collections#hong" className="px-6 py-2 rounded-full bg-transparent border border-gray-200 text-gray-300 font-semibold transition hover:bg-gray-500 hover:text-white">
                        Hong Kong
                    </Link>
                    
                    {/* Add more countries as needed */}
                    </div>
                </div>
            </div>
        </div>
    )
}