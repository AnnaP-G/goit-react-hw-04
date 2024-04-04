import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, onModalOpen }) => {
  console.log(images);
  return (
    <ul>
      {Array.isArray(images) &&
        images.map((image) => {
          return (
            <ImageCard key={image.id} image={image} onModalOpen={onModalOpen} />
          );
        })}
    </ul>
  );
};

export default ImageGallery;
