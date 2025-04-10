import React, { useState } from "react";
import Warning from "./Warning";

const TextArea = ({text, setText}) => {
  
  const [warningText, setWarningText] = useState("");
  
 
  const handleEvent = (e) => {
    let newText = e.target.value;
    if (newText.includes("<script>")){
        setWarningText("No scripts Tags are not allowed");
      
        newText = newText.replace("<script>","");
    } else if (newText.includes("@")){
        setWarningText("No @ symbols are allowed.");
      
        newText = newText.replace("@","");
    }else{
        setWarningText("")
    }
        setText(newText);
  }
  return (
    <div className="textarea">
        <textarea
      value={text}
      onChange={handleEvent}
      
      placeholder="Enter your Text"
    />
   { <Warning warningText={warningText}/>}
    </div>
  );
};

export default TextArea;
