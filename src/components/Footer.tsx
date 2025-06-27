import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-4 z-20 relative border-t border-white/60">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12 border-b border-gray-700 pb-8">
        {/* Quick Links */}
        <div className="flex-1 md:border-r md:border-gray-400 md:pr-8 mb-12 md:mb-0">
          <h3 className="text-xl font-bold mb-4">Links</h3>
          <ul className="grid grid-cols-3 gap-x-8 gap-y-2">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/galleries" className="hover:underline">Galleries</Link></li>
            <li><Link to="/collections" className="hover:underline">Collections</Link></li>
            <li><Link to="/gear" className="hover:underline">Gear</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>
        {/* Contact */}
        <div className="flex-1 md:border-r md:border-gray-400 md:px-8 mb-12 md:mb-0">
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <p>
            For inquiries, or just to say hello:<br />
            <a href="mailto:your.email@example.com" className="text-blue-400 hover:underline">
              junginkoong@outlook.com
            </a>
          </p>
        </div>
        {/* Quote */}
        <div className="flex-1 md:pl-8 flex flex-col justify-start py-8">
          <p className="italic text-gray-300">
            "Photography is the story I fail to put into words."<br />
            <span className="text-gray-500 text-sm">– Destin Sparks</span>
          </p>
        </div>
      </div>
      {/* Watermark */}
      <div className="text-center text-gray-600 text-sm mt-8">
        CopyRight &copy; {new Date().getFullYear()} Jung In's Studio. Made with love in Toronto, ON
      </div>
    </footer>
  );
}