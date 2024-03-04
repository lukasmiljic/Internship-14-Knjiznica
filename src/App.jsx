import { useState } from "react";
import "./App.css";
import BookGrid from "./components/BookGrid/BookGrid.jsx";

const App = () => {
  const [search, setSearch] = useState("");

  console.log(search);

  return (
    <>
      <div className="header-wrapper">
        <header>
          <h1>Books</h1>
          <i class="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            placeholder="Search for books..."
            onChange={(e) => setSearch(e.target.value)}></input>
        </header>
      </div>
      <main>
        <BookGrid search={search} />
      </main>
    </>
  );
};

export default App;
