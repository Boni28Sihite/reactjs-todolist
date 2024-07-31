

export default function TodoListButton(props) {

    let id = props.id
    let currIndex = props.tasks.findIndex((item) => item.id == id);
    let prevIndex = currIndex - 1;
    let nextIndex = currIndex + 1;

    let prevButton = '';
    if(props.tasks[prevIndex] != undefined){
        prevButton = '👆'
    }else{
        prevIndex = ''
    }

    let nextButton = '';
    if(props.tasks[nextIndex] != undefined){
        nextButton = '👇'
    }else{
        nextIndex = ''
    } 

    return (
        <>
            <span><button onClick={() => props.moveTask(currIndex, prevIndex)}>{prevButton}</button></span>
            <span><button onClick={() => props.moveTask(currIndex, nextIndex)}>{nextButton}</button></span>
            <span><button onClick={() => props.removeTask(props.id)}>🗑️</button></span>
        </>
    )
}
