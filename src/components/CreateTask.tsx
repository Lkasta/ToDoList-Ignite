import { PlusCircle } from '@phosphor-icons/react';
import styles from './CreateTask.module.css';
import { ChangeEvent, useState } from 'react';

interface createTaskProps {
  createTask: (content: string) => void;
}

export function CreateTask({ createTask }: createTaskProps) {
  const [textTask, setTextTask] = useState('')

  function alterText(event: ChangeEvent<HTMLInputElement>) {
    setTextTask(event.target.value);
  }

  function handleCreateTask() {
    createTask(textTask)
    setTextTask('')
  }

  const isNewTaskEmpty = textTask.length === 0
  
  return (   
    <form className={styles.form}>
      <input
        type="text"
        required
        value={textTask}
        placeholder='Adicione uma nova tarefa'
        onChange={alterText}
      />
      <button type='submit' onClick={handleCreateTask} disabled={isNewTaskEmpty}>
        <p>Criar</p>
        <PlusCircle size={20} />
      </button>
    </form>
  )
}