const ImageCard = ({ images: { urls, description } }) => {
  return (
    <li>
      <img src={urls.small} alt={description} />
    </li>
  );
};

export default ImageCard;
