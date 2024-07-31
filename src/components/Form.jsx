

export default function Form(props) {
    return (
        <div className="wrapper">
            <header>
                <h3>🔰 TODOLIST </h3> <span>{props.taskCompleted || '0'}/{props.tasks.length}</span>
            </header>

            <form className="input-box">
                <input type="text" placeholder="Add Your Task" ref={props.newTask}/>
                <button type="submit" onClick={props.addTask} >Add Task</button>
            </form>
        </div>
    )
}
