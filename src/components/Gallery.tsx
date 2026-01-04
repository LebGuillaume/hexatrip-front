import { galleryImages } from "@/utils/galleryData";

const Gallery = () => {
  return (
    <section>
      <div className="grid grid-cols-2 md:grid-cols-5 auto-rows-fr">
        {galleryImages.map((image, index) => {
          return (
            <div
              className={`w-full h-full overflow-hidden  object-cover ${
                index === 0 ? "md:row-span-2 md:col-span-2" : ""
              } ${index === 5 ? "hidden md:block" : ""}`}
              key={index}
            >
              <img
                className={`w-full h-full object-cover transition ease-in-out hover:scale-105 `}
                src={image}
                alt={image}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
