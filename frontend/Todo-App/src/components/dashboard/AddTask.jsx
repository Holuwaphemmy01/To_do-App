import { useState} from "react";
import '../../styles/dashboard/addTask.css'



const AddTask =()=>{
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({
        title: "",
        description: "",
        date: "",
        priority: "",
    })


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


      return (
        <div className="taskList">
          <h2 className="create-task">Create a task</h2>
          <div className="task-form">
           
            <input
                type="text"
                name="title"
                placeholder="Task tile"
                value={newTask.title}
                onChange={handleInputChange}
                style={{width:'190px', height:'auto'}}
                required
            />
        
                <input
                type="text"
                 name="description"
                placeholder="Task Description"
                 value={newTask.description}
                onChange={handleInputChange}
                style={{width:'250px', height:'auto'}}
                required
            />



                <label 
                    htmlFor="date" 
                    className="date-name"
                    style={{color: 'black', display:'inline'}}
                    >
                        Due Date
                    </label>
                <input
                    type="date"
                    name="date"
                    placeholder="Due Date"
                    value={newTask.date}
                    style={{width: '120px'}}
                    min={getTodayDate()}
                    onChange={handleInputChange}
                    required
                />
                
        
        
            <button 
                onClick={handleAddTask}
                style={{ width: '120px', height: 'auto' }}
            >
                Add Task
            </button>
            </div>
        </div>
      );
      

}

export default AddTask;