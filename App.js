import React, { useState } from "react";
import CollapsibleExample from "./Components/Navbar";
import Content from "./Components/Content";

const App = () => {
  const [showAddBook, setShowAddBook] = useState(false);

  const handleAddBookClick = () => {
    setShowAddBook(true);
  };
  return (
    <div>
      <CollapsibleExample handleAddBookClick={handleAddBookClick} />
      <Content showAddBook={showAddBook} setShowAddBook={setShowAddBook} />
    </div>
  );
};

export default App;
