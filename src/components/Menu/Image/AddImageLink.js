import React, { useState } from "react";

export const AddImageLink = ({ editor, setModal }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const setlink = (url) => {
    editor.chain().focus().extendMarkRange("link").setImage({ src: url }).run();
  };

  const handleSubmit = (e, url) => {
    e.preventDefault();
    setlink(url);
    setModal(false);
    setInput("");
  };
  return (
    <div className="relative bg-grey">
      <div className="modal">
        <button
          onClick={() => setModal(false)}
          className="absolute close pointer"
        >
          x
        </button>
        <form
          onSubmit={(e) => handleSubmit(e, input)}
          className="flex flex-col gap-1 jcc aic"
        >
          <label className="f-white smaller">
            <small>Add Image URL</small>
          </label>
          <input onChange={(e) => handleChange(e)} />
          <button className="btn btn-blue w-100" onClick={() => handleSubmit}>
            Add
          </button>
        </form>
      </div>
    </div>
  );
};
