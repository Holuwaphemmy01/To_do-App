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
          <h2 className="create-task" style={{color:'#ff7f50', marginTop:'-30px'}}>Create a task</h2>
          <div className="task-form" style={{display:'flex', padding:'15px', gap:'10px', marginBottom:'20px', maxHeight:'400px', height:'100%'}}>
            <input
                type="text"
                name="title"
                placeholder="Title"
                value={newTask.title}
                onChange={handleInputChange}
                style={{width:'100%', maxWidth:'200px', height:'30px'}}
                required
            />
        
                <input
                type="text"
                 name="description"
                placeholder="Description"
                 value={newTask.description}
                onChange={handleInputChange}
                style={{width:'100%', maxWidth:'200px',height:'auto'}}
                required
            />



                <label 
                    htmlFor="date" 
                    style={{color: 'black', display:'flex', width:'35px'}}
                    >
                        Due Date
                    </label>
                <input
                    type="date"
                    name="date"
                    value={newTask.date}
                    style={{width: '120px'}}
                    min={getTodayDate()}
                    onChange={handleInputChange}
                    required
                />
                
        
        
            <button 
                onClick={handleAddTask}
                style={{ width: '60px', height: 'auto', backgroundColor:'', cursor:'pointer',fontWeight:'bolder'}}
            >
                +
            </button>
            </div>
        </div>
      );
      

}

export default AddTask;