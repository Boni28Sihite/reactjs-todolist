import TodoListButton from "./TodoListButton";


export default function TodoList(props) {

    props.tasks.sort((a,b) => b.id - a.id)

    return (
        <div className="wrapper">
            <ul>
                {
                    props.tasks.map((item) => {

                        let isStatus = '';
                        let classes = '';

                        if(item.status == false){
                            isStatus = '◻️';
                        }else{
                            isStatus = '✅';
                            classes = 'strike';
                        }

                        return (
                            <li key={item.id}>
                                <div className='left'><button onClick={() => props.setCompleted(item.id)}>{isStatus}</button></div>
                                <div className={`center ${classes}`}>{item.task}</div>
                                <div className='right'>
                                    <TodoListButton id={item.id} tasks={props.tasks} moveTask={props.moveTask} removeTask={props.removeTask}/>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
