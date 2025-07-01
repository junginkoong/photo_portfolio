import Rowgallery from "./Rowgallery";
import Photos from "../../components/Photos";
import ScrollToTopButton from '../../components/ScrollToTopButton';

export default function Galleries() {
  return (
    <div className="min-h-screen bg-black flex flex-col gap-24 items-center justify-center px-0 py-16">
      
      <Rowgallery
        photos={Photos.getMunichGallery()}
        title="Germany - Munich"
        description="A vibrant collection of street photography from Munich, capturing the essence of the city."
        buttonUrl="/collections#munich"
        reverse={false}
      />

      <Rowgallery
        photos={Photos.getViennaGallery()}
        title="Austria - Vienna"
        description="A captivating journey through Vienna, showcasing its rich history and stunning architecture."
        buttonUrl="/collections#vienna"
        reverse={true}
      />
      <Rowgallery
        photos={Photos.getZurichGallery()}
        title="Switzerland - Zurich"
        description="A picturesque city known for its pristine lake, vibrant cultural scene, and charming blend of historic and modern architecture."
        buttonUrl="/collections#zurich"
        reverse={false}
      />

      <Rowgallery
        photos={Photos.getHongKongGallery()}
        title="Hong Kong"
        description="A dynamic cityscape where East meets West, filled with vibrant streets, neon lights, and unique urban stories."
        buttonUrl="/collections#hong"
        reverse={true}
      />

      <ScrollToTopButton/>
    </div>
  );
}