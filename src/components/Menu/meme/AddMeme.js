import React from "react";
import { getMeme } from "../../utils/getMeme";

// meme component
export const AddMeme = ({ editor }) => {
  const addMeme = async () => {
    let memeUrl = "";
    let allContent = editor.getHTML();
    const stableAllContent = editor.getHTML();
    let match = "";
    allContent = allContent.replace(/\{\{(.+?)_meme\}\}/, (_, keyword) => {
      match = keyword;
      return "";
    });
    memeUrl = await getMeme(match);
    if (memeUrl !== null && memeUrl.length !== 0) {
      const finalContent = allContent + `<img src='${memeUrl}' alt="link" />`;
      editor.commands.setContent(finalContent);
    } else {
      editor.commands.setContent(stableAllContent);
    }
  };
  return (
    <div>
      <button className="btn btn-outline" onClick={addMeme}>
        Add Meme
      </button>
    </div>
  );
};
