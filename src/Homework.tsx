import { useState } from "react";
import './Homework.css'

const TaskListApp = () => {
  const [taskList, setTaskList] = useState([]);
  const [newTaskInput, setNewTaskInput] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const addTaskToList = () => {
    if (newTaskInput.trim()) {
      setTaskList([...taskList, { text: newTaskInput, isCompleted: false }]);
      setNewTaskInput("");
    }
  };

  const toggleTaskCompletion = (taskIndex) => {
    const updatedTaskList = [...taskList];
    updatedTaskList[taskIndex].isCompleted = !updatedTaskList[taskIndex].isCompleted;
    setTaskList(updatedTaskList);
  };

  const removeTaskFromList = (taskIndex) => {
    setTaskList(taskList.filter((_, index) => index !== taskIndex));
  };

  return (
    <div className="container">
      <h1>Тапсырмалар Тізімі</h1>
      <input
        type="text"
        value={newTaskInput}
        placeholder="Жаңа тапсырма..."
        onChange={(e) => setNewTaskInput(e.target.value)}
      />
      <button className="add" onClick={addTaskToList}>Қосу</button>
      <input
        type="text"
        value={searchInput}
        placeholder="Іздеу..."
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <ul>
        {taskList
          .filter((task) => task.text.toLowerCase().includes(searchInput.toLowerCase()))
          .map((task, taskIndex) => (
            <li key={taskIndex}>
              <span
                style={{
                  textDecoration: task.isCompleted ? "line-through" : "none",
                }}
              >
                {task.text}
              </span>
              <button onClick={() => toggleTaskCompletion(taskIndex)}>✅</button>
              <button onClick={() => removeTaskFromList(taskIndex)}>🗑️</button>
            </li>
          ))}
      </ul>
      <p>Барлығы: {taskList.length}</p>
    </div>
  );
};

export default TaskListApp;
