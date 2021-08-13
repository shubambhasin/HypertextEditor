import React, { useState } from "react";
import { BsFillImageFill, BsLink45Deg } from "react-icons/bs";
import { BiUnlink } from "react-icons/bi";
import "../../styles.css";
import { AddImageLink } from "./Image/AddImageLink";
import { AddMeme } from "./meme/AddMeme";
import { AddLinkBox } from "./link/AddLinkBox";
import { TextOperation } from "./text/TextOperations";

export const MenuBar = ({ editor }) => {
  const [modal, setModal] = useState(false);
  const [imageModal, setImageModal] = useState(false);

  if (!editor) {
    return null;
  }

  return (
    <div className="btn-array gap-1 mtb1-rem">
      <TextOperation editor={editor} />
      <div className="flex">
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
              className="unlink"
              title="Remove link"
              onClick={() => editor.chain().focus().unsetLink().run()}
            >
              <BiUnlink size={28} />
            </button>
          ) : (
            <button title="add a link" onClick={() => setModal(true)}>
              <BsLink45Deg size={28} />
            </button>
          )}
          {modal && (
            <AddLinkBox editor={editor} modal={modal} setModal={setModal} />
          )}
        </div>
        <AddMeme editor={editor} />
      </div>
    </div>
  );
};
