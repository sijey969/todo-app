import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import Form from "./components/Form";
import Functions from "./components/Functions";
import ToDoList from "./components/ToDoList";
import './style.css';

const App = () => {
 const [input, setInput] = useState("");
 const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      return JSON.parse(savedTodos);
    }
    return [];
 });
 const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const markAllComplete = () => {
    setTodos(todos.map(todo => ({ ...todo, completed: true })));
  };

  const deleteAll = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete all the tasks?")
    if(confirmDelete){
      setTodos([]);
    }
  };

  const markAllIncomplete = () => {
    setTodos(todos.map(todo => ({ ...todo, completed: false })));
  };

  const deleteAllCompleted = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete all the completed tasks?")
    if(confirmDelete){
      setTodos(todos.filter(todo => !todo.completed));
    }
  };

 return (
    <div className="top">
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form 
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <div> 
          <Functions 
            markAllComplete={markAllComplete}
            deleteAll={deleteAll}
            markAllIncomplete={markAllIncomplete}
            deleteAllCompleted={deleteAllCompleted}
          />
        </div>
        <div className='ToDoList'> 
          <ToDoList
            todos={todos} 
            setTodos={setTodos} 
            setEditTodo={setEditTodo}
          />
        </div>
      </div>
    </div>
    </div>
 );
}

export default App;
