import clipboardIcon from '../assets/clipboardIcon.svg'
import styles from './EmptyList.module.css'


export function EmptyList() {
  return (
    <div className={styles.emptyList}>
      <img src={clipboardIcon} alt="clipboard Icon" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}