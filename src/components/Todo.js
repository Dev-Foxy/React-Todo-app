import React from "react";

const Todo = ({ todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const checkHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      <p className={todo.completed ? " active" : ""}>{todo.title}</p>
      <div className="icon">
        <i className="fa-solid fa-check" onClick={checkHandler}></i>
        <i className="fa-solid fa-trash" onClick={deleteHandler}></i>
      </div>
    </div>
  );
};

export default Todo;
