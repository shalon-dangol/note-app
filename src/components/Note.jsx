import React from "react";

function Note({ id, title, content, handleDelete }) {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button
        onClick={() => {
          handleDelete(id);
        }}
      >
        DELETE
      </button>
    </div>
  );
}

export default Note;
