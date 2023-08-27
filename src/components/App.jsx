import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [items, setItems] = useState([]);

  const addNote = (input) => {
    setItems((prevInput) => [...prevInput, input]);
  };

  const deleteNote = (id) => {
    setItems((prevItem) => {
      return prevItem.filter((note, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <Header />
      <CreateArea inputValue={addNote} />
      {items.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          handleDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
