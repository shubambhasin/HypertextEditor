import react from "react";

import { BsLink45Deg } from "react-icons/bs";
import { BiUnlink } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { RiImageAddFill } from "react-icons/ri";

export const HowToModal = ({ modal }) => {
  return (
    <div className="modal-container">
      <div className="howto-modal relative">
        <button
          className="btn modal-close"
          onClick={() => modal((value) => !value)}
        >
          <IoClose />
        </button>
        <h1 className="h3">How to use HyperText Editor 🚀</h1>
        <hr />
        <p>
          {" "}
          Features: <strong>Bold</strong> text, <i>Italic</i> text, underline
          text, add images using link, add{" "}
          <strong>
            <em>link</em>
          </strong>{" "}
          add
          <strong> memes</strong> using text{" "}
        </p>
        <ul>
          <li>
            Click on <span>B</span> to Bold the text
          </li>
          <li>
            Click on <span>I</span> to Italic the text
          </li>
          <li>
            Click on <span>U</span> to Underline the text
          </li>
          <li>
            Click on{" "}
            <button>
              {" "}
              <BsLink45Deg size={28} />
            </button>
            to Add link to the text,{" "}
            <button>
              <BiUnlink size={28} />
            </button>{" "}
            to remove link
          </li>
          <li>
            <p>
              <button className="pink-btn">Add meme</button> to add a meme/
              image using following format, name and then underscore meme
              keyword, e.g., {`{{memename_meme}}`}, {`{{avenger_meme}}`}
            </p>
          </li>
          <li>
            <span className="">
              <RiImageAddFill />
            </span>{" "}
            to add image using a link
          </li>
          <li>to delete an image click on image, press delete/backspace</li>
        </ul>
      </div>
    </div>
  );
};
