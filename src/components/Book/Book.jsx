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
        <p>author: {Author}</p>
        <p>genres: {Genre.join(", ")}</p>
        <p>publishing house: {PublishingHouse}</p>
        <p>release date: {ReleaseDate}</p>
        <p>amount: {Amount}</p>
      </div>
    </>
  );
};

export default Book;
