import { useState } from "react";
import { MAX_CHARACTERS } from "../../lib/constants";


type FeedbackFormProps = {
  onAddToList: (text: string) => void;
  
}
const FeedbackForm = ({onAddToList}: FeedbackFormProps) => {
  const [text, setText] = useState("");
  const charCount = MAX_CHARACTERS - text.length;

  const handleChange = (event) => {
    const newText = event.target.value;
    if (newText.length > MAX_CHARACTERS) {
      return;
    }
    setText(newText);
  };


  const handelSubmit =  (event: React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    onAddToList(text);
    setText("");
  };
  return (
    <form onSubmit={handelSubmit} className="form">
      <textarea
        value={text}
        onChange={handleChange}
        id="feedback-textarea"
        placeholder="bla"
        maxLength={MAX_CHARACTERS}
        spellCheck={false}
      />

      <label htmlFor="feedback-textarea">
        Enter your feedback here, remember to #hashtag the company
      </label>

      <div>
        <p className="u-italic">{charCount}</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
};

export default FeedbackForm;
