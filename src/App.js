import React, { useState, useEffect } from "react";
// components
import Form from "./components/Form";
import TodoList from "./components/TodoList";
// styles
import "./styles/style.scss";

function App() {
  const initialState = JSON.parse(localStorage.getItem("todoapp")) || [];
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("todoapp", JSON.stringify(todos));
  }, [todos]);
  return (
    <div className="App">
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
