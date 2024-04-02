import { Form, Formik, ErrorMessage, Field } from "formik";
import * as Yup from "yup";

const formSearchScheme = Yup.object().shape({
  searchForm: Yup.default.string(),
});

const formInitialValues = {
  searchForm: "",
};

const SearchBar = ({ onSetSearchQuery }) => {
  const handleSubmit = (values) => {
    onSetSearchQuery(values.searchTerm);
  };

  return (
    <Formik
      initialValues={formInitialValues}
      validationSchema={formSearchScheme}
      onSubmit={handleSubmit}
    >
      <Form>
        <Field
          type="text"
          name="searchForm"
          placeholder="Search images and photos"
        />
        <ErrorMessage component="span" name="searchForm" />
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
};

export default SearchBar;

// const SearchBar = ({ onSubmit }) => {
//   return (
//     <header>
//       <form>
//         <input
//           type="text"
//           autocomplete="off"
//           autofocus
//           placeholder="Search images and photos"
//         />
//         <button type="submit">Search</button>
//       </form>
//     </header>
//   );
// };

// export default SearchBar;
