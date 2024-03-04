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

  return (
    <>
      <div className="book-card" id={`book-${UUID}`}>
        <h2>{Title}</h2>
        <img src={CoverArt} alt={`${Title} Cover art`} />
        <p>
          <span className="book-info"> Author: </span>
          {Author}
        </p>
        <p>
          <span className="book-info"> Genres: </span> {Genre.join(", ")}
        </p>
        <p>
          <span className="book-info"> Publishing house: </span>{" "}
          {PublishingHouse}
        </p>
        <p>
          <span className="book-info"> Release date: </span> {ReleaseDate}
        </p>
        <div className="loan-book">
          <p>amount: {Amount}</p>
          <button className="loan-book-button">
            {/* <i class="fa-solid fa-plus"></i> */}
            Borrow
          </button>
          <button className="loan-book-button">
            {/* <i class="fa-solid fa-minus"></i> */}
            Return
          </button>
        </div>
      </div>
    </>
  );
};

export default Book;
