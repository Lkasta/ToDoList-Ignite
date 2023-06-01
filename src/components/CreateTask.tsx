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

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setTextTask(event.target.value)
  }

  function handleNewTaskInvalid(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Preencha este campo!')
  }
  
  return (   
    <form className={styles.form}>
      <input
        type="text"
        required
        onInvalid={handleNewTaskInvalid}
        value={textTask}
        placeholder='Adicione uma nova tarefa'
        onChange={alterText}
      />
      <button type='submit' onClick={handleCreateTask}>
        <p>Criar</p>
        <PlusCircle size={20} />
      </button>
    </form>
  )
}