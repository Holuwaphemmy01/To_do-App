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