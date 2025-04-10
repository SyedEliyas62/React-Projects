import React, { useState } from "react";
import TextArea from "./TextArea";
import Stats from "./Stats";
import { FACEBOOK_MAX_CHAREACTERS, INSTAGRAM_MAX_CHARACTERS } from "../lib/constants";


const Container = () => {
  const [text, setText] = useState("");
  const stats = {
    numberOfWords:  text.split(/\s/).filter((word) => word !== "").length,
    numberOfCharacter: text.length,
    instagramCharacterLeft :INSTAGRAM_MAX_CHARACTERS  - text.length,
    facebookCharacterLeft :  FACEBOOK_MAX_CHAREACTERS - text.length
  }
  return (
    <main className="container">
      <TextArea text={text} setText={setText} />
      <Stats stats={stats}/>
    </main>
  );
};

export default Container;
