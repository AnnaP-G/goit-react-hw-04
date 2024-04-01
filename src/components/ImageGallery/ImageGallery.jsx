import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images }) => {
  return (
    <ul>
      {Array.isArray(images) &&
        images.map((image) => {
          return <ImageCard key={image.id} />;
        })}
    </ul>
  );
};

export default ImageGallery;
