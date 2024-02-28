import "./App.css";
import Book from "./components/Book";
import { book } from "./data";


function App() {
  return <Book title={book.Title} author={book.Author} />;
}

export default App;
