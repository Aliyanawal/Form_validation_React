
import { useState } from "react";

function TodoList(){
    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);

    function handleInputChange(e){
        setTask(e.target.value);
    }

    function addTask(){
        if(task.trim() === "") return;
        setTaskList([...taskList,task]);
        setTask("");


    }

    function deleteTask(index){
        const updatedTask = taskList.filter(function(_,i){
             return i!= index;
        });
       
        setTaskList(updatedTask);
    }

    return(
        <div className="container mt-4">
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter a task"
                    value={task}
                    onChange={handleInputChange}
                    />
            </div>
            
            <button className="btn btn-primary mb-3" onClick={addTask}>Add Task</button>
            <ul className="list-group">
                {taskList.map(function(item, index){
                    return(
                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                            {item}
                            <button className="btn btn-danger btn sm" onClick={() => deleteTask(index)}>
                                Delete
                            </button>

                        </li>

                    );})
                }
            </ul>
        </div>
    );
}


export default TodoList;