import React, { useState } from "react";
import { BsFillImageFill } from "react-icons/bs";
import { TextOperation } from "./TextOperations";
import "../../styles.css";
import { AddLinkBox } from "../utils/AddLinkBox";
import { AddImageLink } from "./Image/AddImageLink";
import { AddMeme } from "./AddMeme";

export const MenuBar = ({ editor }) => {
  const [modal, setModal] = useState(false);
  const [imageModal, setImageModal] = useState(false);

  if (!editor) {
    return null;
  }

  return (
    <div className="btn-array">
      <TextOperation editor={editor} />
      <div className="relative" onMouseLeave={() => setImageModal(false)}>
        <button onClick={() => setImageModal(true)}>
          <BsFillImageFill size={28} />
        </button>
        {imageModal && (
          <AddImageLink
            editor={editor}
            modal={imageModal}
            setModal={setImageModal}
          />
        )}
      </div>
      <div className="relative" onMouseLeave={() => setModal(false)}>
        {editor.isActive("link") ? (
          <button
            title="add a link"
            onClick={() => editor.chain().focus().unsetLink().run()}
          >
            unSetLink
          </button>
        ) : (
          <button
            title="add a link"
            className="btn btn-outline"
            onClick={() => setModal(true)}
          >
            Link
          </button>
        )}
        {modal && (
          <AddLinkBox editor={editor} modal={modal} setModal={setModal} />
        )}
      </div>
      <AddMeme editor={editor} />
    </div>
  );
};
