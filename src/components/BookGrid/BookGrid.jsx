import Book from "../Book/Book";
import books from "../../bookData";

const BookGrid = () => {
  return (
    <div className="book-grid">
      {books.map((book, index) => (
        <Book key={index} {...book} />
      ))}
    </div>
  );
};

export default BookGrid;
