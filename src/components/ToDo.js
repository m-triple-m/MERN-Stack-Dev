import React, { useState } from 'react'
import './todo.css';

const ToDo = () => {

    const [todoList, setTodoList] = useState([]);
    const [task, setTask] = useState("");

    const addToDo = () => {
        // todoList.push(task);
        setTodoList( [...todoList, task] );
        setTask("");
    }

    const removeTodo = (index) => {
        let temp = todoList;
        temp.splice(index, 1)
        setTodoList( [...temp] )
    }

    const showToDoList = () => {
        return todoList.map( (task, i) => (
            <div className='task'>
                <p>{task}</p>
                <button onClick={() =>{removeTodo(i)}} className='btn btn-danger ml-auto'>
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        ) )
    }

  return (
    <div className='container'>
        <div className="card">
            <div className="card-header">
                <h4>ToDo List</h4>
            </div>

            <div className='card-body'>
                <div className='input-group'>
                    <input className='form-control' value={task} onChange={(e) => {setTask(e.target.value)}} />
                    <button className='btn btn-primary' onClick={addToDo}>Add New Task</button>
                </div>
                {showToDoList()}
            </div>
        </div>
    </div>
  )
}

export default ToDo