import './App.css';
import React from 'react';
import TaskForm from './components/TaskForm';
import AddTaskForm from './components/AddTaskForm';


function App() {
  return (
    <div className="App">

     
       <AddTaskForm />
       <TaskForm /> 
      
    </div>
  );
}

export default App;
