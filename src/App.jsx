import "./App.css";
import BookGrid from "./components/BookGrid/BookGrid.jsx";

const App = () => {
  return (
    <>
      <div className="header-wrapper">
        <header>
          <h1>Books</h1>
        </header>
      </div>
      <main>
        <BookGrid />
      </main>
    </>
  );
};

export default App;
