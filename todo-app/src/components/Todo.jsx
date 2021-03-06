import React from "react";
import "./Todo.css";
import toggleImage from "../assets/icon-sun.svg";
import Input from "./Input";
import Tasks from "./Tasks";

const Todo = () => {
  const [value, setValue] = React.useState("");
  const [tasks, setTask] = React.useState([]);

  function handleClick(event) {
    setValue(event.target.value);

    if (event.key === "Enter" && value.trim().length > 0) {
      setTask([...tasks, { text: event.target.value, done: false }]);
      setValue("");
    }
  }

  return (
    <main className="todo-app">
      <header className="todo-header">
        <h1 className="todo-title">T O D O</h1>
        <span className="toggle-theme">
          <img src={toggleImage} alt="toggle theme" />
        </span>
      </header>

      <Input onKeyDown={handleClick} onChange={handleClick} value={value} />
      <Tasks tasks={tasks} setTask={setTask} />
    </main>
  );
};

export default Todo;
