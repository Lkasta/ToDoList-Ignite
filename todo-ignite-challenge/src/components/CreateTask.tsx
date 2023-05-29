import { PlusCircle } from '@phosphor-icons/react';
import styles from './CreateTask.module.css';

export function CreateTask() {
  return (
    <form className={styles.form}>
      <input type="text" placeholder='Adicione uma nova tarefa'/>
      <button>
        <p>Criar</p>
        <PlusCircle size={20} />
      </button>
    </form>
  )
}