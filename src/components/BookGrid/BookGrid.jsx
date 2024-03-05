import Book from "../Book/Book";
import books2 from "../../bookData";

const BookGrid = (props) => {
  const { search } = props;

  return (
    <div className="book-grid">
      {books2
        .filter((item) => {
          return search.toLowerCase() === ""
            ? item
            : item.Title.toLowerCase().includes(search.toLowerCase()) ||
                item.Author.toLowerCase().includes(search.toLowerCase());
        })
        .map((book, index) => (
          <Book key={index} {...book} />
        ))}
    </div>
  );
};

export default BookGrid;
