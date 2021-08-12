import React, { useState } from "react";
import { BsFillImageFill } from "react-icons/bs";
import { TextOperation } from "./TextOperations";
import "../../styles.css";
import { AddLinkBox } from "../utils/AddLinkBox";

export const MenuBar = ({ editor }) => {
  const [modal, setModal] = useState(false);

  if (!editor) {
    return null;
  }

  return (
    <div className="btn-array">
      <TextOperation editor={editor} />
      <button>
        <BsFillImageFill size={28} />
      </button>
      <div className="relative">
        <button title="add a link" onClick={() => setModal(true)}>
          Link
        </button>
        {modal && (
          <AddLinkBox editor={editor} modal={modal} setModal={setModal} />
        )}
      </div>
    </div>
  );
};
