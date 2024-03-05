import { useState } from "react";
import books from "../../data/bookData";
import { v4 as uuidv4 } from "uuid";
import "./form.css";

const Form = ({ toggleModal }) => {
  const [newBook, setNewBook] = useState({
    UUID: uuidv4(),
    Title: "",
    Author: "",
    CoverArt: "",
    PublishingHouse: "",
    ReleaseDate: "",
    Genre: "",
    Amount: 1,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    books.push(newBook);
    console.log(newBook);
    console.log(books);
    toggleModal();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  return (
    <form className="new-book-form">
      <label>Title</label>
      <input
        required:true
        onChange={handleChange}
        type="text"
        name="Title"
        value={newBook.Title}
      />

      <label>Author</label>
      <input
        required:true
        onChange={handleChange}
        type="text"
        name="Author"
        value={newBook.Author}
      />

      <label>Publishing house</label>
      <input
        required:true
        onChange={handleChange}
        type="text"
        name="PublishingHouse"
        value={newBook.PublishingHouse}
      />

      <label>Genre</label>
      <select
        required:true
        onChange={handleChange}
        id="Genre"
        name="Genre"
        value={newBook.Genre}>
        <option value="Roman">Novel</option>
        <option value="Poezija">Poetry</option>
        <option value="Drama">Drama</option>
        <option value="Fantazija">Fantasy</option>
        <option value="Znanstvena Fantastika">Science Fiction</option>
        <option value="Biografija">Biography</option>
      </select>

      <label>Release date</label>
      <input
        required:true
        onChange={handleChange}
        type="date"
        name="ReleaseDate"
        value={newBook.ReleaseDate}
      />

      <label>Amount</label>
      <input
        required:true
        onChange={handleChange}
        type="number"
        name="Amount"
        min="1"
        value={newBook.Amount}
      />

      <label>Book cover art</label>
      <input
        onChange={handleChange}
        type="file"
        id="img"
        name="CoverArt"
        accept="image/*"
      />
      <input
        className={`${
          (newBook.Title.length === 0 ||
            newBook.PublishingHouse.length === 0 ||
            newBook.ReleaseDate.length === 0 ||
            newBook.Author.length === 0) &&
          "inactive"
        }`}
        onClick={handleSubmit}
        type="submit"
      />
    </form>
  );
};

export default Form;
