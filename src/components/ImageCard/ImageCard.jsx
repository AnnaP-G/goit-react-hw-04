const ImageCard = ({ image: { urls, alt_description } }) => {
  console.log(image);
  return (
    <li>
      <img src={urls.small} alt={alt_description} />
    </li>
  );
};

export default ImageCard;
