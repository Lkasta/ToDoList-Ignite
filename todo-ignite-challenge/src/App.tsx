import styles from './App.module.css'
import './global.css'

import { Header } from './components/Header'
import { CreateTask } from './components/CreateTask'
import { TasksMain } from './components/TasksMain'

function App() {

  return (
    <div className={styles.body}>
      <Header />
      <div className={styles.container}></div>
      <CreateTask />
      <TasksMain />
    </div>
  )
}

export default App
