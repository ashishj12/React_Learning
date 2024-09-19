import { useState } from "react";
import "./App.css";
function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Read an Book" },
    { id: 2, text: "Watching Movies" },
    { id: 3, text: "Playing Games" },
    { id: 4, text: "Coding" },
  ]);
  // Function takes a a taskId parameter
  const deleteTask = (taskId) => {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== taskId)
    );
    console.log("Deleted task with ID:", taskId);
  };
  return (
    <div className="task-container">
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            {task.text}
            <button
              onClick={() => deleteTask(task.id)}
              className="delete-button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
