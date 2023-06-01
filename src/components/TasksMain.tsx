import styles from './TasksMain.module.css'

export function TasksMain({ createdTasks, completedTasks }: { createdTasks:number, completedTasks:number}) {

  return (
    <div className={styles.main}>
      <header>
        <strong className={styles.createdTasks}>
          Created Tasks
          <span className={styles.span}>{createdTasks}</span>
        </strong>
        <strong className={styles.completed}>
          Completed Tasks
          <span className={styles.span}>{completedTasks} de {createdTasks}</span>
        </strong>
      </header>
    </div>
  )
}