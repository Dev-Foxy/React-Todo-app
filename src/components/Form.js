import React from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ inputText, setInputText, todos, setTodos }) => {
  const inputHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (inputText) {
      setTodos([
        ...todos,
        { title: inputText, completed: false, id: uuidv4() },
      ]);
      setInputText("");
    }
  };
  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <input type="text" onChange={inputHandler} value={inputText} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Form;
