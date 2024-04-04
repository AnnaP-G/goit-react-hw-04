import toast, { Toaster } from "react-hot-toast";

const notify = () => toast.error("Please enter text to search for images");

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const searchValue = evt.currentTarget.elements.searchForm.value.trim();
    if (!searchValue) {
      notify();
      return;
    }
    onSubmit(searchValue);
    evt.target.reset();
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchForm"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
        <Toaster position="top-center" />
      </form>
    </header>
  );
};

export default SearchBar;
