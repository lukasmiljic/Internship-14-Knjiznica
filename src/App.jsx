import { useState } from "react";
import BookGrid from "./components/BookGrid/BookGrid.jsx";
import Modal from "./components/Modal/Modal.jsx";

const App = () => {
  const [search, setSearch] = useState("");

  console.log(search);

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
        <BookGrid search={search} />
      </main>
      <Modal />
    </>
  );
};

export default App;
