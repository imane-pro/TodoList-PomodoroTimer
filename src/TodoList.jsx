import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleAddTask = () => {
    if (inputValue.trim() === '') return;
    if (editIndex !== null) {
      const updatedTasks = tasks.map((task, index) => 
        index === editIndex ? inputValue : task
      );
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      setTasks([...tasks, inputValue]);
    }
    setInputValue('');
  };

  const handleEditTask = (index) => {
    setInputValue(tasks[index]);
    setEditIndex(index);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-list">
      <h2>To-Do List</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new task..."
      />
      <button onClick={handleAddTask}>
        {editIndex !== null ? 'Update Task' : 'Add Task'}
      </button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            <span>{task}</span>
            <div className="task-buttons">
              <button onClick={() => handleEditTask(index)}>Edit</button>
              <button onClick={() => handleDeleteTask(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
