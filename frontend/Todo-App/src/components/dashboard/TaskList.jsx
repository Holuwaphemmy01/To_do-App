import React, { useState } from "react";
import '../../styles/dashboard/taskList.css'

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    date: "",
    priority: "",
  });


  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); 
    const day = String(today.getDate()).padStart(2, '0'); 
    return `${year}-${month}-${day}`;
  };

  const handleInputChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const handleAddTask = () => {
    if (newTask.title && newTask.description && newTask.date) {
      setTasks([...tasks, { ...newTask, id: Date.now(), completed: false }]);
      setNewTask({ title: "", description: "", date: "", priority: "" });
    } else {
      alert("Please fill all fields.");
    }
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="taskList">
      <h2>Task List</h2>
      <div className="task-form">
        <input
          type="text"
          name="title"
          placeholder="Task tile"
          value={newTask.title}
          onChange={handleInputChange}
          required
        />

        <input
          type="text"
          name="description"
          placeholder="Task Description"
          value={newTask.description}
          onChange={handleInputChange}
          required
        />
        <input
          type="date"
          name="date"
          value={newTask.date}
          min={getTodayDate()}
          onChange={handleInputChange}
          required
        />
        <select
          name="priority"
          value={newTask.priority}
          onChange={handleInputChange}
        >
          <option value="">Priority</option>
          <option value="Low"></option>
          <option value="Medium"></option>
          <option value="High"></option>
        </select>
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <div className="task-cards">
          {tasks.map((task) =>(
          <div className={`task-card ${task.completed ? 'completed' : ''}`} key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>
              <strong> Start Date: </strong> {task.date}
            </p>
            <p>
              <strong>Priority:</strong>{task.priority}
            </p>
            <button onClick={() => handleCompletetask(task.id)}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => handleDeleteTask(task.id)}>
              Delete
            </button>
          </div>
          ))}
        </div>
    </div>
  );
};





export default TaskList;