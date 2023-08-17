import React , {useState} from 'react'
import TodoForm from './TodoForm';
import {v4 as uuidv4} from "uuid";
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';
uuidv4();

const TodoWrapper = () => {
    const [todos,setTodos] = useState([]);

    const addTodo = (todo) =>{
        setTodos([...todos,{id:uuidv4(), task:todo, completed:false,isEditing:false}]);
        console.log(todos)
    }

    const toggleComplete =(id)=>{
        setTodos(todos.map(todo=>todo.id === id ? {...todo,completed: !todo.completed} : todo));
    }
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }
    const editTodo=(id)=>{
        setTodos(todos.map(todo=>todo.id === id ? {...todo, isEditing:!todo.isEditing} : todo));
    }
    const editTask=(task,id)=>{
        setTodos(todos.map(todo=>todo.id === id ? {...todo, task, isEditing:!todo.isEditing}:todo));
    }
  return (
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a2d9ff" fill-opacity="1"
         d="M0,96L12,122.7C24,149,48,203,72,234.7C96,267,120,277,144,256C168,235,192,181,216,133.3C240,85,264,43,288,26.7C312,11,336,21,360,53.3C384,85,408,139,432,138.7C456,139,480,85,504,74.7C528,64,552,96,576,128C600,160,624,192,648,170.7C672,149,696,75,720,58.7C744,43,768,85,792,112C816,139,840,149,864,144C888,139,912,117,936,133.3C960,149,984,203,1008,197.3C1032,192,1056,128,1080,101.3C1104,75,1128,85,1152,96C1176,107,1200,117,1224,133.3C1248,149,1272,171,1296,181.3C1320,192,1344,192,1368,160C1392,128,1416,64,1428,32L1440,0L1440,0L1428,0C1416,0,1392,0,1368,0C1344,0,1320,0,1296,0C1272,0,1248,0,1224,0C1200,0,1176,0,1152,0C1128,0,1104,0,1080,0C1056,0,1032,0,1008,0C984,0,960,0,936,0C912,0,888,0,864,0C840,0,816,0,792,0C768,0,744,0,720,0C696,0,672,0,648,0C624,0,600,0,576,0C552,0,528,0,504,0C480,0,456,0,432,0C408,0,384,0,360,0C336,0,312,0,288,0C264,0,240,0,216,0C192,0,168,0,144,0C120,0,96,0,72,0C48,0,24,0,12,0L0,0Z">
            </path></svg>
            
        <div className='backg'>

                <h1>Get Things Done!</h1>
                <br/>
            <TodoForm addTodo={addTodo}/>
            {
                todos.map((todo,index)=>(
                    todo.isEditing ?(
                        
                        <EditTodoForm key={index} task={todo } editTodo={editTask}/>
                        ) : (
                            
                            <Todo  task={todo } key={index} toggleComplete={toggleComplete} editTodo={editTodo} deleteTodo={deleteTodo}/>
                            )
                            ))
                            }
        </div>
    </div>
  );
}

export default TodoWrapper;
