import React from "react";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

const CountButton = ({ setCount, type, locked }) => {
    const handelClick = (event) => {
       setCount(prev => {
        if(type === 'minus'){
            const newCount = prev - 1;
            if(newCount < 0){
                return 0;
            }else {
                return newCount;
            }
        }else {
            const newCount = prev + 1;
            if(newCount > 5){
                return 5;
            }
            return newCount;
        }
       });
       event.currentTarget.blur();
      }
  return (
    <button disabled={locked}
      className="count-btn"
      onClick={handelClick}
    >
      {type === "minus" ? (
        <MinusIcon className="count-btn-icon" />
      ) : (
        <PlusIcon className="count-btn-icon" />
      )}
    </button>
  );
};

export default CountButton;
