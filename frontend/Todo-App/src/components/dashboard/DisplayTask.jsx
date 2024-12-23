import React from "react";
import TaskItem from "./TaskItem";
import AddTask from "./AddTask";


const tasks = [
    {
      id: 1,
      title: "Learn Javascript",
      description: "Master the language powering the modern web.",
      startDate: "07-07-2023",
      dueDate: "07-14-2023",
    },
    {
      id: 2,
      title: "Build a Todo App",
      description: "Create a full-featured task management application.",
      startDate: "12-23-2024",
      dueDate: "12-30-2024",
    },
  ];


const DisplayTask = () =>{
    return(
        <div style={{padding: '20px'}}>
      {tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
            </div>

    );
};

export default DisplayTask