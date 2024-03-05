import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./Book.css";

const Book = (props) => {
  const {
    UUID,
    Title,
    Author,
    CoverArt,
    Genre,
    PublishingHouse,
    ReleaseDate,
    Amount,
  } = props;

  const [bookAmount, setBookAmount] = useState(Amount);

  const borrowBook = () => {
    toast.success("Book borrowed");
    setBookAmount(bookAmount - 1);
  };

  const returnBook = () => {
    toast.success("Book returned");
    setBookAmount(bookAmount + 1);
  };

  const failedBorrow = () => {
    toast.error("Book not available");
  };

  return (
    <>
      <div
        className={`book-card ${bookAmount <= 0 && "inactive"}`}
        id={`book-${UUID}`}>
        <h2>{Title}</h2>
        <img src={CoverArt} alt={`${Title} Cover art`} />
        <p>
          <span className="book-info"> Author: </span>
          {Author}
        </p>
        <p>
          <span className="book-info"> Genre: </span> {Genre}{" "}
          {/*{Genre.join(", ")} */}
        </p>
        <p>
          <span className="book-info"> Publishing house: </span>{" "}
          {PublishingHouse}
        </p>
        <p>
          <span className="book-info"> Release date: </span> {ReleaseDate}
        </p>
        <div className="loan-book">
          <p>amount: {bookAmount}</p>
          {bookAmount <= 0 ? (
            <button
              onClick={failedBorrow}
              className="loan-book-button inactive">
              Borrow
            </button>
          ) : (
            <>
              <button onClick={borrowBook} className="loan-book-button borrow">
                Borrow
              </button>
            </>
          )}

          <button onClick={returnBook} className="loan-book-button return">
            Return
          </button>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default Book;
