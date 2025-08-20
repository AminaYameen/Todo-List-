"use client";
import React, { useState, useEffect } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState<string[]>([]);
  const [task, setTask] = useState<string>("");

  
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos)); 
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos)); 
  }, [todos]);

  const addTodo = () => {
    if (task.trim() === "") return; 
     setTodos((prevTodos) => [...prevTodos, task.trim()]); 
    setTask("");
  };

  const deleteTodo = (index: number) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div style={{ margin: "80px auto", width: "300px",textAlign: "center" }}>
      <h1>Todo List</h1>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter your  task"
      />
      <button onClick={addTodo} style={{ margin: "10px 10px",backgroundColor: "Red",padding: "15px 15px",cursor: "pointer",border: "2px solid",color:"white"  }}>Add</button>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo, index) => (
          <li key={index} style={{ margin: "8px 0" ,backgroundColor:"#C5E2E6", borderBlockStyle:"solid" }}>
            {todo}
            <button
              onClick={() => deleteTodo(index)}
              style={{ marginLeft: "10px",backgroundColor:"white" }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
