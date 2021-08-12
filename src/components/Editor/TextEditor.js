import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import { MenuBar } from "../Menu/MenuBar";

export const TextEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit, Underline, Link, Image],
    content: `
     Start writing...
    `
  });

  return (
    <div className="container">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};
