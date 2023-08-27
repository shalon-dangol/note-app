import React, { useState } from "react";

function CreateArea({ inputValue }) {
  const [input, setInput] = useState({
    title: "",
    content: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={input.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
          value={input.content}
        />
        <button
          onClick={() => {
            inputValue(input);
            setInput({
              title: "",
              content: ""
            });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
