import React from "react";
import Book from "../src/components/Book";
import { BookProvider } from "./Context/bookContext";

function App() {
  return (
    <BookProvider>
      <Book />
    </BookProvider>
  );
}

export default App;
