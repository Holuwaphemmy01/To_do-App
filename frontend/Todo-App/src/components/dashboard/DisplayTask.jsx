import React from "react";
import TaskItem from "./TaskItem";
import AddTask from "./AddTask";




const DisplayTask = ({tasks}) =>{
    return (
        <div style={{ padding: "20px" }}>
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
      );



    
};

export default DisplayTask