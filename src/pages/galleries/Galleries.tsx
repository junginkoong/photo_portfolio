import { useEffect, useState } from "react";
import { useRef } from "react";
import Rowgallery from "./Rowgallery";
import Photos from "../../components/Photos";

export default function Galleries() {
  return (
    <div className="min-h-screen bg-black flex flex-col gap-24 items-center justify-center px-0 py-16">
      
      <Rowgallery
        photos={Photos.getMunichGallery()}
        title="Germany - Munich"
        description="Explore the vibrant streets, tranquil temples, and stunning landscapes of Munich."
        buttonUrl="/collections#munich"
        reverse={false}
      />

      <Rowgallery
        photos={Photos.getViennaGallery()}
        title="Austria - Vienna"
        description="Explore the vibrant streets, tranquil temples, and stunning landscapes of Japan."
        buttonUrl="/collections#vienna"
        reverse={true}
      />
    </div>
  );
}