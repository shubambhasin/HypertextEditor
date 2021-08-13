import React from "react";

export const AddMeme = ({ editor }) => {
  const addMeme = () => {
    const allContent = editor.getHTML();

    editor.commands.setContent("Hyey shubam");
  };

  return (
    <div>
      <button className="btn btn-outline" onClick={addMeme}>
        Add Meme
      </button>
    </div>
  );
};
