// import { useState} from "react";
// import DisplayTask from "./DisplayTask";
// import TaskItem from "./TaskItem";
// import '../../styles/dashboard/addTask.css'



// const AddTask =({onAddTask})=>{
//     const [tasks, setTasks] = useState([]);
//     const [newTask, setNewTask] = useState({
//         title: "",
//         description: "",
//         date: "",
//     })


//     const getTodayDate = () => {
//         const today = new Date();
//         const year = today.getFullYear();
//         const month = String(today.getMonth() + 1).padStart(2, '0'); 
//         const day = String(today.getDate()).padStart(2, '0'); 
//         return `${year}-${month}-${day}`;
//     };


//     const handleInputChange = (e) => {
//         setNewTask({ ...newTask, [e.target.name]: e.target.value });
//       };
    

//     const handleAddTask = () => {
//         if (newTask.title && newTask.description && newTask.date) {
//           onAddTask([...tasks, { ...newTask, id: Date.now(), completed: false }]);
//           setNewTask({ title: "", description: "", date: ""});
//         } else {
//           alert("Please fill all fields.");
//         }
//       };


//       return (
//         <div className="taskList">
//           <h2 className="create-task" style={{color:'#ff7f50', marginTop:'-30px'}}>Create a task</h2>
//           <div className="task-form" style={{display:'flex', padding:'15px', gap:'10px', marginBottom:'20px', maxHeight:'400px', height:'100%', width:'100%', maxWidth:'800px', backgroundColor:'wheat'}}>
//             <input
//                 type="text"
//                 name="title"
//                 placeholder="Title"
//                 value={newTask.title}
//                 onChange={handleInputChange}
//                 style={{width:'100%', maxWidth:'200px', height:'30px'}}
//                 required
//             />
        
//                 <input
//                 type="text"
//                  name="description"
//                 placeholder="Description"
//                  value={newTask.description}
//                 onChange={handleInputChange}
//                 style={{width:'100%', maxWidth:'300px',height:'auto'}}
//                 required
//             />



//                 <label 
//                     htmlFor="date" 
//                     style={{color: 'black', display:'flex', width:'35px'}}
//                     >
//                         Due Date
//                     </label>
//                 <input
//                     type="date"
//                     name="date"
//                     value={newTask.date}
//                     style={{width: '120px'}}
//                     min={getTodayDate()}
//                     onChange={handleInputChange}
//                     required
//                 />
                
        
        
//             <button 
//                 onClick={handleAddTask}
//                 style={{ width: '60px', height: 'auto', backgroundColor:'', cursor:'pointer',fontWeight:'bolder'}}
//             >
//                 +
//             </button>
//             </div>
//         </div>
//       );
// }



// export default AddTask;



import React, { useState, useEffect } from "react";
import TaskItem from "./TaskItem";
import "../../styles/dashboard/addTask.css";

const AddTask = ({ apiEndpoint }) => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    date: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState(null);

  // Fetch tasks from API (optional)
  useEffect(() => {
    if (apiEndpoint) {
      fetch(apiEndpoint)
        .then((res) => res.json())
        .then((data) => setTasks(data))
        .catch((err) => console.error("Error fetching tasks:", err));
    }
  }, [apiEndpoint]);

  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleInputChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const handleAddTask = () => {
    if (newTask.title && newTask.description && newTask.date && newTask.dueDate) {
      if (isEditing) {
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.id === editingTaskId ? { ...task, ...newTask } : task
          )
        );
        setIsEditing(false);
        setEditingTaskId(null);
      } else {
        setTasks([
          ...tasks,
          { ...newTask, id: Date.now(), completed: false, startDate: getTodayDate() },
        ]);
      }
      setNewTask({ title: "", description: "", date: "" });
    } else {
      alert("Please fill all fields.");
    }
  };


  

//   const toggleComplete = (id) => {
//     setTasks((prevTasks) =>
//       prevTasks.map((task) =>
//         task.id === id ? { ...task, completed: !task.completed } : task
//       )
//     );
//   };


  return (
    <div className="taskList">
      <h2
        className="create-task"
        style={{ color: "#ff7f50", marginTop: "-30px" }}
      >
      </h2>
      <div
        className="task-form"
        style={{
          display: "flex",
          padding: "15px",
          gap: "10px",
          marginBottom: "20px",
          maxHeight: "400px",
          height: "100%",
          width: "100%",
          maxWidth: "800px",
          backgroundColor: "wheat",
        }}
      >
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newTask.title}
          onChange={handleInputChange}
          style={{ width: "100%", maxWidth: "200px", height: "30px" }}
          required
        />

        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newTask.description}
          onChange={handleInputChange}
          style={{ width: "100%", maxWidth: "300px", height: "auto" }}
          required
        />

        <label
          htmlFor="date"
          style={{ color: "black", display: "flex", width: "35px" }}
        >
          Due Date
        </label>
        <input
          type="date"
          name="date"
          value={newTask.dueDate}
          style={{ width: "120px" }}
          min={getTodayDate()}
          onChange={handleInputChange}
          required
        />

        <button
          onClick={handleAddTask}
          style={{
            width: "60px",
            height: "auto",
            backgroundColor: "",
            cursor: "pointer",
            fontWeight: "bolder",
          }}
        >
            +
        </button>
      </div>

      <div className="task-display-container" style={{ marginTop: "20px" }}>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
          />
        ))}
      </div>
    </div>
  );
};

export default AddTask;
