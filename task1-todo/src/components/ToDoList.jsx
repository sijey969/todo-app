import React from 'react';

const ToDoList = ({todos, setTodos, setEditTodo}) => {
    
    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if(item.id === todo.id) {
                    return {...item, completed: !item.completed}
                }
                return item;
            })
        )
    }

    const handleEdit = ({id}) => {
        const findTodo = todos.find((todo) => todo.id === id)
        setEditTodo(findTodo)
    }

    const handleDelete = ({id}) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this task?")
        if(confirmDelete){
            setTodos(todos.filter((todo) => todo.id !== id))
        }
    }
    return(
        <div>
            {todos.map((todo) => (
                <li className={`list-item ${todo.completed ? "list-item-complete" : ""}`} key={todo.id}>
                    <button className="button-complete" onClick={() => handleComplete(todo)}>
                            <i className={`${todo.completed ? "fa fa-check-circle" : "fa fa-check-circle-o"}`}></i>
                    </button>
                    <input 
                        type="text" 
                        value={todo.title} 
                        className={`list ${todo.completed ? "complete" : ""}`} 
                        onChange={(event) => event.preventDefault()} 
                    />
                    <div>
                        <button className="button-edit" onClick={() => handleEdit(todo)}>
                            <i className="fa fa-edit"></i>
                        </button>
                        <button className="button-delete" onClick={() => handleDelete(todo)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </div>
                </li>
            )
            )}
        </div>
    )
}

export default ToDoList;