import { useEffect, useState } from "react";
import { requestImages } from "./components/apiService/api";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";

const App = () => {
  const [images, setImages] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!query) return;
    async function fetchImages() {
      try {
        setIsLoading(true);
        const data = await requestImages(query);
        setImages(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchImages();
  }, [query]);

  const onSetSearchQuery = (searchTerm) => {
    setQuery(searchTerm);
  };

  return (
    <div>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <SearchBar onSetSearchQuery={onSetSearchQuery} />
      {images && <ImageGallery images={images} />}
    </div>
  );
};

export default App;
