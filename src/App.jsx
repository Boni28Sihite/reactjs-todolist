import { useEffect, useRef, useState } from 'react'
import './App.css'
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {

  const newTask = useRef('');
  const STORAGE = 'TODOLIST_APP'
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem(STORAGE)) || []
  });
  const [taskCompleted, setTaskCompleted] = useState()


  useEffect(() =>{
    localStorage.setItem(STORAGE, JSON.stringify(tasks))
    const completed = tasks.filter((item) => item.status == true).length
    setTaskCompleted(completed)
  }, [tasks])

  const setId = () => {
    if(tasks == ''){
      return 1
    }else{
      return tasks[0].id + 1
    }
  }

  function addTask(e) {
    e.preventDefault();

    if (newTask.current.value == '') {
      alert('Please, insert data.');
    }

    const data = {
      id: setId(),
      task: newTask.current.value,
      status: false
    }

    newTask.current.value = ''
    setTasks([...tasks, data])
  }

  function setCompleted(id) {

    let taskItem = [];

    tasks.map((item, index) => {
      if(item.id == id){
        taskItem[index] = {...item, status: !item.status}
      }else{
        taskItem[index] = item
      }
    })

    setTasks(taskItem)
  }

  function moveTask(currIndex, updateIndex){
    const currData = tasks[currIndex]
    const updateData = tasks[updateIndex]

    tasks[currIndex] = {...currData, id: updateData.id}
    tasks[updateIndex] = {...updateData, id: currData.id}

    const newData = [...tasks]
    setTasks(newData);
  }

  function removeTask(id){
    if(window.confirm('Are you sure?')){
      setTasks(tasks.filter((item) => item.id != id))
    }
  }

  return (
    <>
      <Form addTask={addTask} newTask={newTask} taskCompleted={taskCompleted} tasks={tasks}/>
      <TodoList tasks={tasks} setCompleted={setCompleted} moveTask={moveTask} removeTask={removeTask}/>
    </>
  )
}

export default App
