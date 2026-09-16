import React, { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [taskState, setTaskState] = useState({
    tasks: [
      {title:"Dishes", description:"Empty dishwasher", deadline:"Today"},
      {title:"Laundry", description:"Fold clothes and put away", deadline:"Tomorrow"},
      {title:"Tidy up", deadline:"Today"}
    ]
  });

  return (
    <div className='container'>
      <h1>Tasky</h1>
      <Task title={taskState.tasks[0].title} deadline={taskState.tasks[0].deadline} description={taskState.tasks[0].description}></Task>
      <Task title={taskState.tasks[1].title} deadline={taskState.tasks[1].deadline} description={taskState.tasks[1].description}></Task>
      <Task title={taskState.tasks[2].title} deadline={taskState.tasks[2].deadline} description={taskState.tasks[2].description}></Task>
    </div>
  );
}

export default App
