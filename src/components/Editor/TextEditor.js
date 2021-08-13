import React, { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import { MenuBar } from "../Menu/MenuBar";
import Placeholder from "@tiptap/extension-placeholder";
import { HowToModal } from "../utils/HowToModal";
import { BsFillQuestionDiamondFill } from "react-icons/bs";
import { Header } from "../../Header";
export const TextEditor = () => {
  const [howToModal, setHowToModal] = useState(false);

  const editor = useEditor({
    extensions: [StarterKit, Underline, Link, Image, Placeholder],
    autofocus: false
  });

  return (
    <div className="container">
      <Header modal={setHowToModal} />
      <MenuBar editor={editor} />

      <EditorContent editor={editor} />
      {howToModal && <HowToModal modal={setHowToModal} />}
    </div>
  );
};
