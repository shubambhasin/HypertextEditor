import React from "react";
import { BsTypeBold, BsTypeUnderline, BsTypeItalic } from "react-icons/bs";
export const TextOperation = ({ editor }) => {
  return (
    <div>
      <button
        title="bold"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "is-active" : ""}
      >
        <BsTypeBold size={28} />
      </button>
      <button
        title="Italics"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "is-active" : ""}
      >
        <BsTypeItalic size={28} />
      </button>
      <button
        title="underline"
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={editor.isActive("underline") ? "is-active" : ""}
      >
        <BsTypeUnderline size={28} />
      </button>
    </div>
  );
};
