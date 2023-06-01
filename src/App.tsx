import styles from './App.module.css'
import './global.css'

import { CreateTask } from './components/CreateTask'
import { EmptyList } from './components/EmptyList'
import { Header } from './components/Header'
import { Task } from './components/Task'
import { TasksMain } from './components/TasksMain'
import { useState } from 'react'

import { v4 as uuidv4 } from 'uuid';

interface taskProps {
  id: string;
  isComplete: boolean;
  content: string;
}

function App() {

  const [taskList, setTaskList] = useState<taskProps[]>([
    {
      id: '1',
      isComplete: false,
      content: 'Fazer uma bela lista de compras'
    },
    {
      id: '2',
      isComplete: true,
      content: 'Eu não estou em perigo, Skyler. Eu sou o perigo. Acha que sou eu quem vai atender a porta e levar um tiro? Não. Eu sou o cara que bate na porta....'
    },
    {
      id: '3',
      isComplete: false,
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident animi, repudiandae quia, laboriosam ducimus enim rerum nobis corporis sunt tenetur dolorum sed repellat ipsum, quod officiis voluptate odit incidunt id'
    },
    {
      id: '4',
      isComplete: true,
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident animi, '
    }
  ])

  const [tasks, setTasks] = useState({ id: '', isComplete: true, content: '' })

  function hasTaskInList() {
    let has
    taskList.length != 0 ? has = true : has = false
    return has
  }

  function countTasksComplete() {
    let sum: number = 0;
    taskList.map(task => {
      task.isComplete ? sum += 1 : sum = sum
    })
    return sum
  }

  function createTask(content: string) {
    event?.preventDefault()
    const newTask: taskProps = { id: uuidv4(), isComplete: false, content: content }
    setTasks(newTask)
    setTaskList([...taskList, newTask])
  }

  function handleDeleteTask(id: string) {
    const tasksWhithoutDeleteOne = taskList.filter(task => {
      return task.id !== id;
    })
    setTaskList(tasksWhithoutDeleteOne)
  }

  function handleCompleteTask(id: string) {
    setTaskList(prevList => {
      return prevList.map(task => {
        if (task.id === id) {
          if (task.isComplete == true) {
            return { ...task, isComplete: false };
          } else {
            return { ...task, isComplete: true };
          }
        }
        return task;
      });
    });
  }

  function renderTasks() {
    return taskList.map(task => {
      return (
        <Task
          key={task.id}
          task={task}
          content={task.content}
          isComplete={task.isComplete}
          handleDeleteTask={handleDeleteTask}
          handleCompleteTask={handleCompleteTask}
        />
      )
    })
  }

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        <CreateTask createTask={createTask} />
        <TasksMain createdTasks={taskList.length} completedTasks={countTasksComplete()} />
        {hasTaskInList() ? renderTasks() : <EmptyList />}
      </div>
    </div>
  )
}

export default App