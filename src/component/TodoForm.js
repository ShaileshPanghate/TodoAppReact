import React , {useState} from 'react'

const TodoForm = ({addTodo}) => {
    const [val,setVal] = useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();

        addTodo(val);
        setVal("")
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Task" className='todo-input' value={val} onChange={(e)=> setVal(e.target.value)} />
        <button className="todo-btn" type='submit' >Add </button>


      
    </form>
  )
}

export default TodoForm
