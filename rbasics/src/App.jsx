import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className='container'>
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" description="Use the dishwasher" />
      <Task title="Laundry" deadline="Tomorrow" description="Washing machine in demand" />
      <Task title="Tidy" deadline="Today" description="You can do it" />
    </div>
  );
}

export default App
