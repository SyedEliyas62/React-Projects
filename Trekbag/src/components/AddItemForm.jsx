import React, { useRef, useState } from "react";
import Button from "./Button";

const AddItemForm = ({onAddItem}) => {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();

  const handeleSubmit = (e) => {
    e.preventDefault();

    if(!itemText){
      alert("Item can be empty");
      inputRef.current.focus();
      return;
    }
    onAddItem(itemText);
   setItemText("");
  }
  return (
    <form 
    onSubmit={handeleSubmit}>
      <h2>Add a Item</h2>
      <input
      ref={inputRef}
        value={itemText}
        onChange={(e) => {
          setItemText(e.target.value);
        }}
        autoFocus
      />
      <Button>Add to List</Button>
    </form>
  );
};

export default AddItemForm;
