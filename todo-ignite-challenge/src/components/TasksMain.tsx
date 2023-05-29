import styles from './TasksMain.module.css'

import clipboardIcon from '../assets/clipboardIcon.svg'
import { Task } from './Task'

export function TasksMain() {
  return (
    <div className={styles.main}>
      <header>
        <strong className={styles.createdTasks}>
          Created Tasks
          <span className={styles.span}>46</span>
        </strong>
        <strong className={styles.completed}>
          Completed Tasks
          <span className={styles.span}>5 de 46</span>
        </strong>
      </header>
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <div className={styles.emptyList}>
        <img src={clipboardIcon} alt="clipboard Icon" />
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  )
}