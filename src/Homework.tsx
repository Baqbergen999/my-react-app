import { useState } from "react";
import "./Homework.css";

const TaskApp = () => {
  const [tasks, setTasks] = useState<{ text: string; done: boolean }[]>([]);
  const [taskInput, setTaskInput] = useState("");
  const [search, setSearch] = useState("");

  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, { text: taskInput, done: false }]);
      setTaskInput("");
    }
  };

  const toggleTask = (index: any) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].done = !updatedTasks[index].done;
    setTasks(updatedTasks);
  };

  const removeTask = (index: any) => {
    setTasks([...tasks.slice(0, index), ...tasks.slice(index + 1)]);
  };

  return (
    <div className="container">
      <h1>Тапсырмалар</h1>
      <input
        type="text"
        value={taskInput}
        placeholder="Жаңа..."
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <button className="add" onClick={addTask}>
        Қосу
      </button>
      <input
        type="text"
        value={search}
        placeholder="Іздеу..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {tasks
          .filter((task) =>
            task.text.toLowerCase().includes(search.toLowerCase())
          )
          .map((task, index) => (
            <li key={index}>
              <span
                style={{ textDecoration: task.done ? "line-through" : "none" }}
              >
                {task.text}
              </span>
              <button onClick={() => toggleTask(index)}>✅</button>
              <button onClick={() => removeTask(index)}>🗑️</button>
            </li>
          ))}
      </ul>
      <p>Барлығы: {tasks.length}</p>
    </div>
  );
};

export default TaskApp;
