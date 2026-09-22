function Task(props){
    return (
       <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
        <p className="title">{props.title}</p>
        <p>Due: {props.deadline}</p>
        <p>{props.description}</p>
        <p style={{backgroundColor: props.priority=="Low" ? 'green' : props.priority=="Medium" ? 'orange' : 'red'}}>Priority: {props.priority}</p>
        <button onClick={props.markDone} className='doneButton'>Done</button>
        <button className='deleteButton' onClick={props.deleteTask}>Delete</button>
       </div>
    )
}

export default Task;