import styles from "./Task.module.css";

import { Trash } from "@phosphor-icons/react";

export interface TaskType {
  id: string;
  isComplete: boolean;
  content: string;
}
interface TasksProps {
  task: TaskType;
  content: string;
  isComplete: boolean;
  handleDeleteTask?: (id: string) => void;
  handleCompleteTask?: (id: string) => void;
}

export function Task({
  task,
  isComplete,
  handleDeleteTask,
  handleCompleteTask,
}: TasksProps) {
  function handleDeleteTasks() {
    if (handleDeleteTask) {
      handleDeleteTask(task.id);
    }
  }

  function handleCompleteTasks() {
    if (handleCompleteTask) {
      handleCompleteTask(task.id);
    }
  }

  return (
    <div className={styles.task}>
      <strong
        className={isComplete ? styles.circleComplete : styles.circle}
        onClick={handleCompleteTasks}
      />
      <p className={isComplete ? styles.contentComplete : styles.content}>
        {task.content}
      </p>
      <span className={styles.trash}>
        <Trash size={20} onClick={handleDeleteTasks} />
      </span>
    </div>
  );
}
