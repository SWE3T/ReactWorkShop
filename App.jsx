import { useState } from 'react'
import {Form}  from './components/form'

function App() {
  const [tasks, setTasks] = useState([
    {name : 'Pagar Boleto', completed: false},
    {name : 'Pagar Pizzaria', completed: false},
    {name : 'Pagar Veterinário', completed: false},
  ])

  const handleSubmit = (newTask) => {
    setTasks([...tasks, newTask])
  }

  const remove = (taskName) => {
    const tasksUpdate = tasks.filter(task => task.name !== taskName)
    setTasks(tasksUpdate)
  }

  const completed = (taskIndex) => {
    const tasksUpdate = [...tasks]
    tasks[taskIndex].completed = !tasks[taskIndex].completed
    setTasks(tasksUpdate)
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}/>
      <ul>
        {tasks.map((task, index) => <li key={task.name}>
            {task.name} 
            <button onClick={() => remove(task.name)}>remover</button>
            <button onClick={() => completed(index)}>
              {task.completed ? 'Desmarcar' : 'Completar'}
            </button>
          </li>)}
      </ul>
  </div> 
  )
}

export default App
