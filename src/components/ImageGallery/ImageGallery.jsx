import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images }) => {
  console.log(images);
  return (
    <ul>
      {Array.isArray(images) &&
        images.map((image) => {
          return <ImageCard key={image.id} images={image} />;
        })}
    </ul>
  );
};

export default ImageGallery;
