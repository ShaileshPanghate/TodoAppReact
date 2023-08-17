import React , {useState} from 'react'

const EditTodoForm = ({editTodo, task}) => {
    const [val,setVal] = useState(task.task);

    const handleSubmit=(e)=>{
        e.preventDefault();

        editTodo(val, task.id);
        setVal("")
    }

  return (
    <form onSubmit={handleSubmit} className="form">
        <input type="text" placeholder="Update Task" className='todo-input' value={val} onChange={(e)=> setVal(e.target.value)} />
        <button className="todo-btn" type='submit' >Update </button>


      
    </form>
  )
}

export default EditTodoForm
