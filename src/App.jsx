import { useState } from "react";
import BookGrid from "./components/BookGrid/BookGrid.jsx";
import Modal from "./components/Modal/Modal.jsx";
import books from "./data/bookData.js";

const App = () => {
  const [search, setSearch] = useState("");
  const [bookArray, setBookArray] = useState(books);

  const handleNewBook = (newBook) => { 
    setBookArray([...bookArray, newBook]);
  }

  console.log(bookArray)

  return (
    <>
      <div className="header-wrapper">
        <header>
          <h1>Books</h1>
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            placeholder="Search for books..."
            onChange={(e) => setSearch(e.target.value)}></input>
        </header>
      </div>
      <main>
        <BookGrid books={bookArray} search={search} />
      </main>
      <Modal handleNewBook={handleNewBook} />
    </>
  );
};

export default App;
