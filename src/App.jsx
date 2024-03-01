import "./App.css";
import Book from "./components/Book.jsx";
import books from "./bookData.js";

const App = () => {
  return (
    <>
      <h1>Books</h1>
      <div>
        {books.map((book, index) => (
          <Book index={index} key={index} {...book} />
        ))}
      </div>
    </>
  );
};

export default App;
