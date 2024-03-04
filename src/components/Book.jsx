const Book = (props) => {
  const { UUID, Title, Author, Genre, PublishingHouse, ReleaseDate, Amount } =
    props;

  return (
    <>
      <div className="book-card" id={`book-${UUID}`}>
        <h2>{Title}</h2>
        <p>author: {Author}</p>
        <p>genres: {Genre.join(", ")}</p>
        <p>publishing house: {PublishingHouse}</p>
        <p>release data: {ReleaseDate}</p>
        <p>amount: {Amount}</p>
      </div>
    </>
  );
};

export default Book;
