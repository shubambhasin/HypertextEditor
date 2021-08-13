import axios from "axios";
import React from "react";

export const getMeme = async (keyword) => {
  // check if keyword is present or not
  if (keyword.length !== 0) {
    let memeUrl = "";
    try {
      const response = await axios.get(
        `https://api.giphy.com/v1/gifs/search?api_key=k63sMfP5nNS9CcNQCVCWGip59G0Jidhn&q=${keyword}&limit=10&offset=0&rating=g&lang=en`
      );
      if (response.data.data.length !== 0) {
        let memeUrl = response.data.data[0].images.downsized.url;

        return memeUrl;
      } else {
        alert("no meme found, please change meme code");
        return null;
      }
    } catch {
      console.log("Something went wrong");
      alert("Something went wrong...");
    }
  } else {
    return null;
  }
};
