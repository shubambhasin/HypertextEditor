import React, { useState } from "react";

export const AddLinkBox = ({ editor, modal, setModal }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  const setlink = (input) => {
    editor
      .chain()
      .focus()
      .extendMarkRange("link")
      .setLink({ href: input })
      .run();
  };

  const handleSubmit = (e, link) => {
    e.preventDefault();
    setlink(input);
    setModal(false);
    setInput("");
  };
  return (
    <div className="relative">
      <div className="modal">
        <button onClick={() => setModal(false)} className="absolute close">
          x
        </button>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col gap-1 jcc aic"
        >
          <label>Add link</label>
          <input onChange={(e) => handleChange(e)} />
          <button className="btn btn-blue w-100" onClick={() => handleSubmit}>
            Add
          </button>
        </form>
      </div>
    </div>
  );
};
