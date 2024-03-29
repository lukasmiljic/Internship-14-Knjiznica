import { v4 as uuidv4 } from "uuid";

const booksUnsorted = [
  {
    UUID: uuidv4(),
    Title: "The Great Gatsby",
    Author: "F. Scott Fitzgerald",
    CoverArt:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/330px-The_Great_Gatsby_Cover_1925_Retouched.jpg",
    PublishingHouse: "Charles Scribner's Sons",
    ReleaseDate: "1925-04-10",
    Genre: "Fiction",
    Amount: 1,
  },
  {
    UUID: uuidv4(),
    Title: "To Kill a Mockingbird",
    Author: "Harper Lee",
    CoverArt:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/330px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg",
    PublishingHouse: "J. B. Lippincott & Co.",
    ReleaseDate: "1960-07-11",
    Genre: "Fiction",
    Amount: 2,
  },
  {
    UUID: uuidv4(),
    Title: "1984 (Nineteen eighty-four)",
    Author: "George Orwell",
    CoverArt:
      "https://upload.wikimedia.org/wikipedia/en/5/51/1984_first_edition_cover.jpg",
    PublishingHouse: "Secker & Warburg",
    ReleaseDate: "1949-06-08",
    Genre: "Dystopian",
    Amount: 3,
  },
  {
    UUID: uuidv4(),
    Title: "The Catcher in the Rye",
    Author: "J. D. Salinger",
    CoverArt:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/The_Catcher_in_the_Rye_%281951%2C_first_edition_cover%29.jpg/330px-The_Catcher_in_the_Rye_%281951%2C_first_edition_cover%29.jpg",
    PublishingHouse: "Little, Brown and Company",
    ReleaseDate: "1951-07-16",
    Genre: "Fiction",
    Amount: 4,
  },
  {
    UUID: uuidv4(),
    Title: "Pride and Prejudice",
    Author: "Jane Austen",
    CoverArt: "https://www.gutenberg.org/files/1342/1342-h/images/cover.jpg",
    PublishingHouse: "T. Egerton, Whitehall",
    ReleaseDate: "1813-01-28",
    Genre: "Romance",
    Amount: 5,
  },
  {
    UUID: uuidv4(),
    Title: "Harry Potter and the Philosopher's Stone",
    Author: "J.K. Rowling",
    CoverArt:
      "https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg",
    PublishingHouse: "Bloomsbury",
    ReleaseDate: "1997-06-26",
    Genre: "Fantasy",
    Amount: 6,
  },
  {
    UUID: uuidv4(),
    Title: "The Lord of the Rings",
    Author: "J.R.R. Tolkien",
    CoverArt:
      "https://upload.wikimedia.org/wikipedia/en/e/e9/First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif",
    PublishingHouse: "Allen & Unwin",
    ReleaseDate: "1954-07-29",
    Genre: "Fantasy",
    Amount: 7,
  },
  {
    UUID: uuidv4(),
    Title: "The Hobbit",
    Author: "J.R.R. Tolkien",
    CoverArt:
      "https://upload.wikimedia.org/wikipedia/en/4/4a/TheHobbit_FirstEdition.jpg",
    PublishingHouse: "Allen & Unwin",
    ReleaseDate: "1937-09-21",
    Genre: "Fantasy",
    Amount: 8,
  },
  {
    UUID: uuidv4(),
    Title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
    Author: "C.S. Lewis",
    CoverArt:
      "https://upload.wikimedia.org/wikipedia/en/c/cb/The_Chronicles_of_Narnia_box_set_cover.jpg",
    PublishingHouse: "Geoffrey Bles",
    ReleaseDate: "1950-10-16",
    Genre: "Fantasy",
    Amount: 9,
  },
  {
    UUID: uuidv4(),
    Title: "The Da Vinci Code",
    Author: "Dan Brown",
    CoverArt: "https://upload.wikimedia.org/wikipedia/en/6/6b/DaVinciCode.jpg",
    PublishingHouse: "Doubleday",
    ReleaseDate: "2003-03-18",
    Genre: "Mystery",
    Amount: 10,
  },
  {
    UUID: uuidv4(),
    Title: "Les Misérables",
    Author: "Victor Hugo",
    CoverArt:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1411852091i/24280.jpg",
    PublishingHouse: "A. Lacroix, Verboeckhoven & Cie.",
    ReleaseDate: "1862-03-04",
    Genre: "Historical",
    Amount: 1,
  },
  {
    UUID: uuidv4(),
    Title: "Der Steppenwolf",
    Author: "Hermann Hesse",
    CoverArt:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Hermann_Hesse_Der_Steppenwolf_1927.jpg/330px-Hermann_Hesse_Der_Steppenwolf_1927.jpg",
    PublishingHouse: "S. Fischer Verlag",
    ReleaseDate: "1927-10-05",
    Genre: "Philosophical",
    Amount: 2,
  },
  {
    UUID: uuidv4(),
    Title: "Il nome della rosa",
    Author: "Umberto Eco",
    CoverArt:
      "https://upload.wikimedia.org/wikipedia/en/e/eb/The_Name_of_the_Rose.jpg",
    PublishingHouse: "Bompiani",
    ReleaseDate: "1980-10-16",
    Genre: "Historical",
    Amount: 3,
  },
  {
    UUID: uuidv4(),
    Title: "Les Trois Mousquetaires",
    Author: "Alexandre Dumas",
    CoverArt:
      "https://www.ecoledesloisirs.fr/sites/default/files/styles/couverture_livre/public/couverture/9782211238397.jpg?itok=PCiOYiQx",
    PublishingHouse: "Baudry",
    ReleaseDate: "1844-03-14",
    Genre: "Historical",
    Amount: 5,
  },
  {
    UUID: uuidv4(),
    Title: "Der Process",
    Author: "Franz Kafka",
    CoverArt:
      "https://upload.wikimedia.org/wikipedia/commons/8/87/Kafka_Der_Prozess_1925.jpg",
    PublishingHouse: "Kurt Wolff Verlag",
    ReleaseDate: "1925-04-26",
    Genre: "Existential",
    Amount: 6,
  },
  {
    UUID: uuidv4(),
    Title: "I Promessi Sposi",
    Author: "Alessandro Manzoni",
    CoverArt:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Frontispiece_promessi_sposi.jpg/347px-Frontispiece_promessi_sposi.jpg",
    PublishingHouse: "Stamperia di Paolo Andrea Molina",
    ReleaseDate: "1827-07-15",
    Genre: "Historical",
    Amount: 7,
  },
  {
    UUID: uuidv4(),
    Title: "Gospoda Glembajevi",
    Author: "Miroslav Krleža",
    CoverArt:
      "https://upload.wikimedia.org/wikipedia/hr/0/08/Gospoda_glembajevi.jpg",
    PublishingHouse: "Zora",
    ReleaseDate: "1928-12-01",
    Genre: "Drama",
    Amount: 8,
  },
  {
    UUID: uuidv4(),
    Title: "Le Petit Prince",
    Author: "Antoine de Saint-Exupéry",
    CoverArt: "https://upload.wikimedia.org/wikipedia/en/0/05/Littleprince.JPG",
    PublishingHouse: "Reynal & Hitchcock",
    ReleaseDate: "1943-04-06",
    Genre: "Philosophical",
    Amount: 9,
  },
];

let books = booksUnsorted.sort((a, b) => {
  if (a.Title[0] === b.Title[0]) {
    if (a.Author[0] === b.Author[0]) {
      return a.ReleaseDate.localeCompare(b.ReleaseDate);
    } else {
      return a.Author.localeCompare(b.Author);
    }
  }
  return a.Title.localeCompare(b.Title);
});

export default books;
