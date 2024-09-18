import React from 'react';

import './App.css';
import PomodoroTimer from './PomodoroTimer';
import TodoList from './TodoList';


const App = () => {
  return (
    <div className="app-container">
    <PomodoroTimer/>
    <TodoList/>
    </div>
  );
};

export default App;
